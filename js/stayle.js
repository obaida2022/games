let menu = document.querySelector(".menu-icon");
let nsvbar = document.querySelector(".menu");
menu.onclick = ()=> {
    nsvbar.classList.toggle('active');
    menu.classList.toggle('move');
    bell.classList.remove('active')
};

// Notificaion
let bell = document.querySelector('.notification');

document.querySelector('#bell-icon').onclick = () => {
    bell.classList.toggle('active')
};

// Swiper
var swiper = new Swiper(".trending-content", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction:false,
    },
    breakpoints: {
      "@0.00": {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      "@0.75": {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      "@1.00": {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      "@1.50": {
        slidesPerView: 4,
        spaceBetween: 25,
      },
    },
  });

//   Custom Scroll Bar
window.onscroll = function(){
    mufunction()
};

function mufunction() {
    var winSctoll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winSctoll / height) * 100;
    document.getElementById('scroll-bar').style.width = scrolled + '%';
}
