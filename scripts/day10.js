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

//now let's do if else statements
//we have elements called conditional1 to conditional5

//lets have a variable called isRaining
let isRaining = true; //it is raining
//so if it is raining we want to show "Take an umbrella"
//i will use += to add more text to the same element
if(isRaining) {
    document.getElementById("conditional1").innerText += " Yeah. Take an umbrella";
} else {
    document.getElementById("conditional1").innerText += " Nope. No need for an umbrella";
}

//now let's change isRaining to false
isRaining = false; //it is not raining
//so if it is not raining we want to show "No need for an umbrella"
if(isRaining) {
    document.getElementById("conditional2").innerText += " Yeah. Take an umbrella";
} else {
    document.getElementById("conditional2").innerText += " Nope. No need for an umbrella";
}

//so based on some condition we can show different text or perform different actions

//now let's have a variable called age
let age = 18; //so we have a variable called age
//so if age is greater than or equal to 18 we can show "You can vote"
//let's do if else if else
//if you are over age 120 you are probably not voting
//if you are under 18 you cannot vote
//lets create const conditional3 for element with id "conditional3"
const conditional3 = document.getElementById("conditional3");
 if(age > 120) {
    conditional += " You are probably not voting";
    //lets show age as well
} if(age >= 18) {
    conditional3.innerText += " Yay! You can vote";
    //lets show age as well
   
}  else {
    conditional3.innerText += " You cannot vote";
    //we know this is the only option left so we do not need to check age here
    //we know the age is under 18 here for sure
}
//we always add that age to the end of the text
conditional3.innerText += " Your age is " + age;

//now let's change age to 121
age = 121; //so we have a variable called age
//so again we do not know the value of age we need to check
//perhaps this value came from user input or a database or call to another system
//so if age is greater than or equal to 18 we can show "You can vote"
//let's do if else if else
//if you are over age 120 you are probably not voting

const conditional4 = document.getElementById("conditional4");

//order matters of comparisons!!
//if we had if(age >= 18) first then we would not reach if(age > 120) because 121 is greater than 18

if(age > 120) {
    conditional4.innerText += " You are probably not voting";
    //lets show age as well
} else if(age >= 18) {
    //we know in this block that we are from 18 to 120 inclusive
    conditional4.innerText += " Yay! You can vote";
    //lets show age as well
   
}  else { //here we know all ages under 18 remain
    conditional4.innerText += " You cannot vote";
    //we know this is the only option left so we do not need to check age here
    //we know the age is under 18 here for sure
}
//we always add that age to the end of the text
conditional4.innerText += " Your age is " + age;

//now let's change age to 17
age = 17; //so we have a variable called age
//so again we do not know the value of age we need to check
//perhaps this value came from user input or a database or call to another system

const conditional5 = document.getElementById("conditional5");

//order matters of comparisons!!

if(age > 120) {
    conditional5.innerText += " You are probably not voting";
    //lets show age as well
} else if(age >= 18) {
    //we know in this block that we are from 18 to 120 inclusive
    conditional5.innerText += " Yay! You can vote";
    //lets show age as well
   
} else { //here we know all ages under 18 remain
    conditional5.innerText += " You cannot vote";
    //we know this is the only option left so we do not need to check age here
    //we know the age is under 18 here for sure
}
//we always add that age to the end of the text
conditional5.innerText += " Your age is " + age;

//if you have many comparisons to do you can use switch statement
//we will cover that in another lesson
