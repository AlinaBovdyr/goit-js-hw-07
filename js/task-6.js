const input = document.querySelector('#validation-input');

input.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
  const inputLength = event.currentTarget.value.length;
  // console.log(inputLength);
  input.classList.add('valid');

  if (inputLength > 6) {
    input.classList.remove('valid');
    input.classList.add('invalid');
  } else input.classList.remove('invalid');
}
