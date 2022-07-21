let bgcontainer = document.getElementById("colorPickerContainer");
let span = document.getElementById("selectedColorHexCode");

function buttonOne() {
  bgcontainer.style.backgroundColor = "#e0e0e0";
  span.textContent = "#e0e0e0";
}

function buttonTwo() {
  bgcontainer.style.backgroundColor = "#6fcf97";
  span.textContent = "#6fcf97";
}

function buttonThree() {
  bgcontainer.style.backgroundColor = "#56ccf2";
  span.textContent = "#56ccf2";
}

function buttonFour() {
  bgcontainer.style.backgroundColor = "#bb6bd9";
  span.textContent = "#bb6bd9";
}
