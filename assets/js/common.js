// Scroll
$(function(){
  $('a[href^="#"]').click(function() {
    let speed = 400;
    let type = 'swing';
    let href= $(this).attr("href");
    let target = $(href == "#index" ? 'html' : href);
    let position = target.offset().top;
    $('body,html').animate({scrollTop:position}, speed, type);
    return false;
  });
});

// Accordion
jQuery(function ($) {
  $(".answer").css("display", "none");
  $(".answer1").css("display", "none");
  $(".question").click(function () {
    $(".question").not(this).removeClass("open");
    $(".question").not(this).next().slideUp(300);
    $(this).toggleClass("open");
    $(this).next().slideToggle(300);
  });
});

// Hamburger
$(function () {
  $('.hamburger').click(function () {
    $(this).toggleClass('active');
    if ($(this).hasClass('active')) {
      $('.globalMenuSp').addClass('active');
    } else {
      $('.globalMenuSp').removeClass('active');
    }
  });
});
$('.globalMenuSp a[href^="#"]').on('click', function () {
  $('.hamburger').click();
  return false;
});
