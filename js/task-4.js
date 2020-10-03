const counter = {};

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector('#value');

decrementBtn.addEventListener('click', event => {
  console.log('Вешаю слушателя');
});

incrementBtn.addEventListener('click', event => {
  console.log('Вешаю слушателя');
});
