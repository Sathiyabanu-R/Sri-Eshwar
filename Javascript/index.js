//Array  --> It is used to store a sequential collection of multiple elements of same or different data types
const arr = [10, 40, 50, 60, 80, 90];
console.log(arr);
console.log(arr[1]);
console.log(arr.length);
arr.push(56);   // Pushing an element
console.log(arr);
arr[0]=100; //Updating an array element
console.log(arr);
for(let i=0;i<arr.length;i++){   //Traversing an array
  console.log(arr[i]);
}

// Date
const date=new Date();  
console.log(date);  // return the current date

// String --> sequence of characters containing 0 or more characters
// It is a case sensitive. It is immutable.
const str1 = new String("Welcome!");
console.log(str1);
let str2 = "Aspire";
console.log(str1[0]);  //Acessing a character
console.log(str2[2]);
let str="S";    
let str3="s";
console.log(str==str3);
str = "Hi";   // updating the string
console.log(str);


// Set -->  Set object is a collection of unique values.
let set = new Set();
set.add(10);
set.add(20);
set.add(30);
set.add(40);
set.add(50);
console.log(set);
console.log(set.has(50));
console.log(set.has(60));
console.log(set.values());
console.log(set.delete(50));

// Map --> collection of key-value pairs where the keys can be of any type, including objects or functions.

const map=new Map();
map.set("Grapes",10);
map.set("Apple",20);
map.set("Orange",30);
map.set("Mango",40);
map.set("Watermelon",50);
console.log(map);
console.log(map.keys());
console.log(map.values());
console.log(map.entries());
console.log(map.delete("Grapes"));
console.log(map.size);

//function
function First() {
    console.log("Welcome");
} 
function Second() {
    console.log("To Aspire");
} 
First();
Second();

// add two numbers using function
function add(a,b){
  return a+b
}
var addition=add(5,15);
console.log(addition)

// anonymous function
var sub=function (a,b){
  return a-b
}
var subtraction=sub(15,9);
console.log(subtraction)

//arrow function
var mul=(a,b)=> a*b;
var multiply=mul(5,5);
console.log(multiply)

//callback function
function first(third){
 console.log("hello")
 third();
}
function second(){
   console.log("welcome to learn callback function")
}
first(second)

