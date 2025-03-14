// menu mobile

const header = document.querySelector('.header');
const headerOpen = document.querySelector('.header__open');
const headerClose = document.querySelector('.header__close');

headerOpen.addEventListener('click', () => {
    header.classList.add('open');
})
headerClose.addEventListener('click', () => {
    header.classList.remove('open');
})

const swiper = new Swiper('.welcome__slider', {
    // loop: true,
    effect: "fade",
    navigation: {
        nextEl: '.welcome__slider-next',
        prevEl: '.welcome__slider-prev',
      },
});