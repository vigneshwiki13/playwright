var expenses = new Array(20,40,35,12,37);
let sum = expenses.reduce((sum,expenses)=>sum+expenses,0)
console.log(sum)

let ascending = expenses.sort((a,b)=>a-b);
console.log(ascending)
console.log(ascending[0])
console.log(ascending[ascending.length-1])

class ApiUtils {
    // No 'function' keyword needed! 
    // JavaScript already knows this is a method because it's inside a class.
    getToken() {
        console.log("I am a method inside a class");
    }
}
let api = new ApiUtils()
api.getToken()