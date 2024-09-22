var arr = ["apple", "banana", "watermelon"];
console.log(arr);
arr[1] = "carrot"; // modification
console.log(arr);
arr[3] = "beetroot";
console.log(arr); //added
var obj = {
  name: "raju",
  password: 1234,
};
console.log(obj);
(obj.name = "ravi"), //modification
  (obj.password = 5678),
  console.log(obj);
(obj.age = "22"), console.log(obj); //added
//number methods
var a = "3";
a1 = a.toString();
console.log(typeof a1, a1);
var a = 1234.567;
console.log(parseInt(a));
console.log(parseFloat(a));
console.log(isFinite(a)); // boolean type
let b = 4567.89;
console.log(b.toFixed(2)); // count the numbers after the dot
console.log(b.toFixed(8));
console.log(b.toPrecision(8)); //count length except the dot
console.log(b.toPrecision(3));
