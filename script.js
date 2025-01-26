// Image Slider functionality for product images
function imgSlider(imageSource) {
    // Change the main image based on the clicked thumbnail
    const mainImage = document.querySelector('.coffee-image');
    mainImage.src = imageSource;
}

// Circle Color Change on Image Thumbnail Click
function changeCircleColor(color) {
    // Change the color of the circle on click
    const circle = document.querySelector('.circle');
    circle.style.backgroundColor = color;
}
