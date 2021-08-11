const $card = document.querySelector('.card')
const $front = $card.querySelector('.card__front')
const $back = $card.querySelector('.card__back')
const $cardForm = document.querySelector('.card__form')
const $btn = document.querySelector('.main-btn')
let rotateValueX = 0
let rotateValueY = 180


// let isAnimateGo = false
// window.addEventListener('scroll', () => {

// })

// $front.addEventListener('click', () => {

// })
// $back.addEventListener('click', () => {

// })


// $cardForm.addEventListener('submit', (e) => {
//   e.preventDefault()

// })


// 3D card

class parallaxTiltEffect {

  constructor({element,w,h}) {

    this.element = element;
    this.container = this.element.querySelector(".container");
    this.size = [w, h];
    [this.w, this.h] = this.size;

    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.defaultStates = this.defaultStates.bind(this);
    this.setProperty = this.setProperty.bind(this);
    this.init = this.init.bind(this);

    this.init();
  }

  handleMouseMove(event) {
    const {offsetX, offsetY} = event;

    let X = (-(offsetX - (this.w/2)) / 5) / 5;
    let Y = ((offsetY - (this.h/2)) / 5) / 5;

    this.setProperty('--rY', X.toFixed(2));
    this.setProperty('--rX', Y.toFixed(2));

    this.setProperty('--bY', (80 - (X/4).toFixed(2)) + '%');
    this.setProperty('--bX', (50 - (Y/4).toFixed(2)) + '%');
  }

  handleMouseEnter() {
    this.container.classList.add("container--active");
  }

  handleMouseLeave() {
    this.defaultStates();
  }

  defaultStates() {
    this.container.classList.remove("container--active");
    this.setProperty('--rY', 0);
    this.setProperty('--rX', 0);
    this.setProperty('--bY', '80%');
    this.setProperty('--bX', '50%');
  }

  setProperty(p, v) {
    return this.container.style.setProperty(p, v);
  }

  init() {
    this.element.addEventListener('mousemove', this.handleMouseMove);
    this.element.addEventListener('mouseenter', this.handleMouseEnter);
    this.element.addEventListener('mouseleave', this.handleMouseLeave);
  }
}

const $ = e => document.querySelector(e);

const wrap1 = new parallaxTiltEffect({
  element: $('.wrap--1'),
  w: 300,
  h: 360
});

// 3D card V2

const $cardsV2 = document.querySelectorAll('.cardV2__item');
$cardsV2.forEach(item => {
  item.addEventListener('mousemove', rotate);
  item.addEventListener('mouseleave', start);
})


function rotate(event) {
  const $cardV2Body = this.querySelector('.cardV2__body');
  let halfHeight = $cardV2Body.offsetHeight / 2 ;
  let halfWidth = $cardV2Body.offsetWidth / 2
  
  $cardV2Body.style.transform = `rotateX(${-1*((event.offsetY - halfHeight)/7)}deg) rotateY(${(event.offsetX - halfWidth)/7}deg)`
}

function start(event) {
  const $cardV2Body = this.querySelector('.cardV2__body');
  $cardV2Body.style.transform = `rotateX(0deg) rotateY(0deg)`
}

// parallax for background

const $scene = document.querySelector('.parallax__scene')
const $layer = $scene.querySelectorAll('.parallax__layer')
const $title = document.querySelector('.parallax__title')
$scene.addEventListener('mousemove', e => {
  backgroundMove(e)
})

function backgroundMove(e) {
  let halfWidth = $scene.offsetWidth / 2;
  $layer.forEach(item => {
    let speed = item.getAttribute('data-speed')
    item.style.transform = `translateX(${(e.clientX - halfWidth)*speed / 2000}px)`
  })
}

window.addEventListener('scroll', () => {
  let scroll = window.scrollY

  if(scroll >= 4350) {
    $title.style.opacity = '1'
    $title.style.transform = 'translate(-375px ,-75px)'
  }
})
















