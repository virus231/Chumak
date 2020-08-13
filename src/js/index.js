import 'bootstrap';
// eslint-disable-next-line no-unused-vars
import Swiper, { Navigation, Pagination } from 'swiper';
import '../scss/swiper/swiper-bundle.scss';
import '../js/swiper-bundle.min.js';

// eslint-disable-next-line no-unused-vars
const swiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

$('#nav-icon3').click(function() {
  $(this).toggleClass('open')
  $('#overlay').toggleClass('open');
  $('.intro').toggleClass('active');
});

//  $(document).ready(function(){
// 	$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
// 		$(this).toggleClass('open');
// 	});
// });

import '../scss/index.scss';
