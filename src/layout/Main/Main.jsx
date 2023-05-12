import React from 'react';
import NavigationBar from '../../shared/NavigationBar/NavigationBar';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Container } from 'react-bootstrap';
import Banner from '../../components/Banner/Banner';

const Main = () => {
    return (
        <div>
          <Header></Header>
            <NavigationBar></NavigationBar>
            <Container>
               <Banner></Banner>
            </Container>
            <Footer></Footer>


        

        </div>
    );
};

export default Main;