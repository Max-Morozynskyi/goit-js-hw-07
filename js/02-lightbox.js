import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector(".gallery");

const galleryMarkup = galleryItems.map(itemMarkup).join("");
galleryRef.innerHTML = galleryMarkup;

function itemMarkup ({ preview, original, description }) {
  return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`};

let lightbox = new SimpleLightbox('.gallery a', {  captionsData:"alt", captionDelay:250  });