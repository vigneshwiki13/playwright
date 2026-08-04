// Basics 6.  Array and its methods

//  declaring array
var marks = Array(6)
console.log("Length of Array: "+marks.length)

// assigning the values
var marks=[20,40,35,12,37,100]

// getting value from array
let a= marks[2]
console.log("2nd Index of array: "+a)
console.log("2nd Index of array: "+marks[2])

//  Assiging a value for specific existing index
marks[3]=14
console.log("3rd index changed from 12 to 14: "+marks)

//  adding a new value on last of array
marks.push(65)
console.log("marks after push: "+marks)
console.log("Length after push: "+marks.length)

// deleting the last value of array
marks.pop()
console.log("marks after pop: "+marks)
console.log("Length after pop: "+marks.length)

// adding value on 0th index of array
marks.unshift(12)
console.log("marks after unshift: "+marks)
console.log("Length after unshift: "+marks.length)

//  to grab the index of specific value
let indexOf = marks.indexOf(100)
console.log("index Of 100: "+indexOf)

//  to check a specific value is present in the array or not
let include = marks.includes(350)
console.log("value present or not: "+include)

//  to grab set of values inbetween the array
let slice = marks.slice(2,6)
console.log("value present inbetween the Array: "+slice)

// Sum of numbers in Array
let sum=0;
for(let i = 0; i<slice.length;i++){
    sum = sum+slice[i];    
}
//  Reduce in array
console.log("Sum of numbers after slice: "+sum)
let total = slice.reduce((add,mark)=> add+mark,0)
console.log(total)

// filter the even numbers in scores
let scores=[11,12,13,14,15,16,17,18,19,20]
console.log(scores)
let evenScores=[]
console.log("Type of evenScore: "+typeof(evenScores))
for(let i=0; i<scores.length; i++){
    if(scores[i]%2==0){
        evenScores.push(scores[i])
    }
}
console.log("Even number in Scores: "+evenScores)
// Filter in Array
let filterEvenScores= scores.filter(score=>score%2==0)
console.log("Even number in Scores: "+filterEvenScores)

//  map-> doing operations that are common to all in the array
let mappedArray = filterEvenScores.map(value=>value*3)
console.log("All values multiplied by 3: "+mappedArray)

let newTotal = mappedArray.reduce((initialValue,singleArrayValue)=>initialValue+singleArrayValue,0)
console.log("sum of even mapped numbers: "+newTotal)

// ============================================================================================
/* Reduce filter map in single line*/
let sumValue= scores.filter(scores=>scores%2==0).map((initial=>initial*3)).reduce((start,single)=>start+single,0)
console.log("Reduce filter map in single line: "+sumValue)

//  ascending order
let fruits=["banana","mango","cherry","dragonFruit", "pomegranete","apple"]
console.log(fruits)
fruits.sort();
console.log(fruits)

// just sort wont work for numbers in all situation
let number=["1","9","7","0", "004","12"]
console.log(number)
number.sort();
console.log(number)

// number.sort(function(a,b){
//     return(a-b)
// })
console.log(number.sort((a,b)=>a-b))


// descending order or reverse
console.log("Descending order: "+fruits.reverse())
console.log("Descending order: "+number.sort((a,b)=>b-a))
