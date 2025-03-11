//array is a collection of values of same or different data types stored in a single variable and continous memory location 
//array is mutable
//array is ordered
//array can be accessed by index strarting from 0 
//array can be accessed by for of loop  
//array can be accessed by for each loop
//array can be accessed by map method
//array can be accessed by filter method   

let hero = ["superman","batman","spiderman","ironman","thor",true,19];
//array can be indentified by square brackets []

//if you want to access the array, you can use index
console.log(hero[0]);

//difference between object and array-

//type conversion
//object to array

console.log(1 + '1');
//implicit type conversion is happening here
//what is implicit type conversion?
//when you are adding a number and a string, javascript converts the number to string and then concatenates the two strings

console.log('1' + 1);

let isValue = true;
console.log(isValue + 1);

//why is it happening?
//because javascript is a loosely typed language
//here js is count true as 1 and false as 0 
//so true + 1 = 1 + 1 = 2
//what is loosely typed language?
//in loosely typed language, you don't have to specify the data type of the variable while declaring it 

let isValue1 = "3jnjhbh";
console.log(typeof(isValue1));

//what is NaN?
//NaN stands for Not a Number
//NaN is a property of the global object
//NaN is the return value of parseInt when it is passed a string that can't be converted into a number
//NaN is a data type of its own
//NaN is a number
//NaN is a falsy value
//NaN is a property of the global object
//NaN is a global object
//NaN is a primitive value
//NaN is a unique value
//NaN is not equal to anything including NaN
//NaN is not equal to itself
//NaN is a number
//NaN is a falsy value

console.log(Number(null));
console.log(Number(undefined));
console.log(Number(true));
console.log(Number(false));

//what is truthy value?
//truthy value is a value that is considered true when encountered in a boolean context
//all values are truthy unless they are defined as falsy
//what is falsy value?
//falsy value is a value that is considered false when encountered in a boolean context
//there are only six falsy values in javascript
//false
//0
//null
//undefined
//NaN
//""
