
import React from 'react';
import NavigationBar from '../shared/NavigationBar/NavigationBar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import { Container } from 'react-bootstrap';
import Banner from '../components/Banner/Banner';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <NavigationBar></NavigationBar>
            <Container>
                <Banner></Banner>
            </Container>
            <Outlet></Outlet>
            <Footer></Footer>

        

        </div>
    );
};

export default Main;