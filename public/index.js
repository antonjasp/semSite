const swiper = new Swiper(".swiper", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    768: {
      slidesPerView: 3,
    },
    480: {
      slidesPerView: 1,
    },
  },
});
