function initialize() {
  var a = [5, 500, 20, 21, 22];
  console.log("Testing", a);
  console.log("Array Length", a.length);

  a.push(6);
  console.log("Testing New array", a);
  console.log("Array Length", a.length);

  var t1 = a.pop();
  console.log("Array Length", a.length);
  var t2 = a.pop();
  console.log("Array Length", a.length);
  console.log("Popped", t1, t2, a);

  // Check the length of the array
  console.log("Array Length", a.length);
}
