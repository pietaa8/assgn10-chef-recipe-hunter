import React from 'react';
import { Button, Card } from 'react-bootstrap';



const Chefs = (props) => {

    const {name,img,experience,likes,numRecipes}=props.chef;
    return (
        <div>
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>Name:{name}</Card.Title>
        <Card.Text>
         {experience}
        </Card.Text>
        <p>{likes}</p>
        <p>{numRecipes}</p>
        <Button variant="primary">View Recipes</Button>
      </Card.Body>
    </Card>
            
        </div>
    );
};

export default Chefs;