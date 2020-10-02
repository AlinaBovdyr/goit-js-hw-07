const liEls = document.querySelectorAll('.item');
const liElsQuantity = liEls.length;

console.log(`В списке ${liElsQuantity} категории.`);

liEls.forEach(liEl => {
  const titleEl = liEl.firstElementChild;
  const quantityOfListEl = liEl.lastElementChild.children.length;

  console.log(`Категория: ${titleEl.textContent}`);
  console.log(`Количество элементов: ${quantityOfListEl}`);
});
