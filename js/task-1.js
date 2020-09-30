const liEls = document.querySelectorAll('.item');
const liElQuantity = liEls.length;

console.log(`В списке ${liElQuantity} категории.`);

for (const liEl of liEls) {
  const childrenEl = liEl.children;
  const titleEl = childrenEl[0];
  const quantityOfEl = childrenEl[1].children.length;
  console.log(`Категория: ${titleEl.textContent}`);
  console.log(`Количество элементов: ${quantityOfEl}`);
}
