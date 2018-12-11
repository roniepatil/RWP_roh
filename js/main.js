$(document).ready(function() {

  'use strict';

  
  //  SMOOTH SCROLL
  


  $(document).on("scroll", onScroll);

  $('a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    $(document).off("scroll");

    $('a').each(function() {
      $(this).removeClass('active');
      if ($(window).width() < 768) {
        $('.nav-menu').slideUp();
      }
    });

    $(this).addClass('active');

    var target = this.hash,
        menu = target;

    target = $(target);
    $('html, body').stop().animate({
      'scrollTop': target.offset().top - 80
    }, 500, 'swing', function() {
      window.location.hash = target.selector;
      $(document).on("scroll", onScroll);
    });
  });


  function onScroll(event) {
    if ($('.home').length) {
      var scrollPos = $(document).scrollTop();
      $('nav ul li a').each(function() {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
      });
    }
  }

  
  //  NAVBAR SHOW - HIDE
  


  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll > 200 ) {
      $("#main-nav, #main-nav-subpage").slideDown(700);
      $("#main-nav-subpage").removeClass('subpage-nav');
    } else {
      $("#main-nav").slideUp(700);
      $("#main-nav-subpage").hide();
      $("#main-nav-subpage").addClass('subpage-nav');
    }
  });

  
  //   RESPONSIVE MENU
  

  $('.responsive').on('click', function(e) {
    $('.nav-menu').slideToggle();
  });

  
  //  Typed Js
  

  var typed = $(".typed");

  $(function() {
    typed.typed({
      strings: ["Rohit Patil.", "Designer.", "Developer.", "Innovator"],
      typeSpeed: 100,
      loop: true,
    });
  });


  
  //  Owl Carousel Services
  

  $('.services-carousel').owlCarousel({
      autoplay: true,
      loop: true,
      margin: 20,
      dots: true,
      nav: false,
      responsiveClass: true,
      responsive: { 0: { items: 1 }, 768: { items: 2 }, 900: { items: 4 } }
    });
  

    $('#pagination-demo').twbsPagination({
      totalPages: 3,
      // the current page that show on start
      startPage: 1,
       
      // maximum visible pages
      visiblePages: 3,
       
      initiateStartPageClick: true,
       
      // template for pagination links
      href: false,
       
      // variable name in href template for page number
      hrefVariable: '{{number}}',
       
      // Text labels
      first: 'First',
      prev: 'Previous',
      next: 'Next',
      last: 'Last',
       
      // carousel-style pagination
      loop: false,
       
      // callback function
      onPageClick: function (event, page) {
         $('.page-active').removeClass('page-active');
        $('#page'+page).addClass('page-active');
      },
       
      // pagination Classes
      paginationClass: 'pagination',
      nextClass: 'next',
      prevClass: 'prev',
      lastClass: 'last',
      firstClass: 'first',
      pageClass: 'page',
      activeClass: 'active',
      disabledClass: 'disabled'
       
      });
       
});
