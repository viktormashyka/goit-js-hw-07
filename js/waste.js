// Завдання 1 - галерея зображень
// Створи галерею з можливістю кліку по її елементах і перегляду
// повнорозмірного зображення у модальному вікні. Подивися демо
// відео роботи галереї.

// Виконуй це завдання у файлах 01 - gallery.html і 01 - gallery.js.
// Розбий його на декілька підзавдань:

// Створення і рендер розмітки на підставі масиву даних galleryItems
// і наданого шаблону елемента галереї.
// Реалізація делегування на div.gallery і отримання url великого зображення.
// Підключення скрипту і стилів бібліотеки модального вікна basicLightbox.
// Використовуй CDN сервіс jsdelivr і додай у проект посилання на
// мініфіковані(.min) файли бібліотеки.
// Відкриття модального вікна по кліку на елементі галереї.
// Для цього ознайомся з документацією і прикладами.
// Заміна значення атрибута src елемента < img > в модальному вікні
// перед відкриттям. Використовуй готову розмітку модального вікна
// із зображенням з прикладів бібліотеки basicLightbox.
// Розмітка елемента галереї
// Посилання на оригінальне зображення повинно зберігатися в data - атрибуті
// source на елементі < img >, і вказуватися в href посилання. Не додавай
// інші HTML теги або CSS класи, крім тих, що містяться в цьому шаблоні.

// <div class="gallery__item">
//   <a class="gallery__link" href="large-image.jpg">
//     <img
//       class="gallery__image"
//       src="small-image.jpg"
//       data-source="large-image.jpg"
//       alt="Image description"
//     />
//   </a>
// </div>
//     Зверни увагу на те, що зображення обгорнуте посиланням, отже по кліку
// за замовчуванням користувач буде перенаправлений на іншу сторінку.
// Заборони цю поведінку за замовчуванням.

// Закриття з клавіатури
// УВАГА
// Наступний функціонал не обов'язковий для здавання завдання, але буде
// хорошою додатковою практикою.

// Додай закриття модального вікна після натискання клавіші Escape.
// Зроби так, щоб прослуховування клавіатури було тільки доти, доки
// відкрите модальне вікно.Бібліотекаи basicLightbox містить метод
// для програмного закриття модального вікна.

import { galleryItems } from './gallery-items.js';
// Change code below this line
//*******************Version 1) *****************/
const headEl = document.querySelector('head');
const linkLigtbox = `<link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/dist/basicLightbox.min.css"
    />`;
headEl.insertAdjacentHTML('beforeend', linkLigtbox);

const bodyEl = document.querySelector('body');
const scriptLigtbox = `<script src="https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/dist/basicLightbox.min.js"></script>`;
bodyEl.insertAdjacentHTML('beforeend', scriptLigtbox);

const galleryEl = document.querySelector('.gallery');
// console.log(galleryEl);

const markup = galleryItems
  .map(
    image => `<div class="gallery__item">
  <a class="gallery__link" href="${image.original}">
    <img
      class="gallery__image"
      src="${image.preview}"
      data-source="${image.original}"
      alt="${image.description}"
    />
  </a>
</div>`
  )
  .join('');
console.log(markup);

galleryEl.insertAdjacentHTML('beforeend', markup);

// const source = galleryEl.querySelectorAll('[data-source]');
// // const source = img.gallery_image.dataset.souce;
// console.log(source);

// galleryEl.addEventListener('click', openModalZoom);

// function openModalZoom(evt) {
//   const openImgZoom = evt.target.closest(dataset.source);
//   console.log(openImgZoom);
// }

//*****************Version 2)****************/
// const galleryEl = document.querySelector('.gallery');
// console.log(galleryEl);
// // import * as basicLightbox from 'basiclightbox';
// galleryEl.addEventListener('click', openModalZoom);

// function openModalZoom(evt) {
//   evt.preventDefault();
//   console.log('click');
//   const instance = basicLightbox.create(`<div class="gallery__item">
//   <a class="gallery__link" href="${image.original}">
//     <img
//       class="gallery__image"
//       src="${image.preview}"
//       width="800" height="600"
//       data-source="${image.original}"
//       alt="${image.description}"
//     />
//   </a>
// </div>`);
//   const markup = galleryItems.map(image => createElement(image));
//   galleryEl.append(...markup);
//   instance.show();
// }

//*********************************** */

// import * as basicLightbox from 'basiclightbox';
// const instance = basicLightbox.create(`;
//     <img src="${image.preview}" width="800" height="600">
// `);
// instance.show();

// import * as basicLightbox from 'basiclightbox';
// const instance = basicLightbox.create(`;
//     <img src="assets/images/image.png" width="800" height="600">
// `);
// instance.show();

// const instance = element => {
//   const itemEl = basicLightbox.create(`
// <img src="assets/images/image.png" width="800" height="600">`);
//   return itemEl;
// };

// const markup = galleryItems.map(image => createElement(image));
// galleryEl.append(...markup);
// instance.show();

// //**Варіант 2)**//
// const createElements = element => {
//   const itemEl = document.createElement('li');
//   itemEl.textContent = element;
//   return itemEl;
// };

// const markup = ingredients.map(ingredient => createElements(ingredient));

// console.log(markup);
// listAllEl.append(...markup);
