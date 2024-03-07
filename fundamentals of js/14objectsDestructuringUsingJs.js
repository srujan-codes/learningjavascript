// *********************De-structuring Objects************************************************************************

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// to use these values,
course.courseInstructor; // gives the value of instructor i.e., "hitesh"
course.price;           // gives the value of price i.e., "999".

//const {courseInstructor} = course
//console.log(courseInstructor); // returned hitesh
// to destructure,
const {courseInstructor: instructor} = course
console.log(instructor); // returned hitesh  and here we've destructured the objects successfully
 // in future stages, if we find anything in curly braces like
 // const navbar = ({company}) instead of using props.company everytime

