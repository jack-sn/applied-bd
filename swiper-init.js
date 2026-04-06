const swiper = new Swiper(".logo-grid-container", {
  slidesPerView: 2,
  spaceBetween: 30,
  loop: true,
  freeMode: {
    enabled: true,
    sticky: false,
    momentumBounce: false,
  },
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  speed: 5000, // Speed of the autoplay crawl
  grabCursor: true,
  breakpoints: {
    640: { slidesPerView: 3 },
    1024: { slidesPerView: 5 },
  },
});

// Pause autoplay on hover, resume on leave
const container = document.querySelector(".logo-grid-container");
container.addEventListener("mouseenter", () => swiper.autoplay.stop());
container.addEventListener("mouseleave", () => swiper.autoplay.start());
