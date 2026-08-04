// Basics 11. Classes and its Properties, Methods in javaScript

module.exports = class Person

{
    age = 25
    get location(){
        return "canada"
    }
// constructor is a method which executes by default when you create object of the class
    constructor(firstName, lastName){
        this.firstName = firstName
        this.lastName = lastName
    }

    fullName(){
       return (this.firstName+this.lastName)
    }
}

//   let person =new Person("Tim ","Joseph")
//   let person1= new Person("Chris ","Jonas")
//   console.log(person.age)
//   console.log(person.location)
//   person.fullName()
//   person1.fullName()
//    Person
