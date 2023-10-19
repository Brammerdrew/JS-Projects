//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}
function favoriteFoods(obj){
    for (const key in obj){
        console.log(`${key}:`)
        if (typeof obj[key] == "string"){
            console.log(obj[key])
        }
        else{
            favoriteFoods(obj[key])
        }
    }
}
favoriteFoods(person3);

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
const Person = function(name, age) {
    this.name = name;
    this.age = age;
    

    // Use an arrow to create the printInfo method

    this.printInfo = () => {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    };

    // Create another arrow function for the addAge method that takes a single parameter
    // Adding to the age 
    this.oneYearOlder = () => {
        this.age += 1;
    };
};

const person1 = new Person('Jane', 20);
const person2 = new Person('John', 30);

person1.printInfo();
person2.printInfo();

person1.oneYearOlder();
person1.oneYearOlder();
person1.oneYearOlder();

person1.printInfo();
person2.printInfo();
// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

function stringCounter(str) {
    return new Promise((resolve, reject) => {
      if (str.length > 10) {
        resolve("Big word");
      } else {
        reject("Small Number");
      }
    });
  }

let test = "12345678910"
let test2 ="123456789"

stringCounter(test)
.then(result => {
    console.log(result);
  })
  .catch(error => {
    console.log(error);
  });
stringCounter(test2)
.then(result => {
    console.log(result);
  })
  .catch(error => {
    console.log(error);
  });


// Even or Odd
function evenOrOdd(number) {
    if (number % 2 === 0) {
      return "Even";
    } else {
      return "Odd";
    }
  }

// Greet
function greet(name) {
    return "Hello, " + name + " how are you doing today?";
  }