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