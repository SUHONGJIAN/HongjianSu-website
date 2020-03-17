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

// // arrows functionality
// function arrowsHelper(toPage) {
//   // if (window.initDone == true) {
//   //   if (toPage == 4) {
//   //     window.tl.paused(false);
//   //   } else {
//   //     window.tl.paused(true);
//   //   }
//   // }
//   if (window.initDone == false && window.currentPageIndex == 4) {
//     initFunction();
//   } else if (window.initDone == true && window.currentPageIndex == 4) {
//       window.tl.paused(false);
//   } else if (window.initDone == true) {
//       window.tl.paused(true);
//   }
//   if (toPage == 0) {
//     pJSDom[0].pJS.particles.move.enable = true;
//     pJSDom[0].pJS.fn.particlesRefresh();
//   } else {
//     pJSDom[0].pJS.particles.move.enable = false;
//   }
//   // change css format of navigation button
//   $('.btn_nav').removeClass('lightButton');
//   $(window.pagesLink[toPage]).addClass('lightButton');

//   // transform the background color randomly
//   window.backgroundColors.splice(window.backgroundColors.indexOf(window.prevBGColor), 1);
//   window.currentBGColor = window.backgroundColors[Math.floor(Math.random() * window.backgroundColors.length)];
//   $('#layer_profile').css('background-color', currentBGColor);
//   window.backgroundColors.push(window.prevBGColor);
//   window.prevBGColor = window.currentBGColor;

//   // animate content
//   $('.page__style').addClass('animate_content');

//   setTimeout(function() {
//     $('.page__style').removeClass('animate_content');
//   }, 3200);

//   setTimeout(function() {
//       $('.page__style').css('z-index', 3);
//   }, 1500);

//   setTimeout(function() {
//     $(window.pages[toPage]).css('z-index','9');
//   }, 1500);
// }

// $('#leftArrow').click(function() {
//   if (window.currentPageIndex > 0) {
//     window.currentPageIndex--;
//   } else {
//     window.currentPageIndex = window.pages.length - 1;
//   }
//   arrowsHelper(window.currentPageIndex);
// });

// $('#rightArrow').click(function() {
//   if (window.currentPageIndex < window.pages.length - 1) {
//     window.currentPageIndex++;
//   } else {
//     window.currentPageIndex = 0;
//   }
//   arrowsHelper(window.currentPageIndex);
// });





// var layerProfileHeight = $('#layer_profile').height();
// $(window).scroll(function() {
//     if ($('html').scrollTop() < layerProfileHeight / 2) {
//         $('#downArrow').css('animation', 'none');
//         window.stopFire = false;
//         if (window.autoFire == false) {
//             autoClick();
//         }
//         pJSDom[0].pJS.particles.move.enable = false;
//         window.autoParticles = false;
//     } else {
//         $('#downArrow').css('animation', 'downArrowBlink 1s linear infinite alternate');
//         window.stopFire = true;
//         window.autoFire = false;
//         if (window.autoParticles == false) {
//             pJSDom[0].pJS.particles.move.enable = true;
//             pJSDom[0].pJS.fn.particlesRefresh();
//             window.autoParticles = true;
//         }
        
//     }
// });
