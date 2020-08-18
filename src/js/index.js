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
  $(this).toggleClass('open');
  $('#overlay').toggleClass('open');
  $('.intro').toggleClass('active');
});

$(function(){

  var swiperGallery = new Swiper('.carousel-gallery .swiper-container', {
    effect: 'slide',
    speed: 900,
    slidesPerView: 5,
    spaceBetween: 20,
    simulateTouch: true,
    pagination: {
      el: '.carousel-gallery .swiper-pagination',
      clickable: true
    },
    breakpoints: {
      // when window width is <= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 5
      },
      // when window width is <= 480px
      425: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      // when window width is <= 640px
      768: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    }
  }); /*http://idangero.us/swiper/api/*/
});

// $('[data-fancybox="gallery"]').fancybox();

$(function () {
  var selectedClass = "";
  $(".filter").click(function () {
    selectedClass = $(this).attr("data-rel");
    $("#gallery").fadeTo(100, 0.1);
    $("#gallery div").not("." + selectedClass).fadeOut().removeClass('animation');
    setTimeout(function () {
      $("." + selectedClass).fadeIn().addClass('animation');
      $("#gallery").fadeTo(300, 1);
    }, 300);
  });
});

var inputGroups = [...document.querySelectorAll(".input-group")];

inputGroups.forEach(inputGroup => {
  var label = inputGroup.children[0];
  var input = inputGroup.children[1];
  input.addEventListener("focus", function(){
    onSelect(label);
  });
  input.addEventListener("blur", function(){
    onBlur(label, input);
  })
});

function onSelect(label) {
  label.classList.add('selected');
}

function onBlur(label, input) {
  if (!input.value) {
    label.classList.remove('selected');
  }
}

$('#classic-home-list').click(() => {
  $('.img-2').addClass('active');
  $('.img-1').removeClass('active');
  $('.img-2').addClass('bright');

});

$('#list-profile-list').click(() => {
  $('.img-1').addClass('active');
  $('.img-2').removeClass('active');
  $('.img-2').removeClass('bright');
});

$('.item-1').click(function()  {
  $(this).toggleClass('active');
  $('.item-2').removeClass('active');
  $('.item-3').removeClass('active');
  $('.item-4').removeClass('active');

});

$('.item-2').click(function() {
  $(this).toggleClass('active');
  $('.item-1').removeClass('active');
  $('.item-3').removeClass('active');
  $('.item-4').removeClass('active');
});

$('.item-3').click(function() {
  $(this).toggleClass('active');
  $('.item-1').removeClass('active');
  $('.item-2').removeClass('active');
  $('.item-4').removeClass('active');
});

$('.item-4').click(function() {
  $(this).toggleClass('active');
  $('.item-1').removeClass('active');
  $('.item-2').removeClass('active');
  $('.item-3').removeClass('active');
});

//  $(document).ready(function(){
// 	$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
// 		$(this).toggleClass('open');
// 	});
// });

import '../scss/index.scss';





