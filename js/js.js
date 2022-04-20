var swiperOptions = {
    loop: true,
    autoplay: {
      delay: 1,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    speed: 1000,
    grabCursor: true,
    mousewheelControl: true,
    keyboardControl: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  };
  
  var swiper = new Swiper(".swiper-container", swiperOptions);

AOS.init();
