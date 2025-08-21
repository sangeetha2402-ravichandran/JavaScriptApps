'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

console.log(btnsOpenModal);
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};



for (let i = 0; i < btnsOpenModal.length; i++) {
  console.log(btnsOpenModal[i].textContent);

  // Adding event listener to each button

  btnsOpenModal[i].addEventListener('click', openModal);
  btnCloseModal.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);
    // Adding event listener to the overlay
  document.addEventListener('keydown', function (e) {
    console.log("A key was pressed: ", e.key);
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }

  });
}
