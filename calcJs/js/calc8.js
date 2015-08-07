var display;
var maxDigits = 8;
// Internal function to display the result
function updateDisplay() {
  if (display.length > maxDigits) {
    display = "ERROR";
  }
  document.getElementById("result").innerHTML = display;
}

// Called by HTML to initialize the calculator
function initialize() {
  display = "0";
  updateDisplay();
}

// Called by HTML when a digit button is pressed
function digit(d) {
  if (display != "0") {
    display = "" + display + d;
  } else {
    display = "" + d;
  }
  updateDisplay();
}

// Called by HTML when clr is pressed
function clr() {
  display = "0";
  updateDisplay();
}


