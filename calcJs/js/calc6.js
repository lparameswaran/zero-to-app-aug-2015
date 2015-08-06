var display;
// Internal function to display the result
function updateDisplay() {
  document.getElementById("result").innerHTML = display;
}

// Called by HTML to initialize the calculator
function initialize() {
  display = "0";
  updateDisplay();
}

// Called by HTML when a digit button is pressed
function digit(d) {
  display = "" + display + d;
  updateDisplay();
}

// Called by HTML when clr is pressed
function clr() {
  display = "0";
  updateDisplay();
}


