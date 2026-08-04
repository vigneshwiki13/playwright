// Basics 9.  String and its related functions in JS
console.log("====================Basics 9.  String and its related functions in JS==================")
let day ='Tuesday#Wednesday#Thursday'
console.log("String: "+day)
console.log("Length: "+day.length)
console.log("sliced: "+day.slice(0,4))
console.log("Char in index 1: "+day[1])

let splitDay= day.split("#")
console.log("First split: "+splitDay[0])
console.log("Second split: "+splitDay[1])
console.log("third split: "+splitDay[2])
console.log("Not presented split: "+splitDay[3])

let date = "23"
let nextDate ="27"
let diff = nextDate-date
console.log(diff)
// to convert into number
let difference = parseInt(nextDate)- parseInt(date)
console.log(difference)
let value ="13"
console.log("typeof '13': "+typeof(value))
value =parseInt(value)
console.log("typeof '13' after parseInt: "+typeof(value))
// NaN
let s = "99"
s = parseInt(s)
console.log(s)

let ans= Number.isNaN(s);        // true
console.log(ans)
let ans1= Number.isNaN("99");    // false (safely checks type first)
console.log(ans1)

//  to convert to string
let n=true
console.log("Type of n=25: "+typeof(n)+" "+n)
toString(n)
// n=n.toString()
console.log("Type of n=25 after toString: "+typeof(n)+" "+n)
// concat
let Quote = "Sunday"
console.log(Quote)
Quote = Quote+" is funday"
console.log(Quote)

//  index od string
let newQuote="Sunday is Funday day"
let firstIndexOfDayInNewQuote = newQuote.indexOf("day")
console.log("firstIndexOfDayInNewQuote: "+firstIndexOfDayInNewQuote)

let SecondIndexOfDayInNewQuote = newQuote.indexOf("day",firstIndexOfDayInNewQuote+1)
console.log("SecondIndexOfDayInNewQuote: "+SecondIndexOfDayInNewQuote)

let thirdIndexOfDayInNewQuote = newQuote.indexOf("day",SecondIndexOfDayInNewQuote+1)
console.log("thirdIndexOfDayInNewQuote: "+thirdIndexOfDayInNewQuote)

//  To check specific string present or not
let checkMoonsIndex = newQuote.indexOf("moon")
console.log(checkMoonsIndex)

// count of the specific string
let dayIndex = newQuote.indexOf("day")
let count = 0
while (dayIndex!==-1) {
    count++
    dayIndex = newQuote.indexOf("day",dayIndex+1)
    
} 
console.log("Count of day in newQuote: "+count)

let a="25"
let b="Kumar"
let c=(a,b)=>a+b
console.log(c("ram","Kumar"))
console.log(c(a,b))