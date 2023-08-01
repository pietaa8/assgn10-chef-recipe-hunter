import React from 'react';
import img1 from '../../assets/images/img1.jpeg'
import img2 from '../../assets/images/img2.jpeg'
import img3 from '../../assets/images/img3.jpeg'
import { Carousel } from 'react-bootstrap';


const Speciality = () => {
    return (
        <div>
            <h2 className='text-center mt-5 fw-blod mb-5'>Most Demanding <span className='text-primary fw-bold'>Dishes</span></h2>
            <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Samosa</h3>
          <p>Served Hot and Fresh.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Biriyani</h3>
          <p>Vegetable Biriyani, Chicken Biriyani , Mutton Biriyani.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Mixed Veged Vonda</h3>
          <p>
            Yummy and Soft
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
            
        </div>
    );
};

export default Speciality;