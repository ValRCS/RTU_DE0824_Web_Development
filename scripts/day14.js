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