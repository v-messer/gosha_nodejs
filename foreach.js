var arr = ["Яблоко", "Апельсин", "Груша"];
var arr1 = ["11", "22", "33"];

arr.forEach(function(item, i, arr1) {
  console.log( i + ": " + item + " (массив:" + arr + ")" );
});