const counter = {
  counterValue: 0,

  decrement() {
    this.counterValue -= 1;
  },

  increment() {
    this.counterValue += 1;
  },
};

const refs = {
  decrementBtn: document.querySelector('button[data-action="decrement"]'),
  incrementBtn: document.querySelector('button[data-action="increment"]'),
  valueEl: document.querySelector('#value'),
};

refs.decrementBtn.addEventListener('click', onDecrementBtnClick);
refs.incrementBtn.addEventListener('click', onIncrementBtnClick);

function onDecrementBtnClick(event) {
  counter.decrement();
  refs.valueEl.textContent = counter.counterValue;
}

function onIncrementBtnClick(event) {
  counter.increment();
  refs.valueEl.textContent = counter.counterValue;
}
