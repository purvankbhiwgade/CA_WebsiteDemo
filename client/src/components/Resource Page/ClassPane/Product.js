import React from 'react'
import { Card, CardHeader, Button } from '@material-ui/core'
import { Link } from "react-router-dom";
import img1 from './img1.jpeg'


const Product = () => {
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

export default Product;