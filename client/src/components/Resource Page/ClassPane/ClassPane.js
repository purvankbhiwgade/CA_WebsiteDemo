import React from 'react'
import { makeStyles } from "@material-ui/core";
import ReactElasticCarousel from "react-elastic-carousel/dist/index";
import Product from './Product'
import ComboBox from './ComboBox'

const ClassPaneStyles = makeStyles({
  slider: {
    backgroundColor: "lightgrey",
    padding: "10px",
    width: "90%",
    margin: "auto",
  },
});


// eslint-disable-next-line react/prop-types
const ClassPane = ({Course, CoursesList}) => {
    const breakPoints = [
      { width: 1, itemsToShow: 1 },
      { width: 400, itemsToShow: 2 },
      { width: 700, itemsToShow: 3 },
      { width: 1200, itemsToShow: 4 }
    ];
    const classes = ClassPaneStyles();
    return (
      <div>
        <ComboBox course={Course} CoursesList={CoursesList}/>
        <ReactElasticCarousel
          breakPoints={breakPoints}
          className={classes.slider}
        >
          <Product />
          <Product />
          <Product />
          <Product />
        </ReactElasticCarousel>
      </div>
    );
  }

export default ClassPane;