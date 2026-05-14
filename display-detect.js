// Detect if on external display vs laptop screen
// Customize the thresholds below based on your actual screen dimensions

function detectDisplay() {
  const screenWidth = window.screen.width;
  const screenHeight = window.screen.height;

  // Log current values for debugging
  console.log(`Screen dimensions: ${screenWidth}x${screenHeight}`);
  console.log(`Available: ${window.screen.availWidth}x${window.screen.availHeight}`);

  // CUSTOMIZE THESE VALUES:
  // External display is typically wider. Adjust the threshold to match your setup.
  // Example: if external is 2560x1440 and laptop is 2560x1600, use width comparison
  //          if external is 3840x2160 and laptop is 2560x1600, use much higher threshold
  
  const EXTERNAL_DISPLAY_WIDTH_THRESHOLD = 2560; // Adjust based on your external display
  
  if (screenWidth >= EXTERNAL_DISPLAY_WIDTH_THRESHOLD) {
    document.body.classList.add('external-display');
    console.log('External display detected');
  } else {
    document.body.classList.remove('external-display');
    console.log('Laptop display detected');
  }
}

// Run on page load
document.addEventListener('DOMContentLoaded', detectDisplay);

// Re-run when window is resized (for when display changes)
window.addEventListener('resize', detectDisplay);
