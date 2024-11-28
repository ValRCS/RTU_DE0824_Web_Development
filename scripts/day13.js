//let's explore Javascript arrays
// Arrays are for storing multiple values in a single variable
console.log("Arrays");

//let's create an array of cars
const cars = ["BMW", "Audi", "Mercedes", "Toyota", "Ford"];
console.log(cars);
//how many cars
console.log("Number of cars", cars.length);

//let's print the first car in the array
console.log("First Car", cars[0]);


//how about last? This recipe guarantees that you will always get the last element of the array
console.log("Last Car", cars[cars.length - 1]); //Python has easy way to get last element, but in JS we have to do this way

//I will reusue function from last week to add elements to the list element
//so let's make a function that takes in ul element and text to be added as li
function addToList(ul, text, myclass="") {
    //this function will work with unordered lists and ordered lists
    //create a new list item
    const li = document.createElement("li"); //so document is like a super global object that represents the whole page
    //set the text of the list item
    li.textContent = text;
    //add class to the list item if it is provided
    if (myclass) { //so we check that we provided a class
        li.classList.add(myclass);
    }

    //at this moment my element is an orphan, it is not part of the DOM
    //append the list item to the ul
    ul.appendChild(li);
}

// //let's get the list element
// const list_el = document.querySelector("#array-list"); //# because it is an id

// //let's add the cars to the list
// //we will loop/iterate through the array and add each car to the list
// //note the use of cars.length to limit the loop
// //we loop as long as i is less than the length of the array
// //i++ increments the value of i by 1
// for (let i = 0; i < cars.length; i++) {
//     console.log("Car", cars[i]);
//     // addToList(list_el, cars[i], "car");
//     //instead of adding a fixed car class let's add a class that is based on index
//     //so even car and odd car will have different styles
//     //we can use the remainder operator % to check if the number is even or odd
//     if (i % 2 === 0) {
//         addToList(list_el, cars[i], "even-car");
//     } else {
//         addToList(list_el, cars[i], "odd-car");
//     }
// }

//let's create a addCars function that will be called when the page is loaded
function addCars() {
    //let's get the list element
    const list_el = document.querySelector("#array-list"); //# because it is an id

    //let's add the cars to the list
    //we will loop/iterate through the array and add each car to the list
    //note the use of cars.length to limit the loop
    //we loop as long as i is less than the length of the array
    //i++ increments the value of i by 1
    for (let i = 0; i < cars.length; i++) {
        console.log("Car", cars[i]);
        // addToList(list_el, cars[i], "car");
        //instead of adding a fixed car class let's add a class that is based on index
        //so even car and odd car will have different styles
        //we can use the remainder operator % to check if the number is even or odd
        if (i % 2 === 0) {
            addToList(list_el, cars[i], "even-car");
        } else {
            addToList(list_el, cars[i], "odd-car");
        }
    }
}

//now I will add it DOM content loaded event listener
// document.addEventListener("DOMContentLoaded", addCars);
//for most things above is fine, but for images and other resources it might not work because they will not be loaded

//instead lets do it when window is loaded
window.addEventListener("load", addCars);

//let's find add-car-button
const add_car_button = document.querySelector("#add-car-button");

//let's make a function that will be called when add-car-button is clicked
function addCar() {
    console.log("Add Car fired");
    //get the input element
    const input_el = document.querySelector("#car-input-field");
    //get the value of the input element
    const car = input_el.value;
    console.log("Will add Car", car);
    //add the car to the array
    cars.push(car);
    //get the list element
    const list_el = document.querySelector("#array-list");
    //add the car to the list
    // addToList(list_el, car, "new-car"); // we need to add odd even check
    //lets get the index of the car
    const index = cars.length - 1; //it is the last car we pushed to the array at the end
    //check if the index is even or odd
    if (index % 2 === 0) {
        addToList(list_el, car, "even-car");
    } else {
        addToList(list_el, car, "odd-car");
    }
}

//add event listener to the add-car-button
add_car_button.addEventListener("click", addCar); //note again addCar is a function we pass a reference to it

//let's create a function that will print to console the current value of the input field
function printInputValue() {
    //get the input element
    const input_el = document.querySelector("#car-input-field");
    //get the value of the input element
    const car = input_el.value;
    console.log("Input Value", car);
}

//lets make it fire each time the input field changes
//get the input element
const input_el = document.querySelector("#car-input-field");
//add event listener to the input field
//we will listen to the input event
//this event is fired each time the value of the input field changes
input_el.addEventListener("input", printInputValue);

//there is another event that is fired when value is changed and input field loses focus
//it is called change
//let's make a function to print the value when it changes
function printChangedValue() {
    //get the input element
    const input_el = document.querySelector("#car-input-field");
    //get the value of the input element
    const car = input_el.value;
    console.log("Input Value Changed", car);
}

input_el.addEventListener("change", printChangedValue);
//so change will only fire when we go out of the input field or press enter

//we have a button with clear-all-button id 
//let's add event listener to it that will clear the input field and also ALL cars from the list
//we will keep the array of cars, but we will remove all cars from the list element

//get the clear-all-button
const clear_all_button = document.querySelector("#clear-all-button");

//let's make a function that will clear the input field and all cars from the list
function clearAll() {
    console.log("Clear All fired");
    //get the input element
    const input_el = document.querySelector("#car-input-field");
    //clear the input field
    input_el.value = "";
    //get the list element
    const list_el = document.querySelector("#array-list");
    //clear the list element
    list_el.innerHTML = ""; //this will remove all children of the list element
    //quick and dirty
    //for more complex removals we would use removeChild
}

//add event listener to the clear-all-button
clear_all_button.addEventListener("click", clearAll);

//finally we have rebuild-all-button that will clear the list and add all cars again
//get the rebuild-all-button
const rebuild_all_button = document.querySelector("#rebuild-all-button");

//let's make a function that will clear the list and add all cars again
function rebuildAll() {
    console.log("Rebuild All fired");
    //get the list element
    const list_el = document.querySelector("#array-list");
    //clear the list element
    list_el.innerHTML = ""; //this will remove all children of the list element
    //we could have called clearAll() here but this is more efficient
    //add all cars again
    addCars();
}

//we do need to add the event listener to the rebuild-all-button
rebuild_all_button.addEventListener("click", rebuildAll);