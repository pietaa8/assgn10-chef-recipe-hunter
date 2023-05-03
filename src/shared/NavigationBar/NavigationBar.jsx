import React, { useContext } from 'react';
import { AuthContext } from '../../peoviders/AuthProvider';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NavigationBar = () => {

    const {user,logOut}=useContext(AuthContext);

    const handleLogOut = () => {
      logOut()
          .then()
          .catch(error => console.log(error));
  }



    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Link to="/">Home</Link>
            <Link to="/blog">Blog</Link>
        
          </Nav>
          <Nav>
            { user &&  <FaUserCircle style={{ fontSize: '2rem' }}></FaUserCircle>
      }
      
      {user ?
                                <Button onClick={handleLogOut} variant="secondary">Logout</Button> :
                                <Link to="/login">
                                    <Button variant="secondary">Login</Button>
                                </Link>
                            }
                            
  
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
            
        </div>
    );
};

export default NavigationBar;