import React from "react";

import ReactPlayer from "react-player";
// Imports for the Course Contents
import {
  makeStyles,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  ListSubheader,
  Typography,
  Button
} from "@material-ui/core";
import ImageIcon from "@material-ui/icons/Image";
import { blue } from "@material-ui/core/colors";
import img1 from "../../Resources/img1.jpeg";

const mainPaneStyles = makeStyles(() => ({
  mainHolder: {
    display: "flex",
    flexWrap: "wrap",
    background: "#487eb0",
    width: "80%",
    margin: "auto",
    borderRadius: "15px",
    boxShadow: "4px 4px grey"
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
    fontSize: "25px"
  },
  Enroll: {
    background: "lightgrey"
  }
}));

// CSS Used for the main Pane

// CSS used for the Course List
const CourseListStyles = makeStyles((theme) => ({
  CourseContent: {
    padding: "5px",
    margin: "auto"
  },
  CourseContentList: {
    width: "fit-content",
    background: "lightgrey",
    padding: "5px",
    borderRadius: "10px",
    boxShadow: "2px 2px grey",
    margin: "auto"
  },
  fontSizeIcon: {
    fontSize: 15
  },
  smallAvatar: {
    width: theme.spacing(3),
    height: theme.spacing(3)
  },
  blue: {
    color: theme.palette.getContrastText(blue[400]),
    backgroundColor: blue[400]
  },
  ListSubBack: {
    background: "white",
    borderRadius: "10px",
    boxShadow: "1px 1px grey",
    margin: "auto"
  },
  Duration: {
    color: "white",
    margin: "10px",
    fontSize: "20px"
  }
}));

const CoursePageHeaderStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    margin: "10px 10%",
    background: "#487eb0",
    borderRadius: "20px",
    boxShadow: "4px 4px grey",
    padding: "20px 0px"
  },
  instructImg: {
    width: "250px"
  },
  Desc: {
    display: "inline-block",
    width: "50%",
    color: "white",
    fontWeight: "400"
  }
}));

export default function CoursePage() {
  return (
    <div>
      <CoursePageHeader />
      <CourseTypePane />
    </div>
  );
}

const CoursePageHeader = () => {
  const classes = CoursePageHeaderStyles();
  return (
    <div className={classes.root}>
      <div className={classes.Desc}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          beatae harum quis sunt repellat aspernatur fugit earum minima corrupti
          quidem sequi explicabo quia laborum repellendus, tempore laboriosam,
          tempora, id vitae?
        </p>
      </div>
      <img src={img1} className={classes.instructImg} alt="Instructor" />
    </div>
  );
};

function CourseTypePane() {
  const classes = mainPaneStyles();
  return (
    <div>
      <div className={classes.CourseType}>SCMPE</div>
      <div className={classes.mainHolder}>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=UVCP4bKy9Iw"
          controls
          maxwidth="550px"
          playsinline
          style={{
            margin: "20px"
          }}
        />
        <CourseContents />
      </div>
    </div>
  );
}

const CourseContents = () => {
  const classes = CourseListStyles();
  const courseList = [
    { id: 1, Material: "Question Bank" },
    { id: 2, Material: "Hand Written Answer Book" },
    { id: 3, Material: "Master Stroke Book" },
    { id: 4, Material: "Love Charts" }
  ];

  return (
    <div className={classes.CourseContent}>
      <Typography className={classes.Duration}>
        Duration : Will be passed through props
      </Typography>
      <List
        subheader={
          <ListSubheader className={classes.ListSubBack}>
            Course Material
          </ListSubheader>
        }
        className={classes.CourseContentList}
      >
        {courseList.map((course) => (
          <ListItem>
            <ListItemAvatar>
              <Avatar className={`${classes.smallAvatar} ${classes.blue}`}>
                <ImageIcon className={classes.fontSizeIcon} />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={course.Material} />
          </ListItem>
        ))}
      </List>
      <Button>Enroll</Button>
    </div>
  );
};
