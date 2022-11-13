'use strict';

const modalWindow = document.querySelector('.modal-window');
const overlay = document.querySelector('.overlay');
const btnCloseModalWindow = document.querySelector('.btn--close-modal-window');
const btnsOpenModalWindow = document.querySelectorAll('.btn--show-modal-window');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const navMenu = document.querySelector('.nav__links');

// Modal window

const openModalWindow = function (e) {
  e.preventDefault();
  modalWindow.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModalWindow = function () {
  modalWindow.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModalWindow.forEach(button => button.addEventListener('click', openModalWindow));
btnCloseModalWindow.addEventListener('click', closeModalWindow);
overlay.addEventListener('click', closeModalWindow);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modalWindow.classList.contains('hidden')) {
    closeModalWindow();
  }
});

// Srcoll To

btnScrollTo.addEventListener('click', () => section1.scrollIntoView({ behavior: 'smooth' }));
navMenu.addEventListener('click', (e) => {
  e.preventDefault();
  if (e.target.classList.contains('nav__link')) {
    document.querySelector(e.target.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  }
});

// Tabs

const tabContainer = document.querySelector('.operations__tab-container');
const operationButtons = document.querySelectorAll('.operations__tab');
const operationTabs = document.querySelectorAll('.operations__content');

tabContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('operations__tab')) {
    operationButtons.forEach(button => button.classList.remove('operations__tab--active'));
    e.target.classList.add('operations__tab--active');
    operationTabs.forEach(tab => tab.classList.remove('operations__content--active'));
    operationTabs[e.target.dataset.tab - 1].classList.add('operations__content--active');
  }
});