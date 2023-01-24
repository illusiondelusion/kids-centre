const gallerySections = document.querySelectorAll(".gallery__section");
const gallerySectionsParent = document.querySelector(".gallery__sections");
const galleryImgs = document.querySelectorAll(".gallery__img");

function changeImages(event) {
    if(event.target.classList.contains("gallery__section")) {
        galleryImgs.forEach((img, index) => (img.src = `../assets/photos/${event.target.dataset.section}/photo-${index + 1}.jpg`));
    }
}

gallerySectionsParent.addEventListener('click', changeImages);
