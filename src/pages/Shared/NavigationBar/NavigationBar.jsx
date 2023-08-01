import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../peoviders/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';

const NavigationBar = () => {

  const { user, logOut } = useContext(AuthContext)

  const handleLogOut = () => {
    logOut()
      .then()
      .catch(error => console.log(error));
  }
  return (
    <div>
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
      
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          
          <Link className='nav-link text-primary fw-semibold' to='/'>Home</Link>
            <Link className='nav-link text-primary fw-semibold' to="/blog">Blog</Link>
          
           
             
          </Nav>
          <Nav>
              {user && <FaUserCircle style={{ fontSize: '2rem' }}></FaUserCircle>
              }

              {user ?
                <Button onClick={handleLogOut} variant="secondary">Logout</Button> :
                <Link to="/login">
                  <Button  variant="primary" className='fw-semibold'>Login</Button>
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