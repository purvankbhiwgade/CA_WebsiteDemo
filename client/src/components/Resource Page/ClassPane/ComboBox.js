import React from 'react';
import {
    TextField,
    Typography
  } from "@material-ui/core";

// eslint-disable-next-line react/prop-types
const ComboBox = ({course, CoursesList}) => {
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

export default ComboBox;