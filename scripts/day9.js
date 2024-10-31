//so write many comments , explaining your reasoning behind the code
//what is the purpose of the code
//when learning it is okay to write even more comments than code
//like you could write a comment that explains every line of code
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
let myName = "Valdis"; //note how I am using quotes for strings
let university = "RTU";
//I can use + to concatenate strings or add them together
let sentence = "My name is " + myName + " and I work at " + university
//let's print out the sentence	
console.log(sentence);