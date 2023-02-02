const hamburguerIcon = document.querySelector('.nav__input');
const closeLabel = document.querySelector('.nav__label');

hamburguerIcon.addEventListener('click',()=>{
  closeLabel.classList.toggle('nav__hamburguer--open');
})