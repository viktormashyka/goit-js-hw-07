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
// const basicLightbox = require('basiclightbox');
// import * as basicLightbox from 'basiclightbox';

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
      data-alt="${image.description}"
    />
  </a>
</div>`
  )
  .join('');
// console.log(markup);

galleryEl.insertAdjacentHTML('beforeend', markup);

// console.log(basicLightbox);

// instance.show();
// console.log(instance);

const sourceEl = document.querySelector('img[data-source]');
console.log(sourceEl);
// console.log(sourceEl.dataset.source);

galleryEl.addEventListener('click', openModalImg);

function openModalImg(evt) {
  evt.preventDefault();
  const selectedImg = evt.target.dataset.source;
  console.log(selectedImg);
  const instance = basicLightbox.create(selectedImg);
  instance.show();
}

//*******Зразки шаблонів basicLightbox */

// document.querySelector('button.image').onclick = () => {

// 	basicLightbox.create(`
// 		<img width="1400" height="900" src="https://placehold.it/1400x900">
// 	`).show()

//**** */

// import * as basicLightbox from 'basiclightbox';

// const instance = basicLightbox.create(`
//     <img src="assets/images/image.png" width="800" height="600">
// `);

// instance.show();
