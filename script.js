'use strict';

const modalWindow = document.querySelector('.modal-window');
const overlay = document.querySelector('.overlay');
const btnCloseModalWindow = document.querySelector('.btn--close-modal-window');
const btnsOpenModalWindow = document.querySelectorAll('.btn--show-modal-window');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const navMenu = document.querySelector('.nav__links');
const nav = document.querySelector('.nav');

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

// Fading links

const fadeNotHeveredNavLinks = function (e) {
  const sieblingLinks = e.target.closest('.nav__links').querySelectorAll('.nav__link');
  const logo = nav.querySelector('.nav__logo');
  const logoText = nav.querySelector('.nav__text');
  sieblingLinks.forEach(siebling => {
    if (siebling !== e.target) {
      siebling.style.opacity = this;
      logo.style.opacity = this;
      logoText.style.opacity = this;
    }
  })
};

navMenu.addEventListener('mouseover', fadeNotHeveredNavLinks.bind(0.5));
navMenu.addEventListener('mouseout', fadeNotHeveredNavLinks.bind(1));

// Sticky Navigation by Intersection Observer API

const header = document.querySelector('header')
const navHeight = nav.getBoundingClientRect().height;
const getStickyNav = function (entries) {
  const entry = entries[0];
  if (!entry.isIntersecting) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky')
  }
};
const headerObserverOptions = {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`
};
const headerObserver = new IntersectionObserver(getStickyNav, headerObserverOptions);
headerObserver.observe(header);

// // Плавное появление секций

// const allSections = document.querySelectorAll('.section');

// const sectionsObserverOptions = {
//   root: null,
//   threshold: 0.1,
// };

// const revealSection = function (entries, observer) {
//   const entry = entries[0];
//   if (!entry.isIntersecting) return;
//   entry.target.classList.remove('section--hidden');
//   observer.unobserve(entry.target);
// };

// const sectionObserver = new IntersectionObserver(revealSection, sectionsObserverOptions);
// allSections.forEach(section => {
//   section.classList.add('section--hidden');
//   sectionObserver.observe(section);
// });

// Lazy Loading

const lazyImages = document.querySelectorAll('img[data-src]');

const revealImages = function (entries, observer) {
  const entry = entries[0];
  if (!entry.isIntersecting) return;
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener('load', () => {
    entry.target.classList.remove('lazy-img');
  });

  observer.unobserve(entry.target);
};

const lazyImagesObrerverOptions = {
  root: null,
  threshold: 0.7
}
const lazyImagesObserver = new IntersectionObserver(revealImages, lazyImagesObrerverOptions);
lazyImages.forEach(image => lazyImagesObserver.observe(image));

// Создание слайдера
const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');
const dotContainer = document.querySelector('.dots');








































// // Создание слайдера
// const slides = document.querySelectorAll('.slide');
// const btnLeft = document.querySelector('.slider__btn--left');
// const btnRight = document.querySelector('.slider__btn--right');
// const dotContainer = document.querySelector('.dots');

// let currentSlide = 0;

// // const slider = document.querySelector('.slider');
// // slider.style.transform = 'scale(0.4) translateX(1300px)';
// // slider.style.overflow = 'visible';

// const createDots = function () {
//   slides.forEach(function (_, index) {
//     dotContainer.insertAdjacentHTML(
//       'beforeend',
//       `<button class="dots__dot" data-slide="${index}"></button>`
//     );
//   });
// };

// createDots();

// const activateCurrentDot = function (slide) {
//   document
//     .querySelectorAll('.dots__dot')
//     .forEach(dot => dot.classList.remove('dots__dot--active'));
//   document
//     .querySelector(`.dots__dot[data-slide="${slide}"]`)
//     .classList.add('dots__dot--active');
// };

// activateCurrentDot(0);

// const moveToSlide = function (slide) {
//   slides.forEach(
//     (s, index) => (s.style.transform = `translateX(${(index - slide) * 100}%)`)
//   );
// };

// moveToSlide(0);

// const nextSlide = function () {
//   if (currentSlide === slides.length - 1) {
//     currentSlide = 0;
//   } else {
//     currentSlide++;
//   }

//   moveToSlide(currentSlide);
//   // 1 - -100%, 2 - 0%, 3 - 100%, 4 - 200%)
//   activateCurrentDot(currentSlide);
// };

// const previousSlide = function () {
//   if (currentSlide === 0) {
//     currentSlide = slides.length - 1;
//   } else {
//     currentSlide--;
//   }

//   moveToSlide(currentSlide);
//   // 1 - -100%, 2 - 0%, 3 - 100%, 4 - 200%)
//   activateCurrentDot(currentSlide);
// };

// btnRight.addEventListener('click', nextSlide);

// btnLeft.addEventListener('click', previousSlide);

// document.addEventListener('keydown', function (e) {
//   console.log(e);
//   if (e.key === 'ArrowRight') nextSlide();
//   if (e.key === 'ArrowLeft') previousSlide();
// });

// dotContainer.addEventListener('click', function (e) {
//   if (e.target.classList.contains('dots__dot')) {
//     const slide = e.target.dataset.slide;
//     moveToSlide(slide);
//     activateCurrentDot(slide);
//   }
// });
