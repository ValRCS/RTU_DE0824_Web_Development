console.log("Day 14 - Object, DOM Element manipulation, Event target identification");

//Object creation
//we use curly braces to create an object
let person = {
    name: "John", // key-value pair //note that key does not require quotes
    age: 30,
    city: "New York"
};

console.log(person);

//often we create a list of objects
//we use square brackets to create an array
//so let's start with Alice and go until David
let people = [
    {
        name: "Alice",
        age: 25,
        city: "Toronto",
        hobbies: ["reading", "cooking", "swimming"]
    },
    {
        name: "Bob",
        age: 35,
        city: "Montreal",
        //so location key points to another object and so on
        location: {
            latitude: 45.5,
            longitude: 73.5
        }
    },
    {
        name: "Charlie",
        age: 45,
        city: "Vancouver"
    },
    {
        name: "David",
        age: 55,
        city: "Calgary"
    }
];

console.log(people); //so we will have a list(array) of people
//and each element in the array is an object
//we can go deeper and have an array of objects in an object
//objects can have values other objects, arrays, functions, etc.

//so objects combined with arrays create practically unlimited possibilities
//so you can model your real life data in a program

//so how would I get 2nd hobby of Alice?
console.log("First person's 2nd hobby ->", people[0].hobbies[1]); //so we get the 2nd hobby of Alice
//1 because we use 0 based index

//how would I get the latitude of Bob?

console.log("Second person's latitude ->", people[1].location.latitude);

//it is very common to see these multiple dots in programming in JavaScript
//this means that we are going deeper into the object 
// and accessing its properties which are also objects

//how about accessing something that does not exist?
//how about location of Charlie?
console.log("Third person's location ->", people[2].location); //undefined

//so what happens if we call a property that does not exist?
//how about getting latitude of Charlie's non existent location?
// console.log("Third person's latitude ->", people[2].location.latitude); //error
//it is an error because accessing property from undefined is not allowed

//so how do we prevent this error?
//we use if statement to check if the property exists
if (people[2].location) { //there are other ways to check if a property exists
    console.log("Third person's latitude ->", people[2].location.latitude);
} else {
    console.log("Third person does not have a location");
}

//we have the following elements in our html page
//        <input type="text" id="car-input-field" placeholder="Enter a car name">
// <input type="text" id="car-color-field" placeholder="Enter a car color">
// <button id="add-car-button">Add car</button>
// we also have         <ol id="object-list">
//where we want to display the cars and their colors

//we will use a global array to store the cars
//each car will be an object with name and color properties

//we will need to create a function that will be called when the button is clicked

//this function will read both input fields
//create a new car object
//add it to the array
//and then we will have a function that takes and object and id of the list and adds it to the list

let cars = []; //this is our global array to store the cars so this page will have this array as global variable

//first let's create a function that adds a car to the list using id of the list
function addCarToList(car, listId) {
    const list = document.getElementById(listId); //get the list element
    const item = document.createElement("li"); //create a new list item
    // item.innerHTML = car.name + " - " + car.color; //set the innerHTML of the list item
    //if possible avoid innerHTML because it can be a security risk
    //so we will use textContent instead
    item.textContent = "Maker -> " + car.name + " colored -> " + car.color; //set the textContent of the list item
    list.appendChild(item); //add the list item to the list
}

//let's test it with some car
// addCarToList({ name: "Toyota", color: "blue", licencePlate: "VS-5555" }, "object-list");
//note how I am making an object on the fly and passing it to the 
//I added an extra property to the object and it still works, the extra property is ignored
//this is quite common in JavaScript

//above works but let'' first insert the car object into the array
//and then call the function to add it to the list
//this is the correct way to do it
cars.push({ name: "Toyota", color: "blue", licencePlate: "VS-5555" });
//so we push the car object into the array and it is saved there for the duration of the page

//now we call the function to add the car to the list
addCarToList(cars[0], "object-list"); //we know there is at least one car in the array we use the first one

//now we will create a function that will be called when the button is clicked
//this function will read the input fields
//create a new car object
//add it to the array
//and then call the function to add it to the list
function addCar() {
    const carName = document.getElementById("car-input-field").value; //get the value of the input field
    const carColor = document.getElementById("car-color-field").value; //get the value of the input field
    const carObject = { name: carName, color: carColor }; //create a new car object

    // cars.push({ name: carName, color: carColor }); //push the car object into the array
    //above works but let's use the carObject we created
    cars.push(carObject); //push the car object into the array

    // addCarToList(cars[cars.length - 1], "object-list"); //add the last car in the array to the list
    //above works but let's use the carObject we created
    addCarToList(carObject, "object-list"); //add the last car in the array to the list
}

//finally I need to add an event listener to the button
//to call the function when the button is clicked
document.getElementById("add-car-button").addEventListener("click", addCar);
