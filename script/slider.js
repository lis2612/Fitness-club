const swiper = new Swiper('.swiper', {
  slidesPerView: 3,
  spaceBetween: 0,
  direction: 'horizontal',
  centerInsufficientSlides: true,
  loopedSlides: 3,
  loop: true,
  centeredSlides: true,
  centeredSlidesBounds: true,
  autoplay: {
    delay: 2000,
  },
  pauseOnMouseEnter:true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    952: {
      slidesPerView: 4,
    },
    1919: {
      slidesPerView: 5,
    },
  },
});
