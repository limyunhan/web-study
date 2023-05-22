const toTopEl = document.querySelector('#to-top');
toTopEl.addEventListener('click', function () {
    gsap.to(window, .7, {
      scrollTo: 0
    })
  });
  
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
    gsap.to(fadeEl, 1, {
        delay: (index + 1) * .7,
        opacity: 1
    });
});

new Swiper('.notice-line .swiper-container', {
    direction: 'vertical',
    autoplay: true,
    loop: true,
});

new Swiper('.promotion .swiper-container', {
    autoplay: { 
        delay: 5000 
    },
    loop: true, 
    slidesPerView: 3, 
    spaceBetween: 10, 
    centeredSlides: true, 
    pagination: {
        el: '.promotion .swiper-pagination',
        clickable: true 
    },
    navigation: { 
        prevEl: '.promotion .swiper-prev', 
        nextEl: '.promotion .swiper-next' 
    }
});

new Swiper('.awards .swiper-container', {
    autoplay: true,
    loop: true, 
    spaceBetween: 30,
    slidesPerView: 3, 
    navigation: { 
        prevEl: '.awards .swiper-prev', 
        nextEl: '.awards .swiper-next' 
    }
});

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function () {
    isHidePromotion = !isHidePromotion

    if (isHidePromotion) {
        promotionEl.classList.add('hide')
    } else {
        promotionEl.classList.remove('hide')
    }
});

const spyEls = document.querySelectorAll('section.scroll-spy')
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, 
      triggerHook: .8 
    })
    .setClassToggle(spyEl, 'show') 
    .addTo(new ScrollMagic.Controller()) 
});