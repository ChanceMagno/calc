var add = function(number1, number2) {
	return number1 + number2;
};

var sub = function(number1, number2) {
	return number1 - number2;
};

var multi = function(number1, number2) {
	return number1 * number2;
};

var divide = function(number1, number2) {
	return number1 / number2;
};

var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter a second number:"));
var result = devide(number1,number2);

alert(result);
