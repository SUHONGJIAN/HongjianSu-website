window.human = false;
window.stopFire = false;
window.autoFire = true;

var canvasEl = document.querySelector('#fireworks');
var ctx2 = canvasEl.getContext('2d');
var numberOfParticules = 30;
var pointerX = 0;
var pointerY = 0;
var tap = ('ontouchstart' in window || navigator.msMaxTouchPoints) ? 'touchstart' : 'mousedown';//mousedown
var colors = ['#FF1461', '#18FF92', '#5A87FF', '#FBF38C'];
let isDrawing = false;

function setCanvasSize() {
  canvasEl.width = window.innerWidth * 2;
  canvasEl.height = window.innerHeight * 2;
  canvasEl.style.width = window.innerWidth + 'px';
  canvasEl.style.height = window.innerHeight + 'px';
  canvasEl.getContext('2d').scale(2, 2);
}

function updateCoords(e) {
  pointerX = e.clientX || e.touches[0].clientX;
  pointerY = e.clientY || e.touches[0].clientY;
}

function setParticuleDirection(p) {
  var angle = anime.random(0, 360) * Math.PI / 180;
  var value = anime.random(50, 180);
  var radius = [-1, 1][anime.random(0, 1)] * value;
  return {
    x: p.x + radius * Math.cos(angle),
    y: p.y + radius * Math.sin(angle)
  }
}

function createParticule(x,y) {
  var p = {};
  p.x = x;
  p.y = y;
  p.color = colors[anime.random(0, colors.length - 1)];
  p.radius = anime.random(16, 32);
  p.endPos = setParticuleDirection(p);
  p.draw = function() {
    ctx2.beginPath();
    ctx2.arc(p.x, p.y, p.radius, 0, 2 * Math.PI, true);
    ctx2.fillStyle = p.color;
    ctx2.fill();
  }
  return p;
}

function createCircle(x,y) {
  var p = {};
  p.x = x;
  p.y = y;
  p.color = '#FFF';
  p.radius = 0.1;
  p.alpha = .5;
  p.lineWidth = 6;
  p.draw = function() {
    ctx2.globalAlpha = p.alpha;
    ctx2.beginPath();
    ctx2.arc(p.x, p.y, p.radius, 0, 2 * Math.PI, true);
    ctx2.lineWidth = p.lineWidth;
    ctx2.strokeStyle = p.color;
    ctx2.stroke();
    ctx2.globalAlpha = 1;
  }
  return p;
}

function renderParticule(anim) {
  for (var i = 0; i < anim.animatables.length; i++) {
    anim.animatables[i].target.draw();
  }
}

function animateParticules(x, y) {
  var circle = createCircle(x, y);
  var particules = [];
  for (var i = 0; i < numberOfParticules; i++) {
    particules.push(createParticule(x, y));
  }
  anime.timeline().add({
    targets: particules,
    x: function(p) { return p.endPos.x; },
    y: function(p) { return p.endPos.y; },
    radius: 0.1,
    duration: anime.random(1200, 1800),
    easing: 'easeOutExpo',
    update: renderParticule
  });
    anime.timeline().add({      // don't use chain-operation: .add().add() -> will add asynchronously.
    targets: circle,
    radius: anime.random(80, 160),
    lineWidth: 0,
    alpha: {
      value: 0,
      easing: 'linear',
      duration: anime.random(600, 800),  
    },
    duration: anime.random(1200, 1800),
    easing: 'easeOutExpo',
    update: renderParticule,
    offset: 0
  });
}

var render = anime({
  duration: Infinity,
  update: function() {
    ctx2.clearRect(0, 0, canvasEl.width, canvasEl.height);
  }
});

fireworks = document.getElementById("fireworks");
fireworks.addEventListener(tap, function(e) {
  if (tap == "mousedown") {
      isDrawing = true;
  }
  window.human = true;
  render.play();
  updateCoords(e);
  animateParticules(pointerX, pointerY);
}, false);

fireworks.addEventListener("mousemove", function(e) {
    if (isDrawing == true) {
        window.human = true;
        render.play();
        updateCoords(e);
        animateParticules(pointerX, pointerY);
    }
  }, false);

fireworks.addEventListener("mouseup", function(e) {
    isDrawing = false;
}, false);

var centerX = window.innerWidth / 2;
var centerY = window.innerHeight / 2;

function autoClick() {
  if (window.human) return;
  animateParticules(
    // anime.random(centerX-50, centerX+50), 
    // anime.random(centerY-50, centerY+50)
    anime.random(0, window.innerWidth),
    anime.random(0, window.innerHeight)
  );
  if (window.stopFire == false) {
    anime({duration: 300}).finished.then(autoClick);
    window.autoFire = true;
  }
}

autoClick();
setCanvasSize();
window.addEventListener('resize', setCanvasSize, false);
