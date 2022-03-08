$(function(){

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

});