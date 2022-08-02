// const { on } = require("gulp");

// const { on } = require("gulp");

$(function () {

  $('.menu__btn').on('click', function () {
    $('.menu__btn-img').toggleClass('menu__btn-img--active');
    $('.menu__list').toggleClass('menu__list--active');
    $('.header-content__left-box').toggleClass('header-content__left-box--active');
    $('.header-content__right-btn').toggleClass('header-content__right-btn--active');
  });

  $('.benefits-tabs__top-item').on('click', function (e) {
    e.preventDefault();
    $('.benefits-tabs__top-item').removeClass('benefits-tabs__top-item--active');
    $(this).addClass('benefits-tabs__top-item--active');

    $('.benefits-tabs__content-item').removeClass('benefits-tabs__content-item--active');
    $($(this).attr('href')).addClass('benefits-tabs__content-item--active');
  });

  $('.benefits-tabs__top-item--two').on('click', function (e) {
    e.preventDefault();
    $('.benefits-tabs__top-box--one ').removeClass('benefits-tabs__top-box--one--active');
    $('.benefits-tabs__top-box--four').removeClass('benefits-tabs__top-box--four--active');
    $('.benefits-tabs__top-box--three ').removeClass('benefits-tabs__top-box--three--active');
    $('.benefits-tabs__top-box--two').addClass('benefits-tabs__top-box--two--active');
  });

  $('.benefits-tabs__top-item--three').on('click', function (e) {
    e.preventDefault();
    $('.benefits-tabs__top-box--one ').removeClass('benefits-tabs__top-box--one--active');
    $('.benefits-tabs__top-box--four').removeClass('benefits-tabs__top-box--four--active');
    $('.benefits-tabs__top-box--two ').removeClass('benefits-tabs__top-box--two--active');
    $('.benefits-tabs__top-box--three').addClass('benefits-tabs__top-box--three--active');
  });

  $('.benefits-tabs__top-item--four').on('click', function (e) {
    e.preventDefault();
    $('.benefits-tabs__top-box--one ').removeClass('benefits-tabs__top-box--one--active');
    $('.benefits-tabs__top-box--two').removeClass('benefits-tabs__top-box--two--active');
    $('.benefits-tabs__top-box--three ').removeClass('benefits-tabs__top-box--three--active');
    $('.benefits-tabs__top-box--four').addClass('benefits-tabs__top-box--four--active');
  });

  $('.benefits-tabs__top-item--one').on('click', function (e) {
    e.preventDefault();
    $('.benefits-tabs__top-box--two ').removeClass('benefits-tabs__top-box--two--active');
    $('.benefits-tabs__top-box--four').removeClass('benefits-tabs__top-box--four--active');
    $('.benefits-tabs__top-box--three ').removeClass('benefits-tabs__top-box--three--active');
    $('.benefits-tabs__top-box--one').addClass('benefits-tabs__top-box--one--active');
  });

  $('.benefits-tabs__top-item--two1').on('click', function (e) {
      e.preventDefault();
      $('.benefits-tabs__top-box--one1 ').removeClass('benefits-tabs__top-box--one1--active');
      $('.benefits-tabs__top-box--four1').removeClass('benefits-tabs__top-box--four1--active');
      $('.benefits-tabs__top-box--three1 ').removeClass('benefits-tabs__top-box--three1--active');
      $('.benefits-tabs__top-box--two1').addClass('benefits-tabs__top-box--two1--active');
    });

  $('.benefits-tabs__top-item--three1').on('click', function (e) {
    e.preventDefault();
    $('.benefits-tabs__top-box--one1 ').removeClass('benefits-tabs__top-box--one1--active');
    $('.benefits-tabs__top-box--four1').removeClass('benefits-tabs__top-box--four1--active');
    $('.benefits-tabs__top-box--two1 ').removeClass('benefits-tabs__top-box--two1--active');
    $('.benefits-tabs__top-box--three1').addClass('benefits-tabs__top-box--three1--active');
  });

  $('.benefits-tabs__top-item--four1').on('click', function (e) {
    e.preventDefault();
    $('.benefits-tabs__top-box--one1 ').removeClass('benefits-tabs__top-box--one1--active');
    $('.benefits-tabs__top-box--two1').removeClass('benefits-tabs__top-box--two1--active');
    $('.benefits-tabs__top-box--three1 ').removeClass('benefits-tabs__top-box--three1--active');
    $('.benefits-tabs__top-box--four1').addClass('benefits-tabs__top-box--four1--active');
  });

  $('.benefits-tabs__top-item--one1').on('click', function (e) {
    e.preventDefault();
    $('.benefits-tabs__top-box--two1 ').removeClass('benefits-tabs__top-box--two1--active');
    $('.benefits-tabs__top-box--four1').removeClass('benefits-tabs__top-box--four1--active');
    $('.benefits-tabs__top-box--three1 ').removeClass('benefits-tabs__top-box--three1--active');
    $('.benefits-tabs__top-box--one1').addClass('benefits-tabs__top-box--one1--active');
  });

// $(".reviews__items").each(function () {
//   let more = $(this).find(".reviews__button-show--one");
//   let hide = $(this).find(".reviews__item-hide");
//   hide.hide();
//   more.on('click', (function () {
//     hide.slideToggle();
//     more.text(more.text() == "Скрыть" ? "Показать ещё" : "Скрыть");
//   });
// });

$('.reviews__button-show--one').on('click', function () {
  $('.reviews__button-show--one').toggleClass('active');
  $('.reviews__item-hide').toggleClass('active');
  $('.pagination').toggleClass('active');
});

$('.reviews__button-show--two').on('click', function () {
  $('.reviews__button-show--two').toggleClass('active');
  $('.reviews__comment-hide').toggleClass('active');
  $('.pagination').toggleClass('active');
});

$('.review-form__input--active').on('click', function () {
  $('.review__text').toggleClass('active');
});

  // $(document).ready(function () {
  //   $(".reviews__button-show--one").on('click', function () {
  //     $(this).find(".reviews__item-hide").first().slideDown()
  //   })
  // });

  // function readMore() {
  //   const item = document.querySelectorAll('.reviews__item-hide');
  //   const btn = document.querySelector('.reviews__button-show--one');

  //   btn.addEventListener('click', function () {
  //     if (item.style.display === 'none') {
  //       btn.innerHTML = 'Показать ещё';
  //       item.style.display = 'none';
  //     } else {
  //       btn.innerHTML = 'Свернуть';
  //       item.style.display = 'block';
  //     }
  //   })
  // }

  // let coll = document.getElementsByClassName('reviews__button-show--one');
  // let elements = document.getElementsByClassName('reviews__item-hide');
  // for (let i = 0; i < coll.length; i++) {
  //   coll[i].addEventListener('click', function(){
  //     this.classList.toggle('active');
  //     let elements = this.nextElementSibling;
  //     if (elements.style.display){
  //       elements.style.display = 'none';
  //     } else{
  //       elements.style.display = 'block';
  //     }
  //   })
  // }

  // $('.reviews__button-show--one')on('click'), function () {
  //   $('.reviews__item-hide').slice(1).slideDown();
  // });

  // }

});