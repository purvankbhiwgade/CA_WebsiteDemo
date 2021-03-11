import React from "react";
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
import { blue } from "@material-ui/core/colors";
import ImageIcon from "@material-ui/icons/Image";

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

function CourseContents() {
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
              Duration: Will be passed through props
      </Typography>
      <List
        subheader={<ListSubheader className={classes.ListSubBack}>
          Course Material
        </ListSubheader>}
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
}
export default CourseContents;
