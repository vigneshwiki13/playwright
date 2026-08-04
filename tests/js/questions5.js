/**A classic programming interview question that involves using array methods (filter, map, reduce), and JavaScript objects. */

/**Create an array of objects representing students with their names and scores, and get the below
 * result with optimized solution.
 * 1.  filter out the students who passed in the exam with score more than 36
 * 2.  update passed students name to uppercase
 * 3.  total score of passing students
 */

const students = [{name: "abishek", score: 25},
    {name: "bala", score: 35},
    {name: "carolin", score: 45},
    {name: "delulu", score: 55},
    {name: "elisa", score: 65}
]

let passedStudents = students.filter(stud=>stud.score>=36)
console.log([passedStudents])

let uppercaseNames = passedStudents.map(stud=> stud.name.toUpperCase())
console.log(uppercaseNames)

let totalMarks = passedStudents.reduce((initialMarks,presentMark)=>initialMarks=initialMarks+presentMark.score,0)
console.log(totalMarks)

let total = passedStudents.reduce(function(initial,final){
    initial = initial + final.score
    return initial;
},0)
console.log(total)