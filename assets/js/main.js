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

const welcomeSwiper = new Swiper('.welcome__slider', {
    // loop: true,
    effect: "fade",
    navigation: {
        nextEl: '.welcome__slider-next',
        prevEl: '.welcome__slider-prev',
      },
});
const founderSwiper = new Swiper('.founder__slider', {
    autoHeight: true,
    navigation: {
        nextEl: '.founder__slider-next',
        prevEl: '.founder__slider-prev',
      },
});
const reviewsSwiper = new Swiper('.reviews-slider', {
    autoHeight: true,
    navigation: {
        nextEl: '.reviews__slider-next',
        prevEl: '.reviews__slider-prev',
      },
});

// Tabs for child & for parent
const tabCild = document.querySelector('.tabs-cild__title');
const tabParrent = document.querySelector('.tabs-parent__title');
const contentCild = document.querySelector('.tabs-cild__content');
const contentParrent = document.querySelector('.tabs-parent__content');

if(tabCild){
    tabCild.addEventListener('click', (e) =>{
        tabCild.classList.add('active');
        contentCild.classList.add('active');
        tabParrent.classList.remove('active');
        contentParrent.classList.remove('active');
    })
}
if(tabParrent){
    tabParrent.addEventListener('click', (e) =>{
        tabParrent.classList.add('active');
        contentParrent.classList.add('active');
        tabCild.classList.remove('active');
        contentCild.classList.remove('active');
    })
}