import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useLoaderData, useParams } from 'react-router-dom';

const ChefDetails = () => {

    const {chefId}=useParams();
    const chefs=useLoaderData();
    const [chefDetails, setChefDetails] = useState({});
    useEffect(() => {
        if (chefs && Array.isArray(chefs) && chefs.length) {
            const chef = chefs.find(chef => chef.id == chefId);
            setChefDetails(chef);
        }
    }, [chefs, chefId]);
    const {id, name, img, experience, likes, numRecipes } =chefDetails;
    return (
        <div className="text-center">
      <Card className="d-flex flex-row my-3">
        <Card.Img variant="top" src={img} style={{ width: '500px', height: '400px', objectFit: 'cover' }} />
        <Card.Body className=" mt-10 align-items-center justify-content-center text-w" style={{ width: '60%', fontSize: '14px', backgroundColor: 'black',color:'white' } }>
          <Card.Title>Name: {name}</Card.Title>
          <Card.Text>{experience}+ experience</Card.Text>
          <p>{likes} Likes</p>
          <p>Number of Recipes: {numRecipes}</p>
          <Button variant="primary">Favourite</Button>
        </Card.Body>
      </Card>
    </div>
    );
};

export default ChefDetails;
