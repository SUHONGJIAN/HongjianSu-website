let options1 = {
    strings: ["Hongjian", "a NYU stu.", "a Ericsson ex-eng."],
    typeSpeed: 100,
    backSpeed: 55,
    startDelay: 3450,
    backDelay: 1300,
    cursorChar: "_",
    onBegin: (self) => {
        setTimeout(function() {
            document.getElementById('animate').style.visibility = "visible";
            let element = document.querySelector('#animate');
            element.classList.add('animated', 'bounceInLeft');
        }, 500);
        setTimeout(function() {
            let element = document.querySelector('#typed');
            element.classList.add('animated', 'rubberBand')
        }, 1850);
    },
    preStringTyped: (arrayPos, self) => {
        if(arrayPos == 1) {
            document.getElementById('typed').style.color = "#0a48e6";  //0a48e6 282741
        }
    },
    onComplete: (self) => {
        setTimeout(function() {
            let element = document.querySelector('#animate');
            element.classList.add('bounceOutRight');
            setTimeout(function() {
                document.getElementById("layer_welcome").style.background = "#ff6138"; //2980b9
                setTimeout(function() {
                    let node = document.createElement("span");
                    node.id = "typed2";
                    node.style.color = "#0a48e6";
                    document.getElementById('animate').innerHTML = "I love "
                    document.getElementById("animate").appendChild(node);
                    let typed2 = new Typed('#typed2', options2);
                }, 500)
            }, 300)
        }, 2000)
    },
}

let options2 = {
    strings: ["playing basketball", "coding", "learning all new things!"],
    typeSpeed: 100,
    backSpeed: 55,
    startDelay: 1200,
    backDelay: 1300,
    cursorChar: "_",
    onBegin: (self) => {
        document.getElementById("animate").style.color = "#282741";
        document.getElementById('typed2').style.color = "#ffc302"; //ffbe53
        let element = document.querySelector('#animate');
        element.classList.remove('bounceInLeft','bounceOutRight');
        element.classList.add('lightSpeedIn');
    },
    onComplete: (self) => {
        setTimeout(function() {
            let element = document.querySelector('#animate');
            element.classList.add('lightSpeedOut');
            setTimeout(function() {
                document.getElementById("interested").style.visibility = "visible";
                let element = document.querySelector("#interested");
                element.classList.add('animated', 'flipInX');
                $("#interested").click(function() {
                    $('html,body').animate({scrollTop: $("#layer_profile").offset().top}, 'slow');
                });
            }, 1500)
        }, 1500)
    },
}

let typed = new Typed('#typed', options1);