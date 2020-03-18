window.backgroundColors = ['#0063b2', '#7e685a', '#ff5e20', '#23c6c8', '#5cdb95', '#ffc302', '#afd275', '#ff2052', '#cd20ff'];
window.prevBGColor = '#0063b2';
window.currentBGColor = '';
window.pages = ['#homePage_SU', '#experiencesPage_SU', '#achievementsPage_SU', '#skillsPage_SU', '#liferecordsPage_SU', '#contactPage_SU'];
window.pagesLink = ['.homeLink', '.experiencesLink', '.achievementsLink', '.skillsLink', '.liferecordsLink', '.contactLink'];
window.currentPageIndex = 0;
window.autoParticles = false;

$('.btn_nav').click(function() {
  // change css format of navigation button
  $('.btn_nav').removeClass('lightButton');

  // transform the background color randomly
  window.backgroundColors.splice(window.backgroundColors.indexOf(window.prevBGColor), 1);
  window.currentBGColor = window.backgroundColors[Math.floor(Math.random() * window.backgroundColors.length)];
  $('#layer_profile').css('background-color', currentBGColor);
  window.backgroundColors.push(window.prevBGColor);
  window.prevBGColor = window.currentBGColor;

  // animate content
  $('.page__style').addClass('animate_content');

  setTimeout(function() {
    $('.page__style').removeClass('animate_content');
  }, 3000);

  setTimeout(function() {
      $('.page__style').css('z-index', 3);
  }, 1000);
  
});
  
// on click show page after 1500ms
$('.homeLink').click(function() {
  $('.homeLink').addClass('lightButton');
  setTimeout(function() {
    $('#homePage_SU').css('z-index','9');
    window.tl.paused(true);
    pJSDom[0].pJS.particles.move.enable = true;
    pJSDom[0].pJS.fn.particlesRefresh();
  }, 1000);
  window.currentPageIndex = 0;
});

$('.experiencesLink').click(function() {
  $('.experiencesLink').addClass('lightButton');
  setTimeout(function() {
    $('#experiencesPage_SU').css('z-index','9');
    tl.paused(true);
    pJSDom[0].pJS.particles.move.enable = false;
  }, 1000);
  window.currentPageIndex = 1;
});

$('.achievementsLink').click(function() {
  $('.achievementsLink').addClass('lightButton');
  setTimeout(function() {
    $('#achievementsPage_SU').css('z-index','9');
    window.tl.paused(true);
    pJSDom[0].pJS.particles.move.enable = false;
  }, 1000);
  window.currentPageIndex = 2;
});

$('.skillsLink').click(function() {
  $('.skillsLink').addClass('lightButton');
  setTimeout(function() {
    $('#skillsPage_SU').css('z-index','9');
    tl.paused(true);
    pJSDom[0].pJS.particles.move.enable = false;
  }, 1000);
  window.currentPageIndex = 3;
});

$('.liferecordsLink').click(function() {
  $('.liferecordsLink').addClass('lightButton');
  setTimeout(function() {
    $('#liferecordsPage_SU').css('z-index','9');
    window.tl.paused(false);
    pJSDom[0].pJS.particles.move.enable = false;
  }, 1000);
  window.currentPageIndex = 4;
});

$('.contactLink').click(function() {
  $('.contactLink').addClass('lightButton');
  setTimeout(function() {
    $('#contactPage_SU').css('z-index','9');
    window.tl.paused(true);
    pJSDom[0].pJS.particles.move.enable = false;
  }, 1000);
  window.currentPageIndex = 5;
});