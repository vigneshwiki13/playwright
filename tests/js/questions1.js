/* What are the push, pop, slice, shift and unshift methods used when accessing array element? */

const fruits = ["Apple", "banana", "cherry", "dates"];
console.log(fruits)   //  ["Apple", "banana", "cherry", "dates"]
console.log(fruits[4])  //undefined
// Push-  to add at last
fruits.push("blackberry");
console.log(fruits[4])  //blackberry

// Pop- to del. last
fruits.pop();
console.log(fruits[4]) // undefined
console.log(fruits) //["Apple", "banana", "cherry", "dates"]

// Shift- to del. first
fruits.shift();
console.log(fruits)   //[ 'banana', 'cherry', 'dates' ]

// Unshift-  to add at first
fruits.unshift("Oranges")
console.log(fruits)   // [ 'Oranges', 'banana', 'cherry', 'dates' ]


// What is the difference between slice and splice?
// slice used to del. element in array slice create a new array must declare
// splice edit the original for both add and del a specific element at specific index

//  splice - del. element by index
const slicedFruit = fruits.slice(1, 2);
console.log(slicedFruit) //[ 'banana' ]

fruits.splice(1, 1)
console.log(fruits) //[ 'Oranges', 'cherry', 'dates' ]

fruits.splice(1, 2)
console.log(fruits)  //[ 'Oranges' ]

fruits.splice(0,0,"waterMelon")
console.log(fruits)  ///[ 'waterMelon', 'Oranges' ]  0,0 -> added watermelon without del. orange

fruits.splice(0,2,"jackfruit")
console.log(fruits)  //[ 'jackfruit']  0,2 -> added jackfruit with del. watermelon
//  0,1,"Blue"-->  0 index position,  1 delete position start from index
var colors= ["yellow", "Green", "Orange", "Pink", "Red"]
console.log(colors)
colors.splice(2,2,"Blue")
console.log(colors)

//  iterate over array foreach
colors.forEach((color,index)=>{
    console.log(`${index}: ${color}`)  // use backticks Not single or double quotes
    // Backticks (Template Literals)  tells JavaScript: "Hey, this is a special string that can evaluate code inside of it."
    // ${}, it pauses, looks inside the curly braces, runs that code, and embeds the result directly into the string.

})  

fruits.forEach((fruit, index)=> {
    console.log(index+" : "+fruit)
});

// Javascript is asynchronous.  explain with syntax
console.log("Hi everyone 1");
console.log("Hi everyone 2");
console.log("Hi everyone 3");
// setTimeout(function()
// {   
// console.log("Hi everyone 4");
// }, 2000)
setTimeout(() => {
    console.log("Hi everyone 4");
}, 2000);
console.log("Hi everyone 5");
