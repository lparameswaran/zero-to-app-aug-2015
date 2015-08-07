function initialize() {
  var a = [5, 500, 20, 21, 22];
  console.log("Testing", a);

  a.push(6);
  console.log("Testing New array", a);

  var t1 = a.pop();
  var t2 = a.pop();
  console.log("Popped", t1, t2, a);
}
