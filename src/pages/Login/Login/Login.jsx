import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../peoviders/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../../firebase/firebase.config';

const Login = () => {
    const {signIn}=useContext(AuthContext)

    const googleProvider=new GoogleAuthProvider;
    const githubProvider=new GithubAuthProvider;
    const [error, setError] = useState(null);

    const auth=getAuth(app);

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
            })
            .catch(error => {
                console.log(error);
                setError('Incorrect email or password.');
            })
    }

    const handleGoogleSignIn=()=>{
        signInWithPopup(auth,googleProvider)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
        })
        .catch(error => {
            console.log(error);
            setError('Google Sign In failed.');
        })

    }

    const handleGithubSignIn = () => {
        signInWithPopup(auth, githubProvider)
          .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
          })
          .catch(error => {
            console.log(error);
            setError('GitHub Sign In failed.');
          });
      };

    return (
        <div>
             <Container className='w-25 mx-auto'>
            <h3>Please Login</h3>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>

                <Button className='mb-5 mr-5' variant="primary" type="submit">
                    Login
                </Button>
                <Button onClick={handleGoogleSignIn} className='mb-5' variant="primary" type="submit">Sign in with Google</Button>
                <Button onClick={handleGithubSignIn} variant="primary" type="submit">Sign in with Github</Button>
                <br />
                <Form.Text className="text-secondary">
                    Don't Have an Account? <Link to="/register">Register</Link>
                </Form.Text>
                <Form.Text className="text-success">

                </Form.Text>
                <Form.Text className="text-danger">
                    {error}
        
                </Form.Text>
            </Form>
        </Container>
            
        </div>
    );
};

export default Login;