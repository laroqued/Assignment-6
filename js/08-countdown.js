var number;
var entry

entry = window.prompt("Enter a number to countdown from.");
number = parseInt(entry, 10);
for (var i = number; i >= 0; i--) {
  console.log(i);
}
