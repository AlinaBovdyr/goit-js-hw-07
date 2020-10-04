const refs = {
  input: document.querySelector('#controls input'),
  renderBtn: document.querySelector('button[data-action="render"]'),
  destroyBtn: document.querySelector('button[data-action="destroy"]'),
  divBoxes: document.querySelector('#boxes'),
};

refs.renderBtn.addEventListener('click', onRenderBtnClick);
refs.destroyBtn.addEventListener('click', destroyBoxes);
refs.input.addEventListener('input', onInputEnter);

function createBoxes(amount) {
  const boxEl = document.createElement('div');
  const arr = new Array(amount);
  arr.fill(boxEl, 0);

  return arr;
}

function onRenderBtnClick(event) {
  refs.divBoxes.append(...createBoxes());
  console.log(refs.divBoxes);
}

function destroyBoxes() {}

function onInputEnter(event) {
  const amount = event.currentTarget.value;
  console.log(amount);
  return amount;
}
