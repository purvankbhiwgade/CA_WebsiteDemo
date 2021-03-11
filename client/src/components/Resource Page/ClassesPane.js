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
      {courseTypes.forEach((course) =><ClassPane Course={course} CoursesList={CoursesList}/>)}
    </div>
    )
}