const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const itemsEl = ingredients.map(el => {
  const itemEl = document.createElement('li');
  itemEl.textContent = el;

  return itemEl;
});

const listEl = document.querySelector('#ingredients');
listEl.append(...itemsEl);

console.log(listEl);

/*
* Способ 2
*
    const items = ingredients.reduce((acc, el) => {
        return (acc += `<li>${el}</li>`);
    }, '');

    const listEl = document.querySelector('#ingredients');

    listEl.innerHTML = items;
    console.log(listEl);
*
*/
