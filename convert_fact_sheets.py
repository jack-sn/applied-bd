import html
import re
from pathlib import Path

import pdfplumber

SOURCE_DIR = Path('Fact Sheets/Fact Sheets english')
OUTPUT_DIR = Path('fact-sheets-html')
OUTPUT_DIR.mkdir(exist_ok=True)

bullet_markers = ['\uf0a7', '•', '�', '*']
section_keywords = {
    'objective', 'objectives', 'focus', 'benefit', 'benefits', 'content',
    'pre-show', 'post-show', 'pre show', 'post show', 'pre-workshop',
    'post-workshop', 'pre workshop', 'post workshop', 'methodology',
    'target', 'targets', 'agenda', 'track record', 'duration',
    'participation', 'participants', 'preparation', 'approach', 'results',
    'outcome', 'overview', 'activities', 'participant', 'program',
    'structure', 'experiences', 'experience', 'background', 'strategy',
    'process', 'format'
}
footer_tokens = ['contact:', 'www.applied', 'info@', 'tel ', 'fax ', 'cell ',
                 'kreuzwiesen', 'munich (germany)']


def normalize_raw(text: str) -> str:
    text = text.replace('\r', '\n')
    text = text.replace('\uf0a7', '•')
    text = text.replace('\u2022', '•')
    text = text.replace('\u2013', '-')
    text = text.replace('\u2014', '-')
    text = text.replace('\u2019', "'")
    text = text.replace('\u201c', '"').replace('\u201d', '"')
    return text


def clean_line(line: str) -> str:
    return re.sub(r'[ \t]+', ' ', line).strip()


def split_bullet_line(line: str):
    for marker in bullet_markers:
        if marker in line:
            parts = line.split(marker, 1)
            lead = clean_line(parts[0])
            item = clean_line(parts[1])
            return lead, item
    return None, None


def is_heading(line: str) -> bool:
    stripped = line.strip()
    if not stripped:
        return False
    if stripped.endswith(':'):
        return True
    low = stripped.lower()
    if low in section_keywords:
        return True
    for keyword in section_keywords:
        if low.startswith(keyword + ' ') and len(stripped.split()) <= 8:
            return True
        if low.endswith(' ' + keyword) and len(stripped.split()) <= 8:
            return True
    if stripped[0].isupper() and len(stripped.split()) <= 4 and stripped.replace('-', '').replace(' ', '').isalpha():
        return True
    return False


def merge_lines(lines):
    merged = []
    i = 0
    while i < len(lines):
        line = lines[i]
        if not line:
            i += 1
            continue
        if i + 1 < len(lines):
            nxt = lines[i + 1]
            if line.endswith('-'):
                merged.append(line[:-1] + nxt)
                i += 2
                continue
            if line.startswith('•') and not nxt.startswith(tuple(bullet_markers)) and not is_heading(nxt):
                merged.append(line + ' ' + nxt)
                i += 2
                continue
            if nxt and not nxt.startswith(tuple(bullet_markers)) and nxt[0].islower() and not line.endswith(('.', '!', '?', ';', ':')) and not is_heading(line):
                merged_line = line + ' ' + nxt
                i += 2
                while i < len(lines) and lines[i] and not lines[i].startswith(tuple(bullet_markers)) and lines[i][0].islower() and not is_heading(lines[i]):
                    merged_line += ' ' + lines[i]
                    i += 1
                merged.append(merged_line)
                continue
        merged.append(line)
        i += 1
    return merged


def parse_text(text: str) -> list[str]:
    raw = normalize_raw(text)
    raw_lines = raw.splitlines()
    lines = []
    for raw_line in raw_lines:
        line = clean_line(raw_line)
        if not line:
            continue
        low = line.lower()
        if 'contact:' in low:
            line = line[:low.index('contact:')].strip()
            if not line:
                break
        if any(tok in low for tok in footer_tokens) and 'contact:' not in low:
            break
        lead, item = split_bullet_line(line)
        if lead and item:
            if lead:
                lines.append(lead)
            lines.append('• ' + item)
        else:
            lines.append(line)
    return merge_lines(lines)


def classify_line(line: str) -> str:
    if not line:
        return 'blank'
    if line.startswith('•'):
        return 'bullet'
    if is_heading(line):
        return 'heading'
    return 'paragraph'


def build_html(lines: list[str]) -> str:
    title = lines[0] if lines else 'Fact Sheet'
    body = [f'<h1>{html.escape(title)}</h1>']
    start = 1
    if len(lines) > 1 and classify_line(lines[1]) == 'paragraph':
        body.append(f'<p class="subtitle">{html.escape(lines[1])}</p>')
        start = 2
    i = start
    while i < len(lines):
        typ = classify_line(lines[i])
        if typ == 'heading':
            body.append(f'<h2>{html.escape(lines[i])}</h2>')
            i += 1
            continue
        if typ == 'bullet':
            items = []
            while i < len(lines) and classify_line(lines[i]) == 'bullet':
                items.append(html.escape(lines[i].lstrip('•').strip()))
                i += 1
            body.append('<ul>\n' + '\n'.join(f'  <li>{item}</li>' for item in items) + '\n</ul>')
            continue
        body.append(f'<p>{html.escape(lines[i])}</p>')
        i += 1
    return '\n'.join(body)


def slugify(name: str) -> str:
    slug = name.lower()
    slug = slug.replace(' ', '-')
    slug = slug.replace('_', '-')
    slug = re.sub(r'[^a-z0-9\-]+', '', slug)
    slug = re.sub(r'-{2,}', '-', slug)
    slug = slug.strip('-')
    return slug


def output_filename(pdf_path: Path) -> Path:
    stem = pdf_path.stem
    slug = slugify(stem)
    if not slug.startswith('fact-sheet-'):
        slug = 'fact-sheet-' + slug
    return OUTPUT_DIR / f'{slug}.html'


def extract_pdf_text(pdf_path: Path) -> str:
    with pdfplumber.open(pdf_path) as pdf:
        pages = []
        for page in pdf.pages:
            text = page.extract_text()
            if text:
                pages.append(text)
        return '\n'.join(pages)


def convert_pdf(pdf_path: Path) -> None:
    text = extract_pdf_text(pdf_path)
    if not text.strip():
        raise ValueError(f'No text extracted from {pdf_path}')
    lines = parse_text(text)
    html_body = build_html(lines)
    out_file = output_filename(pdf_path)
    out_file.write_text(html_body, encoding='utf-8')
    print(f'Wrote {out_file}')


def main() -> None:
    pdf_files = sorted(SOURCE_DIR.glob('*.pdf'))
    print(f'Found {len(pdf_files)} PDFs in {SOURCE_DIR}')
    for pdf_path in pdf_files:
        try:
            convert_pdf(pdf_path)
        except Exception as exc:
            print(f'Failed to convert {pdf_path}: {exc}')


if __name__ == '__main__':
    main()
