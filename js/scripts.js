//Business logic:
var add = function(number1, number2){
	return number1 + number2;
};

var subtract = function(number1, number2){
   return number1 - number2;
 };

 var multiply = function(number1, number2){
   return number1 * number2;
 };

 var divide = function(number1, number2){
   return number1 / number2;
 };

 // Interface logic:
$(document).ready(function(){
	$("form#add").submit(function(event){
		event.preventDefault();
		var number1 = parseInt($("#add1").val());
		var number2 = parseInt($("#add2").val());
		var result = add(number1, number2);
		$("#output").text(result);
	});
	$("form#subtract").submit(function(event){
		event.preventDefault();
		var number1 = parseInt($("#subtract1").val());
		var number2 = parseInt($("#subtract2").val());
		var result = subtract(number1, number2);
		$("#output").text(result);
	});
	$("form#multiply").submit(function(event){
		event.preventDefault();
		var number1 = parseInt($("#multiply1").val());
		var number2 = parseInt($("#multiply2").val());
		var result = multiply(number1, number2);
		$("#output").text(result);
	});
	$("form#divide").submit(function(event){
		event.preventDefault();
		var number1 = parseInt($("#divide1").val());
		var number2 = parseInt($("#divide2").val());
		var result = divide(number1, number2);
		$("#output").text(result);
	});
});





//
// var number1= parseInt(prompt("enter a number"));
// var number2=parseInt(prompt("enter another number"));
//
// alert(subtract(number1, number2));
//
//
//
//
// var number1= parseInt(prompt("enter a number"));
// var number2=parseInt(prompt("enter another number"));
//
// alert(multiply(number1, number2));
//
//
//

//
// var number1= parseInt(prompt("enter a number"));
// var number2=parseInt(prompt("enter another number"));
//
// alert(divide(number1, number2));
//
//
//
// // <<------BMI Calculator-------->>
// var BMI = function (height, weight){
// 	return weight / Math.sqrt(height);
// }
//
// var height = parseInt(prompt("enter height"));
// var weight = parseInt(prompt("enter weight"));
//
// alert(BMI(height, weight))
//
//
// // <<------Farenheit to Celsius-------->>
// var celsius = function(farenheit, multiply, add) {
// 	return farenheit * multiply + add;
// }
//
// var farenheit = parseInt(prompt("enter farenheit"));
// var multiply = 1.8;
// var add = 32;
//
// alert(celsius(farenheit, multiply, add));
