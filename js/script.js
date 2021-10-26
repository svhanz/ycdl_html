    //import Swiper from 'swiper/swiper-bundle.esm.js';
    //import 'swiper/swiper-bundle.css';
    var swiper = new Swiper('.swiper', {
      slidesPerView: 1,
      spaceBetween: 30,
      slidesPerGroup: 1,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
