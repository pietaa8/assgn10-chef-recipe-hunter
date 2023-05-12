import React from 'react';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/footer/Footer';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../pages/Shared/NavigationBar/NavigationBar';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <NavigationBar></NavigationBar>
            <Container>
                <Outlet></Outlet>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;