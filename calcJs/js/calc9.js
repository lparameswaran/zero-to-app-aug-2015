var display;
var maxDigits = 8;
var error = false;
var prevNumber = 0;
var result = 0;
var prevOperation = '';

// Internal function to display the result
function updateDisplay() {
  if (error) {
    return;
  }
  if (display.length > maxDigits) {
    error = true;
    display = "ERROR";
  }
  document.getElementById("result").innerHTML = display;
}

// Called by HTML to initialize the calculator
function initialize() {
  display = "0";
  error = false;
  updateDisplay();
}

// Called by HTML when a digit button is pressed
function digit(d) {
  if (error) {
    return;
  }
  if (display != "0") {
    display = "" + display + d;
  } else {
    display = "" + d;
  }
  updateDisplay();
}

// Called by HTML when clr is pressed
function clr() {
  error = false;
  display = "0";
  prevNumber = 0;
  result = 0;
  prevOperation = '';
  updateDisplay();
}
