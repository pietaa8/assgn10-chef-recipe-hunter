import React from 'react';
import walpaper from '../../assets/images/walpaper.jpeg'
import { Card } from 'react-bootstrap';

const Welcome = () => {
    return (
        <div>
            <Card className="bg-dark text-white">
      <Card.Img src={walpaper} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title className='fw-bold text-lg'>Enjoy Cooking and Eating</Card.Title>
        <Card.Text className='fw-semibold'>
        Browse Throgh Over Thousands of Recipes.
        </Card.Text>
        <Card.Text>Top Rated Website</Card.Text>
      </Card.ImgOverlay>
    </Card>
        </div>
    );
};

export default Welcome;