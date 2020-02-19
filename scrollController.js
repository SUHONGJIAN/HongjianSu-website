$(function () {
    var controller = new ScrollMagic.Controller();

    // define movement of panels
    var wipeAnimation = new TimelineMax()
    .fromTo("section.panel#experiencesPage", 1, {y: "100%"}, {y: "0%", ease: Linear.easeNone})
    .eventCallback("onComplete", function() {
        document.getElementById("experiencesPage").style.overflow = 'auto';
        // $("#layer_profile").bind('mousewheel', function(e, d) {
        //     e.preventDefault();
        // });
        // $("#experiencesPage").unbind('mousewheel');
        // document.getElementById("experiencesPage").classList.add('overflow-scroll');
        // document.getElementById("experiencesPage").style.overflow = '';
    });
    // .fromTo("section.panel.turqoise", 1, {x: "-100%"}, {x: "0%", ease: Linear.easeNone})  // in from left
    // .fromTo("section.panel.green",    1, {x:  "100%"}, {x: "0%", ease: Linear.easeNone})  // in from right
    // .fromTo("section.panel.bordeaux", 1, {y: "-100%"}, {y: "0%", ease: Linear.easeNone}); // in from top

    // create scene to pin and link animation
    new ScrollMagic.Scene({
        // triggerElement: "#layer_profile",
        triggerElement: "#layer_profile",
        triggerHook: "onLeave",
        duration: "100%"
    })
    .setPin("#layer_profile")
    .setTween(wipeAnimation)
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);

    var wipeAnimation2 = new TimelineMax()
    .fromTo("section.panel#achievementsPage", 1, {y: "100%"}, {y: "0%", ease: Linear.easeNone});
    new ScrollMagic.Scene({
        triggerElement: "#layer_profile",
        triggerHook: "onLeave",
        offset: window.innerHeight,
        duration: "100%"
    })
    .setPin("#layer_profile")
    .setTween(wipeAnimation2)
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);

    // Enable or disable scroll
    // var fixed = document.getElementById("experiencesPage");
    
    // document.getElementById("experiencesPage").addEventListener('mousewheel', function(e) {
    //     e.preventDefault();
    //     // document.getElementById("layer_profile").onwheel.preventDefault();
    // }, false);
    // fixed.classList.add('overflow-none');
    // var fixed = document.getElementById("experiencesPage");
    // fixed.style.overflow = 'hidden';
    // fixed.style.overflow = '';

    // var achievementsPage = $("#achievementsPage").detach();
    $('#experiencesPage').on('scroll', function() {
        if ($(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight) {
            // document.getElementById("achievementsPage").style.display = "block";
            // $("#layer_profile").append(achievementsPage);
            // var wipeAnimation2 = new TimelineMax()
            // .fromTo("section.panel#achievementsPage", 1, {y: "100%"}, {y: "0%", ease: Linear.easeNone});
            // $("#layer_profile").unbind('mousewheel');
            // document.getElementById("achievementsPage").style.display = 'block';
        }
    });


    var wipeAnimation3 = new TimelineMax()
    .fromTo("section.panel#skillsPage", 1, {y: "100%"}, {y: "0%", ease: Linear.easeNone});
    new ScrollMagic.Scene({
        triggerElement: "#layer_profile",
        triggerHook: "onLeave",
        offset: window.innerHeight * 2,
        duration: "100%"
    })
    .setPin("#layer_profile")
    .setTween(wipeAnimation3)
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);

    
    
});
