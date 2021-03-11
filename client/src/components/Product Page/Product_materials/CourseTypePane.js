import React from "react"
import { makeStyles } from "@material-ui/core";
import ReactPlayer from "react-player";
import CourseContents from "./CourseContents";

const mainPaneStyles = makeStyles({
  mainHolder: {
    display: "flex",
    flexWrap: "wrap",
    background: "#487eb0",
    width: "80%",
    margin: "auto",
    borderRadius: "15px",
    boxShadow: "4px 4px grey",
  },
  CourseType: {
    background: "lightgrey",
    boxShadow: "3px grey",
    width: "50%",
    margin: "20px auto",
    padding: "10px",
    borderRadius: "50px",
    borderStyle: "outset",
    fontWeight: "500",
    fontSize: "25px",
  },
  Enroll: {
    background: "lightgrey",
  },
});

const CourseTypePane = () => {
  const classes = mainPaneStyles();
  return (
    <div>
      <h2 className={classes.CourseType}>SCPME</h2>
      <div className={classes.mainHolder}>
          
        <ReactPlayer
          url="https://www.youtube.com/watch?v=UVCP4bKy9Iw"
          controls
          maxWidth="550px"
          playsinline
          style={{
            margin: "20px"
          }} />
        <CourseContents />
      </div>
    </div>
  );
}

export default CourseTypePane;
