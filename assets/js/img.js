// JavaScript code to find the smallest image dimensions

// Select all the images within the Swiper slider
const images = document.querySelectorAll('.swiper-slide img');

// Initialize variables for minimum width and height
let minWidth = Infinity;
let minHeight = Infinity;

// Loop through all images to find the smallest dimensions
images.forEach(image => {
  if (image.naturalWidth < minWidth) {
    minWidth = image.naturalWidth;
  }
  if (image.naturalHeight < minHeight) {
    minHeight = image.naturalHeight;
  }
});

// Set the smallest image dimensions as maximum width and height for all images
images.forEach(image => {
  image.style.maxWidth = minWidth + 'px';
  image.style.maxHeight = minHeight + 'px';
});
