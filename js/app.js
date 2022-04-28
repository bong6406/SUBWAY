const bg = new Swiper('.mySwiper', {
  allowTouchMove: false,
  centeredSlides: true,
  loop: true,
  autoplay: {
    //자동슬라이드 (false-비활성화)
    delay: 5000, // 시간 설정
    disableOnInteraction: false, // false-스와이프 후 자동 재생
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
})

