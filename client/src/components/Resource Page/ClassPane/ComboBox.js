import React from 'react';

import {
    TextField,
    Typography, 
    makeStyles
  } from "@material-ui/core";


const ComboBoxStyles = makeStyles({
  ClassesBox: {
    background: "gray",
    width: "fit-content",
    padding: "10px",
    borderRadius: "0px 8px",
    margin: "15px 5%",
    display: "flex",
    flexWrap: "wrap"
  },
  searchBox: {
    background: "white",
    width: "10rem"
  },
  title: {
    margin: "10px",
    color: "white",
    fontWeight: "800",
    width: "15rem"
  },
});


// eslint-disable-next-line react/prop-types
const ComboBox = ({course, CoursesList}) => {
    const [courses, setCourses] = React.useState("");
    const classes = ComboBoxStyles();
    const handleChange = (event) => {
      setCourses(event.target.value);
    };
    return (
      <div className={classes.ClassesBox}>
        <Typography className={classes.title}>{course}</Typography>
        <TextField
          select
          label="Instructor"
          value={courses}
          onChange={handleChange}
          SelectProps={{
            native: true
          }}
          className={classes.searchBox}
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