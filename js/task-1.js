const liEls = document.querySelectorAll('.item');
const liElQuantity = liEls.length;

console.log(`В списке ${liElQuantity} категории.`);

liEls.forEach(({ children }) => {
  const titleEl = children[0];
  const quantityOfEl = children[1].children.length;
  console.log(`Категория: ${titleEl.textContent}`);
  console.log(`Количество элементов: ${quantityOfEl}`);
});
