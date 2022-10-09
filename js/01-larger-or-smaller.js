/* 
Create an application that accepts two integers within two separate prompts. Then, display only the larger of the two within the browser window. Don’t forget to handle the fact that the two could be equal.
 */

var prompt1;
var prompt2
var num1;
var num2;

prompt1 = window.prompt("Enter your first number");
num1 = parseInt(prompt1, 10);
prompt2 = window.prompt("Enter your second number");
num2 = parseInt(prompt2, 10);

if (num1 > num2) {
  window.document.writeln(num1 + " is larger than " + num2);
} else if (num2 > num1) {
  window.document.writeln(num2 + " is larger than " + num1);
} else if (num2 === num1) {
  window.document.writeln(num1 + " and " + num2 + " are equal.");
}