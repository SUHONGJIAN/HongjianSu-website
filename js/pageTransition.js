$('.btn_nav').click(function() {
    $('.btn_nav').removeClass('lightButton');
    // animate content
    $('.page__style').addClass('animate_content');
  
    setTimeout(function() {
      $('.page__style').removeClass('animate_content');
    }, 3200);
  
    setTimeout(function() {
        $('.page__style').css('z-index', 3);
    }, 1500);
  
  });
  
  // on click show page after 1500ms
  $('.homeLink').click(function() {
    $('.homeLink').addClass('lightButton');
    setTimeout(function() {
      $('#homePage_SU').css('z-index','9');
    }, 1500);
  });
  
  $('.experiencesLink').click(function() {
    $('.experiencesLink').addClass('lightButton');
    setTimeout(function() {
      $('#experiencesPage_SU').css('z-index','9');
    }, 1500);
  });
  
  $('.achievementsLink').click(function() {
    $('.achievementsLink').addClass('lightButton');
    setTimeout(function() {
      $('#achievementsPage_SU').css('z-index','9');
    }, 1500);
  });
  
  $('.skillsLink').click(function() {
    $('.skillsLink').addClass('lightButton');
    setTimeout(function() {
      $('#skillsPage_SU').css('z-index','9');
    }, 1500);
  });
  
  $('.liferecordsLink').click(function() {
    $('.liferecordsLink').addClass('lightButton');
    setTimeout(function() {
      $('#liferecordsPage_SU').css('z-index','9');
    }, 1500);
  });

  $('.contactLink').click(function() {
    $('.contactLink').addClass('lightButton');
    setTimeout(function() {
      $('#contactPage_SU').css('z-index','9');
    }, 1500);
  });
