//we will showcase Javascript comparison operators
//then we will showcase Javascript logical operators
//finally we will showcase Javascript if else statements - conditional statements

console.log("Starting our lesson on comparison operators");

//first let's use console log to show comparison operators
console.log("Is 2 > 3 ?", 2 > 3); //false
console.log("Is 2 < 3 ?", 2 < 3); //true
console.log("Is 2 >= 3 ?", 2 >= 3); //false
console.log("Is 2 <= 3 ?", 2 <= 3); //true
console.log("Is 2 == 3 ?", 2 == 3); //false
console.log("Is 2 == 2 ?", 2 == 2); //true
console.log("Is 2 != 3 ?", 2 != 3); //true
console.log("Is 2 != 2 ?", 2 != 2); //false

//now we want to use === and !== because they are more strict
console.log("Is 2 === 2 ?", 2 === 2); //true
console.log("Is 2 === '2' ?", 2 === '2'); //false
//compare with ==
console.log("Is 2 == '2' ?", 2 == '2'); //true
//above is a bad design choice in Javascript, but it is what it is
//in most languages 2 == '2' would be false or even an error
//in Javascript == is dangerous and should be avoided
//use === and !== instead of == and !=

//our html document has span elements with ids ranging from comparison1 to comparison7
//we can use that to adjust innerText of those spans - we could also adjust innerHTML but that is more dangerous
document.getElementById("comparison1").innerText = 5 === 5; //true
//how to read the above line of code?
//first we get the whole web document for our webpage
//then we say we want a particular element with id "comparison1"
//by W3C standards there should be only one element with a particular id
//if there are multiple ones by mistake we will get the first one
//then we change the innerText of that element to be the result of 5 === 5
//we could also save the element in const or let variable and then change it's innerText
//let's use const for comparison2 element
//so here it is two steps
const comparison2 = document.getElementById("comparison2");
//so now we have access to the element with id "comparison2" with shorthand comparison2
comparison2.innerText = 5 === 6; //false

//now let's use !==
//we will use comparison3 element
const comparison3 = document.getElementById("comparison3");
//we will use result of 5 !== 6 as const result3
const result3 = 5 !== 6; //so we save comparison result in a variable or here in a constant
//in getting result3 the right side is processed first so 5 !== 6 is evaluated first (here as true)
comparison3.innerText = result3; //we set innerText of comparison3 to be the result of 5 !== 6
//so that was a three step process but possibly more readable

//now let's go back to one line process for comparison4
document.getElementById("comparison4").innerText = 5 > 6 ; //false
//what happens if we make an error in Javascript code?
// document.getElementById("comparison4000").innerText = 5 < 6 ; //false
//page will still display but console will show an error
//so it is important to check console for errors

//so now comparison5
document.getElementById("comparison5").innerText = 5 < 6 ; //true

//now comparison6
document.getElementById("comparison6").innerText = 5 >= 6 ; //false

//now comparison7
document.getElementById("comparison7").innerText = 5 <= 6 ; //true

//now let's do logical operators
//we have 5 elements for logical operators in our html document
//logical1 to logical5
//let's do (5 === 5) && (6 === 6) first both true so true && true is true
document.getElementById("logical1").innerText = (5 === 5) && (6 === 6); //true
//we use parentheses to group our logical operations to make sure they are evaluated in the right order

//now (5 === 5) && (6 === 7) 
document.getElementById("logical2").innerText = (5 === 5) && (6 === 7); //false
document.getElementById("logical2").innerText += " because 6 !== 7 so true and false is false"; //we can add more text to the same element
//so using += we can add more text to the same element

//now (5 === 5) || (6 === 7)
document.getElementById("logical3").innerText = (5 === 5) || (6 === 7); //true
document.getElementById("logical3").innerText += " because 5 === 5 is true so true or false is true";
//only one of the conditions needs to be true for || to be true, could be both as well

// (5 === 6) || (6 === 7)
document.getElementById("logical4").innerText = (5 === 6) || (6 === 7); //false
document.getElementById("logical4").innerText += " because 5 !== 6 and 6 !== 7 so false or false is false";
//if both sides are false then || is false

//finally we have negation operator ! 
//!(5 === 6)

document.getElementById("logical5").innerText = !(5 === 6); //true
document.getElementById("logical5").innerText += " because 5 !== 6 so !false is true";

//we can use a variable to create a toggle effect
let toggle = true; //variable name is descriptive
document.getElementById("toggle1").innerText = toggle; //true
toggle = !toggle; //so now toggle is false
document.getElementById("toggle2").innerText = toggle; //false
toggle = !toggle; //so now toggle is true again
document.getElementById("toggle3").innerText = toggle; //true