const course ={
    courseName: "JS in hindi",
    price: "999",
    courseInstructor: "Hitesh"
}

const {courseInstructor} =course
console.log(courseInstructor);

const {courseInstructor : intsructor} =course
console.log(intsructor);