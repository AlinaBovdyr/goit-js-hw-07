const input = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');

input.addEventListener('input', onFontSizeChange);

function onFontSizeChange(event) {
  //   console.log(event.currentTarget.value);
  const fontSizeValue = event.currentTarget.value;
  spanEl.style.fontSize = `${fontSizeValue}px`;
}
