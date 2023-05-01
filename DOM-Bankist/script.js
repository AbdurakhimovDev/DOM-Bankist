'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const nav = document.querySelector('.nav');


const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach((btn,i) =>{
  btn.addEventListener('click',openModal);
})
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
btnScrollTo.addEventListener('click',function (e){
  section1.scrollIntoView({behavior:"smooth"});
});

const h1 = document.querySelector('h1');
h1.addEventListener('online',(e) =>{
  alert('gjgjkgfjkjg')
});
window.addEventListener("online", (event) => {
  console.log("You are now connected to the network.");
});
window.ononline = (event) => {
  console.log("You are now connected to the network.");
};

// document.querySelectorAll('.nav__link').forEach((el)=>{
//   el.addEventListener('click',(e) =>{
//     e.preventDefault();
//     const id = e.target.getAttribute('href')
//     document.querySelector(id).scrollIntoView({behavior:'smooth'})
//     console.log(id);
//
//   })
// })

document.querySelector('.nav__links').addEventListener('click',(e)=>{
  e.preventDefault();
  if (e.target.classList.contains('nav__link')){
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({behavior:"smooth"});
  }
})


// //const h1 = document.querySelector('h1');
//
// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes);
// console.log(h1.children);
//
// h1.firstElementChild.style.color = 'white';
// h1.lastElementChild.style.color = 'black';
//
// console.log(h1.parentElement);
// console.log(h1.parentNode);

const handleHover = function (e,) {
  if (e.target.classList.contains('nav__link')){
    const link = e.target;
    const siblings = link.closest('.nav').
    querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el =>{
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};
// nav.addEventListener('mouseover',function (e) {
//   handleHover(e,0.5)
// });
// nav.addEventListener('mouseout',function (e) {
//   handleHover(e,1)
// });
nav.addEventListener('mouseover',handleHover.bind('0.5'));
nav.addEventListener('mouseout',handleHover.bind('1'));

const initialCoords = section1.getBoundingClientRect();
console.log(initialCoords);

window.addEventListener('scroll',function (){
  if (window.scrollY > initialCoords.top) nav.classList.add('sticky');
  else nav.classList.remove('sticky')
});
