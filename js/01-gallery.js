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

const galleryEl = document.querySelector('.gallery');
// console.log(galleryEl);

const markup = galleryItems
  .map(
    image => `<div class="gallery__item">
  <a class="gallery__link" href="${image.original}">
    <img
      class="gallery__image"
      src="${image.preview}"
      width="800" height="600"
      data-source="${image.original}"
      data-alt="${image.description}"
    />
  </a>
</div>`
  )
  .join('');
// console.log(markup);

galleryEl.insertAdjacentHTML('beforeend', markup);

galleryEl.addEventListener('click', onOpenModalImg);

function onOpenModalImg(evt) {
  evt.preventDefault();
  const selectedImg = evt.target.dataset.source;
  console.log(selectedImg);
  const instance = basicLightbox.create(`<img src="${selectedImg}"/>`);
  instance.show(() => {
    window.addEventListener('keydown', onEscKeyPress);
    window.addEventListener('click', onClickPress);
  });

  // window.addEventListener('keydown', onEscKeyPress);

  function onCloseModalImg(evt) {
    instance.close(() => {
      window.removeEventListener('keydown', onEscKeyPress);
      window.removeEventListener('click', onClickPress);
    });
  }

  function onClickPress(evt) {
    console.log('click');
    if ('click') {
      console.log('click close');
      onCloseModalImg(evt);
    }
  }

  function onEscKeyPress(evt) {
    console.log(evt.code);
    const ESC_KEY_CODE = 'Escape';
    if (evt.code === ESC_KEY_CODE) {
      console.log('press close');
      onCloseModalImg(evt);
    }
  }

  // function onCloseModalImg(evt) {
  //   if ('click') {
  //     console.log('click close');
  //     window.removeEventListener('keydown', onEscKeyPress);
  //     instance.close(() => {
  //       window.removeEventListener('keydown', onEscKeyPress);
  //       window.removeEventListener('click', onCloseModalImg);
  //     });
  //   }
  // }

  // function onEscKeyPress(evt) {
  //   console.log(evt.code);
  //   const ESC_KEY_CODE = 'Escape';
  //   if (evt.code === ESC_KEY_CODE) {
  //     console.log('press close');
  //     window.removeEventListener('keydown', onEscKeyPress);
  //     instance.close(() => window.removeEventListener('keydown', onEscKeyPress));
  //   }
  // }
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
