const swiper = new Swiper('.swiper', {
  slidesPerView: 3,
  spaceBetween: 0,
  direction: 'horizontal',
  centerInsufficientSlides: true,
  loopedSlides:3,
  loop: true,
  centeredSlides: true,
  centeredSlidesBounds: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    952: {
      slidesPerView: 5,
    },
  },
});
