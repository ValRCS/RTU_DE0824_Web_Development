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
function addCarToList(car, listId, index) {
    const list = document.getElementById(listId); //get the list element
    const item = document.createElement("li"); //create a new list item
    // item.innerHTML = car.name + " - " + car.color; //set the innerHTML of the list item
    //if possible avoid innerHTML because it can be a security risk
    //so we will use textContent instead
    // item.textContent = "Maker: " + car.name + " Model: " + car.model + " colored -> " + car.color; //set the textContent of the list item
    //above works but we have backticks so we can use template literals
    item.textContent = `Maker: ${car.name} Model: ${car.model} colored -> ${car.color}`; //same as above but using template literals
    //we use backticks and ${} to insert variables into the string

    //now let's use color as background color of the list item
    item.style.backgroundColor = car.color; //set the background color of the list item

    //let's add index as id of the list item
    item.id = "car" + index; //set the id of the list item
    
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
cars.push({ name: "Toyota", model: "Avensis", color: "blue", licencePlate: "VS-5555" });
//so we push the car object into the array and it is saved there for the duration of the page

//now we call the function to add the car to the list
addCarToList(cars[0], "object-list", 0); //we know there is at least one car in the array we use the first one

//let's make a function for list item click
//for now we will just console log the id of the list item
function listItemClicked(event) {
    console.log("List item clicked ->", event.target.id);
    //let's get color value of the list item
    console.log("List item color ->", event.target.style.backgroundColor);
    //not very elegant but we can get car number from id by getting all characters after "car"
    //this is a bit of a hack but it works
    const carNumber = event.target.id.substring(3);
    //now we can get the car object from the array
    console.log("Car object ->", cars[carNumber]);
    //now we can check the color of the car object with background color of the list item
    //if it matches we turn it to transparent
    //if it does not match we turn it to the color of the car object
    console.log("Car color ->", cars[carNumber].color);
    console.log("List item color ->", event.target.style.backgroundColor);
    //TODO convert colors to same format before comparing
    const carColor = cars[carNumber].color;
    const listItemColor = event.target.style.backgroundColor; 
    //TODO how to compare colors in different formats
    
    if (event.target.style.backgroundColor == cars[carNumber].color) {
        event.target.style.backgroundColor = "gray";
        console.log("Turning Gray");
    } else {
        event.target.style.backgroundColor = cars[carNumber].color;
        console.log("Turning colored");
    }

}


//now we will create a function that will be called when the button is clicked
//this function will read the input fields
//create a new car object
//add it to the array
//and then call the function to add it to the list
function addCar() {
    const carName = document.getElementById("car-input-field").value; //get the value of the input field
    const carModel = document.getElementById("car-model-field").value; //get the value of the input field
    //lets get colorValue from color picker from <input type="color" id="car-color-picker" value="#ff00ff">
    const carColorPicker = document.getElementById("car-color-picker").value; //get the value of the input field
    const carObject = { name: carName, model: carModel, color:carColorPicker }; //create a new car object

    // cars.push({ name: carName, color: carColor }); //push the car object into the array
    //above works but let's use the carObject we created
    cars.push(carObject); //push the car object into the array

    // addCarToList(cars[cars.length - 1], "object-list"); //add the last car in the array to the list
    //above works but let's use the carObject we created
    //we also need the index of the car in the array which is cars.length - 1, becauseof 0 based index
    const index = cars.length - 1;
    addCarToList(carObject, "object-list", index); //add the last car in the array to the list

    //let's add an event listener to the list item
    //so when a list item is clicked, we will call a function
    //that will console log the id of the list item

    const carElement = document.getElementById("car" + index); //get the list item element
    carElement.addEventListener("click", listItemClicked); //add an event listener to the list item


}

//finally I need to add an event listener to the button
//to call the function when the button is clicked
document.getElementById("add-car-button").addEventListener("click", addCar);

//we have two more buttons
//        <button id="remove-car-button">Remove car</button>
// <button id="remove-all-button">Remove ALL</button>

//let's create a function that removes the last car from the array
//and then calls the function to remove the last car from the list
function removeCar() {
    cars.pop(); //remove the last car from the array //TODO add check if array is empty
    document.getElementById("object-list").lastElementChild.remove(); //remove the last car from the list
    //so we do need to know the object-list id to remove the last element
    //i could save this element that is removed and then move it somewhere else
}

//now we need to add an event listener to the remove button
document.getElementById("remove-car-button").addEventListener("click", removeCar);


//now let's do a remove all function
//this function will remove all cars from the array
//we simply need to know how many cars are in the array
//then we call the remove function that many times in a loop
function removeAll() {
    const numberOfCars = cars.length; //get the number of cars in the array
    for (let i = 0; i < numberOfCars; i++) { //loop over all cars
        removeCar(); //call the remove function
    }
}

//now let's add the event listener to the remove all button
document.getElementById("remove-all-button").addEventListener("click", removeAll);