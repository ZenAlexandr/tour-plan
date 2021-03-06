const swiper = new Swiper('.swiper', {
  // Optional parameters
  // direction: 'horisontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.slider-button-next',
    prevEl: '.slider-button-prev',
  },
  effect: "cube",
});