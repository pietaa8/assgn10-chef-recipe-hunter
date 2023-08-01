import React from 'react';
import Banner from '../../Banner/Banner';
import Welcome from '../../Welcome/Welcome';
import Speciality from '../../Speciality/Speciality';

const Home = () => {
    return (
        <div className='mt-5'>
            
            <Welcome></Welcome>
            <h2 className='text-center fw-bold mt-5'>Our <span className='text-primary fw-bold'>Chefs</span></h2>
            <Banner></Banner>
            <Speciality></Speciality>
        </div>
    );
};

export default Home;