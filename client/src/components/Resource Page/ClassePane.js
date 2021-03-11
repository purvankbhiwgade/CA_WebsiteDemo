import React from "react";
import {
  Button,
  Card,
  CardHeader,
  TextField,
  Typography
} from "@material-ui/core";
import ReactElasticCarousel from "react-elastic-carousel/dist/index";
import { Link } from "react-router-dom";
import img1 from "../../Resources/img1.jpeg";

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
      {courseTypes.forEach((course) =><ClassPane Course={course}/>)}
    </div>
    )
}

// eslint-disable-next-line react/prop-types
function ClassPane({Course}) {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 400, itemsToShow: 2 },
    { width: 700, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
  ];
  return (
    <div>
      <ComboBox course={Course} />
      <ReactElasticCarousel
        breakPoints={breakPoints}
        className="slider"
      >
        <Product />
        <Product />
        <Product />
        <Product />
      </ReactElasticCarousel>
    </div>
  );
}

function Product() {
  return (
    <Card className="classHolder">
      <img src={img1} className="CardImage" alt="Instructor" />
      <CardHeader title="Abhishek Khilwani" subheader="Head of the SCMPREM" />
      <Button className="classButton">
        <Link to="/product">Go to the Course Page</Link>
      </Button>
    </Card>
  );
}

// eslint-disable-next-line react/prop-types
function ComboBox({course}) {
  const [courses, setCourses] = React.useState("");

  const handleChange = (event) => {
    setCourses(event.target.value);
  };
  return (
    <div className="ClassesBox">
      <Typography className="title">{course}</Typography>
      <TextField
        select
        label="Instructor"
        value={courses}
        onChange={handleChange}
        SelectProps={{
          native: true
        }}
        className="searchBox"
      >
        {CoursesList.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </TextField>
    </div>
  );
}
