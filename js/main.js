// document.addEventListener('DOMContentLoaded', function(){
//   const modal = document.querySelector('.modal');
//   const modalBtn = document.querySelectorAll('[data-toggle=modal]');
//   const closeBtn = document.querySelector('.modal__close');
//   const switchModal = () => {
//     modal.classList.toggle('modal--visible');
//   };
//   modalBtn.forEach(element => {
//     element.addEventListener('click', switchModal);
//   });
//   closeBtn.addEventListener('click', switchModal);
  
//   window.addEventListener('keydown', (event) => {
//     if (event.key === 'Escape') {
//       switchModal();
//     }
//   });
  
//   window.addEventListener("click", e => {
//     if (e.target == modal) {
//       switchModal();
//     }
//   });
// });

$(document).ready(function () {
  var modal = $('.modal'),
      modalBtn = $('[data-toggle=modal]'),
      closeBtn = $('.modal__close');
  
  modalBtn.on('click', function(){
    modal.toggleClass('modal--visible');
  });

  closeBtn.on('click', function(){
    modal.toggleClass('modal--visible');
  });

  $(document).on('keydown', function(e){
    if (e.key === 'Escape'){
      modal.removeClass('modal--visible');
    }
  });

  $(document).click(function (e) {
    if ($(e.target).is('.modal')) {
      modal.removeClass('modal--visible');
    }
  });

  var swiper1 = new Swiper ('.swiper-container.swiper-one', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  
  var swiper2 = new Swiper ('.swiper-container.swiper-two', {
    loop: true,
    pagination: {
      el: '.swiper-pagination-two',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next-two',
      prevEl: '.swiper-button-prev-two',
    },
    controller: {
      inverse: true,
      control: galleryThumbs,
      by: 'slide',
    },
  });

  var next = $('.swiper-button-next');
  var prev = $('.swiper-button-prev');
  var bullets = $('.swiper-pagination');

  next.css('left', prev.width() + 25 + bullets.width() + 25)
  bullets.css('left', 10 + prev.width() + 25)

  var galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 10,
    slidesPerView: 6,
    freeMode: false,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });
  var galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 10,
    slidesPerView: 1,
    thumbs: {
      swiper: galleryThumbs
    },
    controller: {
      inverse: true,
      control: swiper2,
      by: 'slide',
    },
  });


  // galleryTop.controller = swiper2;
  // swiper2.controller = galleryTop;
  
  // var nextTwo = $('.swiper-button-next-two');
  // var prevTwo = $('.swiper-button-prev-two');
  // var bulletsTwo = $('.swiper-pagination-two');

  // nextTwo.css('left', prevTwo.width() + 10 + bulletsTwo.width() + 10)
  // bulletsTwo.css('left', 10 + prevTwo.width() + 10)

  // var swiper2 = new Swiper ('.swiper-container.swiper-two', {
  //   loop: true,
  //   pagination: {
  //     el: '.swiper-pagination.pagination-two',
  //     type: 'bullets',
  //   },
  //   pagination: {
  //     el: '.pagination-fraction',
  //     type: 'fraction',
  //   },
  //   navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev',
  //   },
  // });

});

$(document).ready(function(){
  var btnUp = $('.main__scroll-up');
      btnDown = $('.hero__scroll-down');

  $(window).scroll(function(){
    if ($(window).scrollTop() > 1000){
      btnUp.addClass('main__scroll-up--show');
    } else {
      btnUp.removeClass('main__scroll-up--show');
    }
  });

  btnUp.on('click', function(e){
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, 500);
  });
  btnDown.on('click', function(e){
    e.preventDefault();
    $('html, body').animate({scrollTop: $('body').height()}, 800);
  });
});