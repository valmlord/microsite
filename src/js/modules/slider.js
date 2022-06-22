import $ from 'jquery';
import 'slick-carousel';


$('.partners-slider').slick({
  variableWidth: true,
  infinite: true,
  slidesToShow: 3,
  slideToScroll: 3,
  centerMode: true,
  arrows: true,
  prevArrow: '<button class="prev-slide"><img src="./assets/icons/partners/arrow-left.png" alt="nav-arrow-left"></button>',
  nextArrow: '<button class="next-slide"><img src="./assets/icons/partners/arrow-right.png" alt="nav-arrow-right"></button>',
  responsive: [{
    breakpoint: 1180,
    settings: {
      arrows: false
    },
  },]
});     