console.log("Let's talk about switch statements and loops in Javascript");

//first let's see switch statements
// switch statements are used to compare a value to multiple cases
// switch statements are used to execute different code blocks based on different conditions
// switch statements are used to avoid multiple if else statements
// switch statements are used to avoid nested if else statements

// const day = "Thursday";
//lets get the day automatically
const today = new Date();
//print full date
console.log(today);
//we extract the long weekday name
const day = today.toLocaleString('default', { weekday: 'long' });

//let's also create a variable for to be used in the switch statement
let message = "";

switch (day) {
    case "Monday":
        console.log("Today is Happy Monday");
        message = "Today is Happy Monday";
        break; //this breaks from the switch statement
        //usually you want to have a break after each case, otherwise the code will continue to the next case
    case "Tuesday":
        console.log("Today is Tuesday that feels like Monday");
        message = "Today is Tuesday that feels like Monday";
        break;
    case "Wednesday":
        console.log("Today is Wednesday the small Friday..");
        message = "Today is Wednesday the small Friday..";
        break;
    case "Thursday":
        console.log("Today is Thursday");
        message = "Today is Thursday getting closer to Friday";
        break;
    case "Friday":
        console.log("Today is actual Friday");
        message = "Today is actual Friday";
        break;
    case "Saturday":
        console.log("Today is Saturday");
        message = "Today is Saturday let the weekend begin";
        break;
    case "Sunday":
        console.log("Today is Sunday");
        message = "Today is Sunday the last day of the weekend";
        break;
    default: //aliens landed or cosmic rays hit the computer
        console.log("Invalid day");
        message = "Invalid day - aliens must have landed";
    }

//now let's show this message in the browser using the DOM
//we have a paragraph of class "switch-example" in our HTML let's get it
const switchExample = document.querySelector("#switch-example"); //# is for id, . is for class

//now let's set the text of the paragraph to our message
switchExample.textContent = message; //textContent is a property of the DOM element that sets the text inside the element

//in this particular case since we are only printing the day, we could have used a simple string concatenation
console.log("Today is " + day); //no need for a switch statement

//our usage of switch would be if the cases are quite different and we need to execute different code blocks

//now onto while loops
//while loops are used to execute a block of code multiple times as long as a condition is true

//let's print numbers from 1 to 10
let i = 1; //initialize the counter we need it to be variable so we can change it
//our condition will be that i is less than or equal to 10
while (i <= 4) { //note if this was i < 4, it would print 1, 2, 3 only, because 4 < 4 is false
    console.log(i);
    i++; //increment the counter //this increment is same as i = i + 1, increases the value of i by 1
}

//now let's loop from 1 to 3 and add text to block-n div
let j = 1; //we could reuse i but let's keep it separate
while (j <= 3) {
    //get the div with id block-j
    const block = document.querySelector("#block-" + j);
    //set the text of the div
    block.textContent += " Added Custom Block " + j; //note the += operator, it appends the text to the existing text
    console.log("Added Custom Block " + j);
    j++; //increment the counter
}

counter = 1;
//let's make an infinite loop
while (false) { //if this was true we would have a loop that asks questions until yes or counter is 10
    console.log("This is potentially an infinite loop");
    console.log("Counter is " + counter);
    //we have ways of break from the loop
    //we could ask for input to break from the loop
    const input = prompt("Do you want to break from the loop? Type yes to break");
    if (input === "yes" || counter >= 10) {
        //even if user wants to keep going, we will break after 10 loops
        console.log("Time to break free!");
        break; //this will break out of the loop
    }
    //we keep going until we break
    counter++;
    //there is also a continue statement that skips the rest of the loop and goes to the next iteration
    // continue; //this is useless here because we are at the end of the loop
}
//again above if while (false) will never run because the condition is false
//but if you change it to true, it will run forever until you break it with the prompt

console.log("We are free from the loop!");

//now let's do for  loop

//for loops are used to execute a block of code a number of times
//so let's print numbers from 1 to 5
//so let k = 1; is the initialization
//k <= 5; is the condition
//k++ is the increment
for (let k = 1; k <= 5; k++) { //we could have reused i or j but let's keep it separate
    console.log("Number is " + k);
    //there is an alternative syntax for string interpolation
    console.log(`Number is ${k}`); //note the backticks ` and ${} to insert the variable
    //the backticks method is useful when you have multiple variables to insert
    //it is also more readable
    //back to for loop
    //here we go back to start of the loop and k is incremented by 1 using k++
    //then check for the condition k <= 5 is performed
    //if true, the loop continues, if false, the loop ends
}
//there is no k outside the loop, it is only available inside the loop
//this is a big difference between for and while loops
//leads to less bugs because you can't accidentally use the counter outside the loop

//lets add some text to id's block-4 to block-6
for (let k = 4; k <= 6; k++) { //now I am reusing k, because it is a different loop
    //get the div with id block-k
    const block = document.querySelector("#block-" + k);
    //set the text of the div
    block.textContent += " Added Custom Block " + k;
    console.log("Added Custom Block " + k);
}