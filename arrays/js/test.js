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

  var str = ["i", "Am", "a", "aPP", "developER"];
  console.log("array before change", str);
  // The following code prints -- I AM A APP DEVELOPER
  for (var i=0;i < str.length;i ++) {
    str[i] = str[i].toUpperCase();
    console.log(str[i]);
  }
  // The following code prints -- developer app a am i
  for (var i=str.length - 1;i >=0;i ++) {
    str[i] = str[i].toLowerCase();
    console.log(str[i]);
  }
  console.log("array after change", str);
}
