import {init} from "./photoTransition.js";

// document.getElementById("interested").addEventListener('click', e => {
//     e.preventDefault();
    
// });
window.initDone = false;

$(window).scroll(function() {
    var posFlag = $('html,body').scrollTop();
    if (posFlag == $("#layer_profile").offset().top) {
        $("#layer_welcome").remove();
    }
});

function initFunction() {
    setTimeout(function() {
        init();
        window.initDone = true;
    }, 500);
}

$('.liferecordsLink').click(function() {
    if (initDone == false) {
        initFunction();
    }
});

// $('#leftArrow').click(function() {
//     if (initDone == false && window.currentPageIndex == 4) {
//         setTimeout(function() {
//             init();
//             initDone = true;
//         }, 1000);
//     } else if (initDone == true && window.currentPageIndex == 4) {
//         window.tl.paused(false);
//     } else if (initDone == true) {
//         window.tl.paused(true);
//     }
// });

// $('#rightArrow').click(function() {
//     if (initDone == false && window.currentPageIndex == 4) {
//         setTimeout(function() {
//             init();
//         }, 1000);
//         initDone = true;
//     } else if (initDone == true && window.currentPageIndex == 4) {
//         window.tl.paused(false);
//     } else if (initDone == true) {
//         window.tl.paused(true);
//     }
// });

// arrows functionality
function arrowsHelper(toPage) {
    // if (window.initDone == true) {
    //   if (toPage == 4) {
    //     window.tl.paused(false);
    //   } else {
    //     window.tl.paused(true);
    //   }
    // }
    if (window.initDone == false && window.currentPageIndex == 4) {
        initFunction();
    } else if (window.initDone == true && window.currentPageIndex == 4) {
        window.tl.paused(false);
    } else if (window.initDone == true) {
        window.tl.paused(true);
    }
    if (toPage == 0) {
      pJSDom[0].pJS.particles.move.enable = true;
      pJSDom[0].pJS.fn.particlesRefresh();
    } else {
      pJSDom[0].pJS.particles.move.enable = false;
    }
    // change css format of navigation button
    $('.btn_nav').removeClass('lightButton');
    $(window.pagesLink[toPage]).addClass('lightButton');
  
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
  
    setTimeout(function() {
      $(window.pages[toPage]).css('z-index','9');
    }, 1000);
}

$('#leftArrow').click(function() {
    if (window.currentPageIndex > 0) {
        window.currentPageIndex--;
    } else {
        window.currentPageIndex = window.pages.length - 1;
    }
    arrowsHelper(window.currentPageIndex);
});

$('#rightArrow').click(function() {
    if (window.currentPageIndex < window.pages.length - 1) {
        window.currentPageIndex++;
    } else {
        window.currentPageIndex = 0;
    }
    arrowsHelper(window.currentPageIndex);
});