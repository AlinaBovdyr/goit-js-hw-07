const refs = {
  input: document.querySelector('#controls input'),
  renderBtn: document.querySelector('button[data-action="render"]'),
  destroyBtn: document.querySelector('button[data-action="destroy"]'),
  divBoxes: document.querySelector('#boxes'),
};

refs.renderBtn.addEventListener('click', onRenderBtnClick);
refs.destroyBtn.addEventListener('click', onDestroyBtnClick);
refs.input.addEventListener('input', onInputChange);

function createBoxes(amount) {
  const arr = new Array(amount).fill('');
  const boxesEl = arr.map(el => {
    const boxEl = document.createElement('div');
    boxEl.textContent = el;
    return boxEl;
  });

  return boxesEl;
}

function onInputChange(event) {
  // console.log(event.currentTarget.value);

  const amount = Number(event.currentTarget.value);

  console.log(createBoxes(amount));
}

function onRenderBtnClick() {
  refs.divBoxes.append(...createBoxes(amount));
  console.log(refs.divBoxes);
  return refs.divBoxes;
}

function onDestroyBtnClick() {
  console.log('нажали кнопку Очистить');
}
