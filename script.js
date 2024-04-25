let currentImageIndex = 0;
const images = document.querySelectorAll('.gallery-image');

function showImage(index) {
    images.forEach(image => image.style.display = 'none');
    images[index].style.display = 'block';
}

function nextImage() {
    currentImageIndex++;
    if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }
    showImage(currentImageIndex);
}

function prevImage() {
    currentImageIndex--;
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    }
    showImage(currentImageIndex);
}

showImage(currentImageIndex);
