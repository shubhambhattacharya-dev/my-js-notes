//cntel + d to select all the same word
//ctrl + shift + L to select all the same word

//object is a collection of key value pairs
//key is a string
//value can be anything
//key value pairs are separated by : and each key value pair is separated by ,
//object is enclosed in {}
//object is mutable
//object is unordered
//object can be nested
//object can be accessed by key
//object can be accessed by dot notation
//object can be accessed by bracket notation
//object can be accessed by for in loop
//object can be accessed by Object.keys()
//object can be accessed by Object.values()
//object can be accessed by Object.entries()

const  userName = {
    firstName:"shubham",
    isLoggedIn: false,
    age:19,
   


}; //whole considered as one memory location

console.log(userName);
console.log(typeof(userName));

//behind the scene:
//when you create an object, it is stored in memory as a reference
//key behaves as a variable and value behaves as a value
//if i use const keyword, i can't change the reference but i can change the value of key
//if i use let keyword, i can change the reference and i can change the value of key

//dot notation
console.log(userName.firstName);
//now we are accessing the value of key firstName
userName.firstName = "manish";
console.log(userName.firstName);
//you are not changing the memory reference, you are changing the value of key

//even you can add new key value pair
userName.lastName ="Bhattacharya";
console.log(userName);
console.log(userName.lastName);

//bracket notation
//when your key has space or special character, you can't use dot notation

console.log(userName["lastName"]);

//inbuilt object methods
//Object.keys() returns the keys of the object in an array
console.log(Object.keys(userName));

//Object.values() returns the values of the object in an array
console.log(Object.values(userName));

//new date object

let today = new Date();
console.log(today.getDate());
