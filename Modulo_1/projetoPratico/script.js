function updateRed(redSlider) {
  changeColor();
  document.getElementById('Red').value = redSlider;
}
function updateGreen(greenSlider) {
  changeColor();
  console.log('Update Green');
  document.getElementById('Green').value = greenSlider;
}
function updateBlue(blueSlider) {
  changeColor();
  document.getElementById('Blue').value = blueSlider;
}

function changeColor() {
  console.log('Change Color');
  var red = document.getElementById('Red').value;
  var green = document.getElementById('Green').value;
  var blue = document.getElementById('Blue').value;
  // document.getElementByClassName('square').style.background =
  //   'rgb(' + red + ',' + green + ',' + blue + ')';
  var all = document.getElementsByClassName('square');
  for (var i = 0; i < all.length; i++) {
    all[i].style.background = 'rgb(' + red + ',' + green + ',' + blue + ')';
  }
}
