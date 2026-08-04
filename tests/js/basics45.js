// Basics 4.  Loops and Conditions in JS
const flag = true
// ifelse
console.log("ifelse")
if (! flag) {
    console.log("If condition satisfied")
} else {
    console.log(flag)
    console.log("Condition not satisfied")
}

//  While
console.log("While")
let i = 0
while (i<10) {
    i++
    console.log(i)
}
while(!true){
    console.log("Hello")  // go infinite if true
}
let required = true
while (required) {
    console.log("Required: "+required)
    required=false
}

// DoWhile
console.log("DoWhile")
let j = 1
do {
     j++
    console.log("Do While: "+j)
} while (j>10);


do {
    console.log("Do while")
} while (!true);

// for loop
console.log("ForLoop")
for(let k = 0; k<=10;k++){
    console.log(k)
}


//  we can pass a condition in for loop too
console.log("we can pass a condition in for loop too")
let required1 =true
for(let k=0; required1; k++){
    console.log(k)
    required1= false
}

//  common multiples of 2 & 5 upto 10
console.log("common multiples of 2 & 5 upto 100")
for(let k =1; k<= 100; k++){
if(k%2==0 && k%5==0){
    console.log(k)
}

}

//  common multiples of 2 & 5 upto 100 & pick 1st 3 values only
console.log("common multiples of 2 & 5 upto 100 & pick 1st 3 values only")
let count=0
for(let k =1; k<= 100; k++){
if(k%2==0 && k%5==0){
    count++
    console.log(k)
  if(count==3){
        break
    } 
} 
}

console.log("common multiples of 2 or 5 upto 100 & pick 1st 3 values only")
let count1=0
for(let k =1; k<= 100; k++){
if(k%2==0 || k%5==0){
    count1++
    console.log(k)
  if(count1==3){
        break
    } 
} 
}