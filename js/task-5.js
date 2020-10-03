const input = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

input.addEventListener('input', onInputChange);

function onInputChange(event) {
  //   console.log(event.currentTarget.value);
  nameOutput.textContent = event.currentTarget.value;
}
