/** Can a javascript object hold a function as a property?  Explain with an example */
const person = {
    name : "Jhon",
    age : 29,
    greet : function(){         // anonymous funciton within js object
        console.log("Hello, Iam "+this.name)
    }

}
/* What are anonymous functions in js? explain with syntax*/
console.log(person.name)
console.log(person.greet) // function must use ()
console.log(person.greet())  // gives undefined 
person.greet()  // gives without undefined, use return statement for functions

function sayHello(){        // general funciton
    return "Hello, iam the world";
    }
 console.log(sayHello())   

 const hello = sayHello();
 console.log(hello)

 const anonymousFunciton = function(name){      //anonymous function
    return "Hello wiki "+name;
 }
 console.log(anonymousFunciton("Vignesh"))
console.log(anonymousFunciton(29))

// what is the difference between var, let and const? explain with examples??
 // var is function scoped or globally scoped and can be redeclared and updated
 // if we wont declare any, it will consider as var,  even if it is declared inside only on block
 // or in function level, we can use it on any of the place in the page

 // if var is declared with x variable and let is declared with x variable inside method, let get priority
    function varExample(){
        var x =1;
        if(true){
            var x =2;
            console.log(x);
        }
        var x =3;
        console.log(x);
    }
    console.log(varExample())

    //let is block scoped and can be updated but not re declared within the same scope
console.log("example let ");
    function varExample2(){
        let x = 2;
        if(true){
                let x = 25;
                x = 20
                y=90
                console.log(x);  //20
                console.log(y);  //90
        }
        console.log(x); //2
            console.log(y);  //90

    }
    console.log(varExample2())
    console.log(y);  //90


//  const is block-scoped and cannot be updated or re-declared
console.log("const example")
function varExample3(){

    const x= 1;
    if(true){
        const y=2;
        console.log(y);   //2
    }
    // x=3;
    console.log(x)  //1
 console.log(y);  //90
}
varExample3()


var z=25;
if(true){
let z = 20;
console.log(z)
}
// const z = 30;
  // identifier z already declared
// if with same variable name var, let, and const declared.  error at running