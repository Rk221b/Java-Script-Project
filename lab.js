var username = window.prompt("Enter your name");
var getusername = document.getElementById("g");
getusername.innerHTML += " " +username;

var num1 = parseInt(window.prompt("Enter your first number :"));
var num2 = parseInt(window.prompt("Enter your second number :"));

var span1=document.getElementById("operand1");
var span2=document.getElementById("operand2");
span1.innerHTML = num1;
span2.innerHTML = num2;

var sum = num1 + num2;
var diff = num1 - num2;
var multiply = num1 * num2;
var divide = num1 / num2;
var mod = num1 % num2;

document.getElementById("add").innerHTML = "Sum of " + num1 + " and " +num2 + " is "  + sum;
document.getElementById("sub").innerHTML = "Difference of " + num1 + " and " +num2 + " is "  + diff;
document.getElementById("mul").innerHTML = "Multiplication of " + num1 + " and " +num2 + " is "  + multiply;
document.getElementById("divide").innerHTML = "Division of " + num1 + " and " +num2 + " is "  + divide;
document.getElementById("modulus").innerHTML = "Mod of " + num1 + " and " +num2 + " is "  + mod;