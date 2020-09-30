// window.addEventListener('load', start);

// continue from video: 3825s

function updateRed(redSlider) {
  changeColor();
  document.getElementById('rangeRed').value = redSlider;
  document.getElementById('numberRed').value = redSlider;
}
function updateGreen(greenSlider) {
  changeColor();
  //  console.log('Update Green');
  document.getElementById('rangeGreen').value = greenSlider;
  document.getElementById('numberGreen').value = greenSlider;
}
function updateBlue(blueSlider) {
  changeColor();
  document.getElementById('rangeBlue').value = blueSlider;
  document.getElementById('numberBlue').value = blueSlider;
}

function changeColor() {
  //console.log('Change Color');
  var red = document.getElementById('rangeRed').value;
  var green = document.getElementById('rangeGreen').value;
  var blue = document.getElementById('rangeBlue').value;
  // document.getElementByClassName('square').style.background =
  //   'rgb(' + red + ',' + green + ',' + blue + ')';
  var all = document.getElementsByClassName('square');
  for (var i = 0; i < all.length; i++) {
    all[i].style.background = 'rgb(' + red + ',' + green + ',' + blue + ')';
  }
}
