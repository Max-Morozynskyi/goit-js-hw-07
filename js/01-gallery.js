import { galleryItems } from './gallery-items.js';
// Change code below this line
// import * as basicLightbox from 'basiclightbox'

const galleryRef = document.querySelector(".gallery");

const galleryMarkup = galleryItems.map(itemMarkup).join("");
galleryRef.innerHTML = galleryMarkup;
// Markup creating end

galleryRef.addEventListener("click", getBigImg)

// All functions:

function itemMarkup ({ preview, original, description }) {
  return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
  <img
  class="gallery__image"
  src="${preview}"
  data-source="${original}"
  alt="${description}"
  />
  </a>
  </div>`};
  
function getBigImg(evt) {
  if (evt.target.nodeName !== "IMG") { return; }
  evt.preventDefault();
  let currentLargeImg = evt.target.dataset.source;
  const modalWindow = basicLightbox.create(`
      <img src="${currentLargeImg}" width="800" height="600">
  `);
  modalWindow.show()
}
