import React from 'react';
import walpaper from '../../assets/images/walpaper.jpeg';
import { Card } from 'react-bootstrap';

const Welcome = () => {
  const cardStyle = {
    background: `url(${walpaper}) no-repeat center center fixed`,
    backgroundSize: 'cover',
    height: '115vh', // Set the card height to fill the entire viewport
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  };

  const titleStyle = {
    fontWeight: 'bold',
    fontSize: '3rem', // Set the font size to 3rem
    marginBottom: '2rem', // Add some vertical spacing between the title and text
  };

  const textStyle = {
    fontWeight: '600',
    fontSize: '1.5rem', // Set the font size to 1.5rem
    marginBottom: '1rem', // Add some vertical spacing between the text and the next line
  };

  const subtitleStyle = {
    fontSize: '1.25rem', // Set the font size to 1.25rem
  };

  return (
    <div>
      <Card className="bg-dark text-white" style={cardStyle}>
        <Card.Img src={walpaper} alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title style={titleStyle}>Enjoy Cooking and Eating</Card.Title>
          <Card.Text style={textStyle}>Browse Through Over Thousands of Recipes.</Card.Text>
          <Card.Text style={subtitleStyle}>Top Rated Website</Card.Text>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
};

export default Welcome;
