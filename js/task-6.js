const input = document.querySelector('#validation-input');

input.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
  const inputLength = event.currentTarget.value.length;

  if (inputLength === Number(input.dataset.length)) {
    input.classList.remove('invalid');
    input.classList.add('valid');
  } else input.classList.add('invalid');
}
