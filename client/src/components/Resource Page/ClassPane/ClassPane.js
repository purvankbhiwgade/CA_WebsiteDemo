import React from 'react'
import ReactElasticCarousel from "react-elastic-carousel/dist/index";
import Product from './Product'
import ComboBox from './ComboBox'


// eslint-disable-next-line react/prop-types
const ClassPane = ({Course, CoursesList}) => {
    const breakPoints = [
      { width: 1, itemsToShow: 1 },
      { width: 400, itemsToShow: 2 },
      { width: 700, itemsToShow: 3 },
      { width: 1200, itemsToShow: 4 }
    ];
    return (
      <div>
        <ComboBox course={Course} CoursesList={CoursesList}/>
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

export default ClassPane;