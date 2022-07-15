
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

  const instanceEl = document.querySelector('.basicLightbox')
console.log(instanceEl)
  
    if (!imageEl.dataset.source) {
        return;
  }  

// ========== 3. Exit with press Esc ========== 
  window.addEventListener('keydown', onEscClick)

function onEscClick(event) {
  if (event.code === 'Escape') {
    window.removeEventListener('keydown', onEscClick);
    instance.close();
  }
}
}

gallery.addEventListener('click', clickImg);
