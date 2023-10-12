'use strict';
//Selectors
const hideModal = document.querySelector('.close-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnShowModal = document.querySelectorAll('.show-modal');
const showImg = document.querySelector('.show-modal2');
const selectImgBox = document.querySelector('.showImg');

//open and close moda, functions
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const openImg = function () {
  selectImgBox.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closeImg = function () {
  selectImgBox.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnShowModal.length; i++) {
  btnShowModal[i].addEventListener('click', openModal);
}

hideModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

//keyboard event handler

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
  if (e.key === 'Enter' && modal.classList.contains('hidden')) {
    openModal();
  }
  if (e.key === 'Escape' && !selectImgBox.classList.contains('hidden')) {
    closeImg();
  }
});

showImg.addEventListener('click', openImg);
overlay.addEventListener('click', closeImg)
