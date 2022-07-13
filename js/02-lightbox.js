import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

// ========== 1.

const gallery = document.querySelector('.gallery');

const galleryRef = (items) => 
    items.map(item => `<a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a>`).join(' ');    

const addGalleryItems = galleryRef(galleryItems);
// console.log(addGalleryItems);

gallery.insertAdjacentHTML('afterbegin', addGalleryItems);


const lightbox = new SimpleLightbox('.gallery a', {captionsData: "alt", captionDelay: 250, captionPosition: "bottom"});

// console.log(lightbox.captionsData.alt)