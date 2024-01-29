var swiper = new Swiper(".mySwiper", {
slidesPerView: 3,
spaceBetween: 30,
pagination: {
el: ".swiper-pagination",
clickable: true,
},
navigation: {
nextEl: ".swiper-button-next",
prevEl: ".swiper-button-prev",
},
breakpoints: {
  320: { // 320 이상일 경우
  slidesPerView: 1, // 레이아웃 1개
  spaceBetween: 30,
  
  },
  768: {
  slidesPerView: 3,
  spaceBetween: 30,
  },
  1024: {
  slidesPerView: 5,
  spaceBetween: 30,
  },
  }
});