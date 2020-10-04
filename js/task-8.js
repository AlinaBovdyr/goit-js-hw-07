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
  console.log(event.currentTarget.value);

  // const amount = Number(event.currentTarget.value);

  // console.log(createBoxes(amount));
}

function getRandomColor() {
  var color = '';
  for (var i = 0; i < 3; i++) {
    var sub = Math.floor(Math.random() * 256).toString(16);
    color += sub.length == 1 ? '0' + sub : sub;
  }
  return '#' + color;
}

function onRenderBtnClick() {
  console.log(refs.input.value);
  refs.divBoxes.append(...createBoxes(Number(refs.input.value)));
  console.log(refs.divBoxes);

  const createdDivBoxes = refs.divBoxes.children;
  console.log(createdDivBoxes);

  for (let i = 0; i < createdDivBoxes.length; i += 1) {
    const boxWidth = 30;
    const boxHeight = 30;
    createdDivBoxes[i].style.backgroundColor = getRandomColor();
    createdDivBoxes[i].style.width = `${boxWidth + 10}px`;
    createdDivBoxes[i].style.height = `${boxHeight + 10}px`;
  }

  return refs.divBoxes;
}

function onDestroyBtnClick() {
  console.log('нажали кнопку Очистить');
  refs.divBoxes.innerHTML = '';
  console.log(refs.divBoxes);
  return refs.divBoxes;
}
