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
while (true) {
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

console.log("We are free from the loop!");