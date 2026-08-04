// Basics 10. What are JavaScript Objects?
// Object is a collecion of properties

let person = {firstName: 'Tim',
                lastName: 'Joe'
}
console.log(person.firstName)
console.log(person.lastName)

//  update the firtName
person.firstName = 'Tim Dane'
console.log(person.firstName)

// adding new value to person
person.gender = 'male'
console.log(person)

//  to delete a value
delete person.gender
console.log(person)

//  to check whether the value is present or not
console.log('gender' in person)
console.log('firstName' in person)

for (let v in person) {
    console.log(person[v])
}


let personDetails = {
    firstName: 'Vignesh ',
    lastName: 'Sivalingam',
    age: '24',
    fullName: function(){
        return this.firstName+this.lastName
},   
    nickName: function(){
        return "Viki "+"1323"
},
    address: function(){
        console.log("12 "+"2nd Street "+"Vellore")
    }

}
// console.log(personDetails.fullName)
console.log(personDetails.fullName())

console.log(personDetails.nickName())

personDetails.address()

