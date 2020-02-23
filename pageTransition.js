$('.btn_nav').click(function() {
    // animate content
    $('.page__style').addClass('animate_content');
    // $('.page__description').fadeOut(100).delay(2800).fadeIn();
  
    setTimeout(function() {
      $('.page__style').removeClass('animate_content');
    }, 3200);
  
    //remove fadeIn class after 1500ms
    setTimeout(function() {
    //   $('.page__style').removeClass('fadeIn');
        $('.page__style').css('z-index', 3);
    }, 1500);
  
  });
  
  // on click show page after 1500ms
  $('.homeLink').click(function() {
    setTimeout(function() {
      $('#homepage').css('z-index','9');
    }, 1500);
  });
  
  $('.experiencesLink').click(function() {
    setTimeout(function() {
    //   $('#experiencesPage').addClass('fadeIn');
      $('#experiencesPage').css('z-index','9');
    }, 1500);
  });
  
  $('.achievementsLink').click(function() {
    setTimeout(function() {
    //   $('#achievementsPage').addClass('fadeIn');
      $('#achievementsPage').css('z-index','9');
    }, 1500);
  });
  
  $('.skillsLink').click(function() {
    setTimeout(function() {
    //   $('#skillsPage').addClass('fadeIn');
      $('#skillsPage').css('z-index','9');
    }, 1500);
  });
  
  $('.liferecordsLink').click(function() {
    setTimeout(function() {
    //   $('#liferecordsPage').addClass('fadeIn');
      $('#liferecordsPage').css('z-index','9');
    }, 1500);
  });

  $('.contactLink').click(function() {
    setTimeout(function() {
    //   $('#contactPage').addClass('fadeIn');
      $('#contactPage').css('z-index','9');
    }, 1500);
  });