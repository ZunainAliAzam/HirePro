document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper(".js-testimonials-slider", {
      grabCursor: true,
      spaceBetween: 30,
      pagination: {
        el: ".js-testimonials-pagination",
        clickable: true,
      },
      breakpoints: {
        767: {
          slidesPerView: 2,
        },
      },
    });
  });

let menuBtn = document.querySelector("#menu-btn");
let menu = document.querySelector(".navbar");

menuBtn.onclick = () => {
    menu.classList.toggle('active');
}