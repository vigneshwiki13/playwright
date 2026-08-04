//  define the parent

class Person{
    constructor(name, age){
        this.name = name;
        this.age =age;
        console.log("Inside the person constructor")
    }
    getDetails(){
        return   `Name: ${this.name}, Age: ${this.age}`
    }



}
export default Person