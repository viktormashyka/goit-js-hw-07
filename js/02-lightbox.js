// Завдання 2 - бібліотека SimpleLightbox
// Зроби таку саму галерею як в першому завданні, але використовуючи
// бібліотеку SimpleLightbox, яка візьме на себе обробку кліків
// по зображеннях, відкриття і закриття модального вікна, а також
// гортання зображень за допомогою клавіатури.

// Необхідно трохи змінити розмітку картки галереї, використовуй
// цей шаблон.

// <a class="gallery__item" href="large-image.jpg">
//     <img class="gallery__image" src="small-image.jpg"
//         alt="Image description" />
// </a>
//     Виконуй це завдання у файлах 02 - lightbox.html і 02 - lightbox.js.
// Розбий його на декілька підзавдань:

// Створення і рендер розмітки на підставі масиву даних galleryItems
// і наданого шаблону елемента галереї.Використовуй готовий код
// з першого завдання.
// Підключення скрипту і стилів бібліотеки, використовуючи CDN
// сервіс cdnjs.Необхідно додати посилання на два файли:
// simple - lightbox.min.js і simple - lightbox.min.css.
// Ініціалізація бібліотеки після створення і додання елементів галереї
// у div.gallery.Для цього ознайомся з документацією SimpleLightbox
//     - насамперед секції «Usage» і «Markup».
// Подивися в документації секцію «Options» і додай відображення підписів
// до зображень з атрибута alt.Нехай підпис буде знизу і з'являється
// через 250 мілісекунд після відкриття зображення.

import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');
// console.log(galleryEl);

const markup = galleryItems
  .map(
    image => `
<a class="gallery__item" href="${image.original}">
<img class="gallery__image" src="${image.preview}" width="800" height="600"
         alt="${image.description}" title="${image.description}"/>
</a>`
  )
  .join('');
// console.log(markup);

galleryEl.insertAdjacentHTML('beforeend', markup);

galleryEl.addEventListener('click', openModalImg);

function openModalImg(evt) {
  evt.preventDefault();
  var lightbox = new SimpleLightbox('.gallery a', {
    captionPosition: 'bottom',
    captionDelay: 250,
  });
}
