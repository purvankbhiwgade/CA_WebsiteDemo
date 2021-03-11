import React from "react";
import { makeStyles } from "@material-ui/core";
import img1 from "../../../Resources/img1.jpeg";

const CoursePageHeaderStyles = makeStyles({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    margin: "10px 10%",
    background: "#487eb0",
    borderRadius: "20px",
    boxShadow: "4px 4px grey",
    padding: "20px 0px",
  },
  instructImg: {
    width: "250px",
  },
  Desc: {
    display: "inline-block",
    width: "50%",
    color: "white",
    fontWeight: "400",
  },
});

function CoursePageHeader() {
  const classes = CoursePageHeaderStyles();
  return (
    <div className={classes.root}>
      <div className={classes.Desc}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.Mollitia
           eatae harum quis sunt repellat aspernatur fugit earum minima corrupti
           uidem sequi explicabo quia laborum repellendus, tempore laboriosam,
          tempora, id vitae?
        </p>
      </div>
      <img src={img1} className={classes.instructImg} alt="Instructor" />
    </div>
  );
}
export default CoursePageHeader;