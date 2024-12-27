
const buttons = document.querySelectorAll('.color-btn'); 

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const color = button.getAttribute('data-color');
    const card = button.closest('.card');
    card.style.backgroundColor = color;
  });
});
