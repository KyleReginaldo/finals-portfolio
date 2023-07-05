const educationItems = document.querySelectorAll('.education-item');

educationItems.forEach(item => {
  const popUpBox = item.querySelector('.pop-up-box');
  item.addEventListener('mouseenter', () => showPopUp(popUpBox));
  item.addEventListener('mouseleave', () => hidePopUp(popUpBox));
});

function showPopUp(popUpBox) {
  gsap.to(popUpBox, { opacity: 1, left: -450, pointerEvents: 'auto', duration: 0.5 });
}

function hidePopUp(popUpBox) {
  gsap.to(popUpBox, { opacity: 0, left: 0, pointerEvents: 'none', duration: 0.5 });
}