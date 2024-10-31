// // is a comment in Javascript - meant for humans to read not computers
//so write many comments , explaining your reasoning behind the code
//what is the purpose of the code
//when learning it is okay to write even more comments than code
//like you could write a comment that explains every line of code
//so by default Javascript runs from top to bottom sequentially
console.log("Hello from Javascript!");
document.body.style.backgroundColor = "lightblue";
console.log("The background color of the body has been changed to lightblue!");
// console.log(2+2);
//let's see some more math in console of all arithmetic operations
console.log(2+3);
console.log(2-3);
console.log(2*3);
console.log(2/3);
//so Javascript uses % for modulus operator - which gives the remainder of the division
console.log("20 modulus 6 or reminder of 20 divided by 6 is", 20%6);
//we can use paranthesis to change the order of operations
console.log("2 + 3 * 5 = ", 2 + 3 * 5);
console.log("(2 + 3) * 5 = ", (2 + 3) * 5); //this will give us 25
//there is also power operator in javascript
console.log("2^3 = ", 2**3);
//how about 2 to the power of 0.5 or square root of 2
console.log("2^0.5 = ", 2**0.5);
//2 to the power of 8
console.log("2^8 = ", 2**8);
//we could even do cos, sin, tan, log, etc
console.log("cos(0) = ", Math.cos(0)); //so Math comes with Javascript
//how about PI ?
console.log("PI = ", Math.PI);
//how about e ?
console.log("e = ", Math.E);
//how about log of 1000 ?
console.log("log base 10 of 1000 = ", Math.log10(1000));

//now let's do some variables
//variables let us store values and use them later
let x = 2; //so recommended way to declare variables is let
let y = 3;
let z = x + y;
console.log("x + y = ", z);

//how about my name stored in string
//variables are CASE SENSITIVE! myname is not the same as myName
//in Javascript stick to camelCase for variable names
//so myVariableName is okay, but my_variable_name is not recommended
//again try to be descriptive and fit within 1-3 words ideally
const myName = "Valdis"; //note how I am using quotes for strings
const university = "RTU DITF"; //imagine this data is coming from a form or a database or some other source
//I can use + to concatenate strings or add them together
const sentence = "My name is " + myName + " and I work at " + university
//let's print out the sentence	
console.log(sentence);
//now let's add this sentence to div with id "my-custom-text"
document.getElementById("my-custom-text").innerHTML = sentence;

//i can change the values of variables
x = 2024; //not no let anymore, since we already declared x
y = 2025;
z = x + y;
console.log("x + y = ", z);

//note: use short BUT descriptive variable names !

//there is an older way of declaring variables with var - we will not use it
//no need to use it anymore, let and const are better

//there is also const for constant variables
//in fact start by const and only if you need to change the value use let
//this leads to less bugs and more readable code
const myBirthday = "2024-10-10"; //we assume the birthday will not change...
// myBirthday = "2025-10-10"; //this will give an error, since we cannot change a constant