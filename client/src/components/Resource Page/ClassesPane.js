import React from "react";
import ClassPane from "./ClassPane/ClassPane";

const CoursesList = ["Abhishek Khilwani", "Other Instructors"];

export default function ClassesPane() {
  
  const courseTypes = [
    { title: "SCMPE" },
    { title: "FINANCIAL REPORTING" },
    { title: "SFM" },
    { title: "LAW" },
    { title: "FOUNDATION" },
    { title: "INTERMEDIATE" },
    { title: "FINAL" },
    { title: "AUDIT" }
  ];

  return (
    <div>
      {/* {courseTypes.forEach(course => <div>{console.log(course.title)}</div>)} */}
      {/* <ClassPane Course={courseTypes[0].title} CoursesList={CoursesList}/> */}
      {courseTypes.map((course) =><ClassPane Course={course.title} CoursesList={CoursesList}/>)}
    </div>
    )
}

