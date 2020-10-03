const refs = {
  input: document.querySelector('#controls input'),
  renderBtn: document.querySelector('button[data-action="render"]'),
  destroyBtn: document.querySelector('button[data-action="destroy"]'),
  divBoxes: document.querySelector('#boxes'),
};

refs.renderBtn.addEventListener('click', createBoxes);
refs.destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  const boxEl = document.createElement('div');
  const arr = new Array(amount);
  arr.fill(boxEl, 0);

  return arr;
}

console.log(createBoxes(5));
refs.divBoxes.append(...createBoxes(5));
console.log(refs.divBoxes);

function destroyBoxes() {}
