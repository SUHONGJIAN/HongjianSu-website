// Simulate mouse click events:
function simulateClick() {

  let mouseDownEvent = new MouseEvent('mousedown', {
    button: 2,
    clientX: Math.round(Math.random() * window.innerWidth),
    clientY: Math.round(Math.random() * window.innerHeight),
  });
  canvas.dispatchEvent(mouseDownEvent);

  function simulateMouseUp() {
    let mouseUpEvent = new MouseEvent('mouseup')
    canvas.dispatchEvent(mouseUpEvent);
  }

  let holeCounts = 35
  let moveCounts = 200
  let startX = mouseDownEvent.clientX
  let startY = mouseDownEvent.clientY
  let x = startX
  let y = startY
  let cutX = Math.floor(window.innerWidth / 5)
  function simulateMouseMove() {
    if (moveCounts <= 0) {
      x = Math.round(Math.random() * window.innerWidth)
      y = Math.round(Math.random() * window.innerHeight)
      startX = x
      startY = y
      moveCounts = 50 + Math.ceil((Math.random() * 150))
      holeCounts--
    } else {
      x = startX + Math.floor(window.innerWidth / 10 * Math.random())
      y = startY + Math.floor(window.innerHeight / 10 * Math.random())
      moveCounts--
    }
    let mouseMoveEvent = new MouseEvent('mousemove', {
      clientX: x,
      clientY: y,
    })
    canvas.dispatchEvent(mouseMoveEvent);
    if (holeCounts <= 0) {
      window.clearInterval(ref)
      refFinal = window.setInterval(finalClick, 1)
    }

    function finalClick() {
      let mouseMoveEvent = new MouseEvent('mousemove', {
        clientX: cutX,
        clientY: Math.floor(window.innerHeight * 24 / 50),
      })
      canvas.dispatchEvent(mouseMoveEvent);
      cutX++
      if (cutX > Math.ceil(window.innerWidth * 3 / 4)) {
        window.clearInterval(refFinal)
        simulateMouseUp()
        // document.getElementById("layer_welcome").style.zIndex = -2
      }
    }
  }
  
  ref = window.setInterval(simulateMouseMove, 1)
}

simulateClick()
