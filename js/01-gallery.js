import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

// ========== 1. Створення і рендер розмітки ==========
const gallery = document.querySelector('.gallery');

const galleryRef = (items) => 
    items.map(item => `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`).join(' ');    

const addGalleryItems = galleryRef(galleryItems);
// console.log(addGalleryItems);

gallery.insertAdjacentHTML('afterbegin', addGalleryItems);

// ==============================
// ==============================

// ========== 2. Реалізація делегування на div.gallery ==========


const clickImg = (event) => {
    event.preventDefault();
   const {target: imageEl} = event

    const instance = basicLightbox.create(`
    <img src='${imageEl.dataset.source}' alt='${imageEl.alt}'>
`)
instance.show()

    if (!imageEl.dataset.source) {
        return;
    }   
}

gallery.addEventListener('click', clickImg);

// ==============================
// ==============================

// ========== 3. 