var display = "0";
var maxDigits = 8;
var error = false;
var prevNumber = 0;
var result = 0;
var autoClear = false;
var prevOperation = '';
var lastOperation = '';

// Internal function to display the result
function updateDisplay() {
  if (error) {
    return;
  }
  var numDigits = (parseInt(display) < 0) ? (maxDigits + 1) : maxDigits;
  if (display.length > numDigits) {
    error = true;
    display = "ERROR";
  }
  document.getElementById("result").innerHTML = display;
}

// Called by HTML to initialize the calculator
function initialize() {
  updateDisplay();
}

// Called by HTML when a digit button is pressed
function digit(d) {
  if (error) {
    return;
  }
  if (autoClear) {
    display = "0";
    autoClear = false;
  }
  lastOperation = "" + d;
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
  lastOperation = '';
  display = "0";
  prevNumber = 0;
  result = 0;
  prevOperation = '';
  updateDisplay();
}

// Called by HTML when + is pressed
function add() {
  if (error || lastOperation == '+' || lastOperation == '-') {
    return;
  }
  if (prevOperation != '') {
    equals();
  } else {
    prevNumber = parseInt(display);
  }
  lastOperation = '+';
  prevOperation = '+';
  display = "0";
  updateDisplay();
}

// Called by HTML when - is pressed
function sub() {
  if (error || lastOperation == '+' || lastOperation == '-') {
    return;
  }
  if (prevOperation != '') {
    equals();
  } else {
    prevNumber = parseInt(display);
  }
  lastOperation = '-';
  prevOperation = '-';
  display = "0";
  updateDisplay();
}

// Called by HTML when equals is pressed
function equals() {
  if (error) {
    return;
  }
  if (prevOperation == '+') {
    prevNumber = prevNumber + parseInt(display); // Do the addition
    prevOperation = '';
  } else if (prevOperation == '-') {
    prevNumber = prevNumber - parseInt(display); // Do the subtraction
    prevOperation = '';
  } else {
    prevNumber = parseInt(display);
  }
  display = "" + prevNumber;
  autoClear = true;
  lastOperation = '';
  updateDisplay();
}
