let studentProfile = {
  name: "John", // < Property ที่มี Value เป็น String ที่เก็บชื่อของนักเรียน
  age: 20, // < Property ที่มี Value เป็น Number ที่เก็บอายุของนักเรียน
  scores: { // <  Property ที่มี Value เป็น Object ที่คะแนนในแต่ละวิชาของนักเรียนในรูปแบบ Key - Value
    thai: 40 },
  hobbies: ["Football", "Coding"],
 
};

let additionalHobbies = ["Painting", "Yoga"];

// Start coding here
let newStudentProfile = { 
  ...studentProfile, hobbies: [...studentProfile.hobbies,...additionalHobbies]
}

console.log(newStudentProfile);
