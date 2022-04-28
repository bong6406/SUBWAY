console.log('작동')
const menuBtn = document.querySelectorAll('.menu_btn')
const subSwiper = document.querySelectorAll('.sub-swiper')

for (let i = 0; i < menuBtn.length; i++)
  for (let j = 0; j < subSwiper.length; j++) {
    if (i === j) {
      menuBtn[i].addEventListener('click', () => {
        menuBtn[i].style.color = 'rgb(0, 146, 35)'
        subSwiper[i].classList.add('on')
      })
    }
  }
for (let i = 0; i < menuBtn.length; i++)
  for (let j = 0; j < subSwiper.length; j++) {
    if (i !== j) {
      menuBtn[i].addEventListener('click', () => {
        subSwiper[j].classList.remove('on')
        menuBtn[j].style.color = 'rgb(0, 0, 0)'
      })
    }
  }

console.log('작동')

// const subwaySwiper = new Swiper('.subway_swiper', {
//   cssMode: true,
//   // centeredSlides: true,
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
//   //한번에 보여지는 페이지 숫자
//   slidesPerView: 4,
//   slidesPerGroup: 4,
//   // pagination: {
//   //   el: '.swiper-pagination',
//   // },
//   // mousewheel: true,
//   // keyboard: true,
//   // pagination: {
//   //   // 호출(pager) 여부
//   //   el: '.classic', //버튼을 담을 태그 설정
//   //   clickable: true, // 버튼 클릭 여부
//   // },
// })

const subwaySwiper = new Swiper('.sub-swiper', {
  cssMode: true,
  slidesPerView: 6,
  slidesPerGroup: 4,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})
