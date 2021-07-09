(function ($) {

  "use strict";

  $(window).on('load', function () {
    var firebaseConfig = { /* config */
      apiKey: "AIzaSyCqHv-_JHchdiLWlo5NgyZ0__1mOjq2ew8",
      projectId: "ratchetlanding",
      storageBucket: "ratchetlanding.appspot.com",
      appId: "1:137959810094:web:aa830c7045ed80237fabbf",
      measurementId: "G-MYR8GY7Q0T"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();

    /* page loader */
    $('#preloader').fadeOut();

    /* sticky nav */
    $(window).on('scroll', function () {
      if ($(window).scrollTop() > 50) {
        $('.scrolling-navbar').addClass('top-nav-collapse');
      } else {
        $('.scrolling-navbar').removeClass('top-nav-collapse');
      }
    });

    /* one page navigation */
    $('.navbar-nav').onePageNav({
      currentClass: 'active'
    });

    /* auto close responsive navbar on click */
    function close_toggle() {
      if ($(window).width() <= 768) {
        $('.navbar-collapse a').on('click', function () {
          $('.navbar-collapse').collapse('hide');
        });
      } else {
        $('.navbar .navbar-inverse a').off('click');
      }
    }

    close_toggle();
    $(window).resize(close_toggle);

    /* wow scroll spy */
    var wow = new WOW({
      /* disabled for mobile */
      mobile: false
    });

    wow.init();

    /* counterUp */
    $('.counter').counterUp({
      time: 500
    });


    /* back-to-top link active */
    var offset = 200;
    var duration = 500;
    $(window).scroll(function () {
      if ($(this).scrollTop() > offset) {
        $('.back-to-top').fadeIn(400);
      } else {
        $('.back-to-top').fadeOut(400);
      }
    });

    $('.back-to-top').on('click', function (event) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: 0
      }, 600);
      return false;
    });

  });

}(jQuery));
