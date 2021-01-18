/* 
Create a function named organizeInstructors that will receive an array of instructor objects, and will return a new object that has the following format:

{
  CourseName: [instructors]
} 
*/

const organizeInstructors = function(instructors) {
  let output = {};
  for (let i = 0; i <= instructors.length; i++){
    let course = instructors[i].course;
    if (course in output) {
      output[course].push(instructors[i].name);
    } else {
      output[course] = [instructors[i].name];
    }   
  }
  return output;
};


console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));