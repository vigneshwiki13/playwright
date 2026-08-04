// Basics 7.  Functions in JavaScript
console.log("====================Basics 7.  Functions in JavaScript==================")
function add(a,b){
    return a+b
}
let sum = add(2,3)
console.log("Normal Function: "+sum)

// when have no name-> anonymous function
let sumOfNumbers = (c,d)=>c+d
console.log("Anonymous Function: "+sumOfNumbers(2,3))

// Basics 8.  Understanding var, let, Const keyword in JS
//  var
console.log("====================Basics 8.  Understanding var, let, Const keyword in JS==================")
console.log("-----Var-----")
if(1==1){
    var greet 
}
console.log("uninitialized var at local: "+greet)

if(1==1){
    var greet = "Morning"
}
console.log("initialized var at local: "+greet)

var greet = "Evening"
console.log("initialized var at class level before redeclaring: "+greet)
if(1==1){
    var greet = "Afternoon"
}
console.log("initialized var at class level after redeclaring: "+greet)

var greeting
console.log("uninitialized var at class level before redeclaring: "+greeting)
if(1==1){
    var greeting = "Afternoon"
}
console.log("initialized var at class level after redeclaring: "+greeting)

console.log("-----Let-----")
let greetings ="Evening"
if(1==1){
    let greetings = "Afternoon"
}
console.log(greetings)
if(1==1){
     greetings = "Afternoon"
}
console.log(greetings)

/* let and var cant be declared with same name
let number = 21
console.log(number)
var number = 21
console.log(number)
*/

console.log("-----Const-----")
const value = "Evening"
value="Morning"
console.log(value)