console.log("This is a log function from console");

//let's define a function to drink coffee
function drinkCoffee() {
    //we use curly braces to define the block of code for this function
    //let's pour milk first
    console.log("Pouring milk");
    //let's pour coffee
    console.log("Pouring coffee");
    console.log("Drinking coffee");
}
//so we have created an abstraction called drinkCoffee
//if we need to change the details of drinking coffee, we only need to change the function

//now I can call the function
drinkCoffee(); //note the parentheses
// drinkCoffee(); //note the parentheses

//let's be like Fry from Futurama and drink 100 cups of coffee
//wiki on Fry https://en.wikipedia.org/wiki/Philip_J._Fry
// for (let i = 1; i <= 100; i++) {
//     drinkCoffee();
// }

//instead of making a function to drink tea
//let's make a function to drink any beverage
//in other words we will make a generic function that takes a parameter
function drinkAny(beverage) {
    //since coffee requires specific steps, we will check if the beverage is coffee
    if (beverage === "coffee") {
        //we just call the drinkCoffee function
        drinkCoffee();
        //then we return from the function immediately
        //means that rest of the code in this function will not be executed
        return;
    }
    console.log("Pouring " + beverage);
    console.log("Drinking " + beverage);
}

//so let's drink strawberry milk
drinkAny("strawberry milk");
//drink coffee
drinkAny("coffee"); //in this case the beverage is coffee so we do not need to change the function
//drink tea
drinkAny("tea"); //in this case the beverage is tea so we do not need to change the function

//let's make a function that will take some text and dom id and append to textContent of the dom element
function appendTextToElement(text, id) {
    //get the element with the id
    const element = document.querySelector("#" + id);
    //append the text to the element
    element.textContent += text;
}

//let's make a function that takes in a drink and returns string with the message "Drunk " + drink
function drinkAndReturn(drink) {
    return "Drank " + drink;
}
//above is the ideal function in a way that it takes some input and returns some output
//these type of functions are easier to test and debug

//let's make a function that is called drink and print
//it will add text to the element and drink the beverage
function drinkAndPrint(beverage, id) {
    //drink the beverage
    drinkAny(beverage);
    //add the text to the element
    // appendTextToElement(" Drank " + beverage, id); //note the space before Drank
    //we can use drinkAndReturn function to get the result
    appendTextToElement(drinkAndReturn(beverage), id);
    // " Drank " + beverage is single string that is passed to the function
}

//let's drink coffee and print to the element
drinkAndPrint("coffee", "function-output");



//now I can save the result!
const result = drinkAndReturn("coffee");

//we can make a function to create a greeting from two names
function createGreeting(firstName, lastName) {
    return "Hello " + firstName + " " + lastName;
}

//let's create a greeting for Fry
const fryGreeting = createGreeting("Philip", "Fry");
//let's create a greeting for Bender
const benderGreeting = createGreeting("Bender", "Rodriguez");

//let's add the greetings to the element
// appendTextToElement(fryGreeting, "function-output");
// appendTextToElement(benderGreeting, "function-output");

//so let's make a function that takes in ul element and text to be added as li
function addToList(ul, text) {
    //this function will work with unordered lists and ordered lists
    //create a new list item
    const li = document.createElement("li"); //so document is like a super global object that represents the whole page
    //set the text of the list item
    li.textContent = text;
    //at this moment my element is an orphan, it is not part of the DOM
    //append the list item to the ul
    ul.appendChild(li);
}

//so let's now add our fryGreeting and benderGreeting to the list
//get the ul element
const ul = document.querySelector("#function-list"); //now we need to know the id of the ul element

//add fryGreeting to the list
addToList(ul, fryGreeting);
//add benderGreeting to the list
addToList(ul, benderGreeting);

//lets get element by id my-ordered-list
const ol = document.querySelector("#my-ordered-list");
//lets add some other greetings to people from Futurama
addToList(ol, createGreeting("Turanga", "Leela"));
//we could have also created greeting for Hermes Conrad
const greetingHermes = createGreeting("Hermes", "Conrad");
//add greeting to the ordered list
addToList(ol, greetingHermes);
