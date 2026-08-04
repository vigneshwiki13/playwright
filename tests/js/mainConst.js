/*Create an inheritance relationship between a parent and child class. Invoke the parent constructor from the child class. 
Create main.js to call parent class methods from a child class object.
From the above code, explain how the super and these keywords help achieve the solution. */
import Person from "./personConst.js";
import Student from "./studentConst.js";

const Stud = new Student("Wiki", 29)
console.log(Stud.getStudentDetails())  // Name: Wiki, Age: 29, Grade: undefined

const Stud1 = new Student("Wiki", 29, 'O')
console.log(Stud1.getStudentDetails()) // Name: Wiki, Age: 29, Grade: O


