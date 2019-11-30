import React from 'react';
import { Form, Button } from 'react-bootstrap';

const Login: React.FC = () => {
    return (
        <div className="p-5" style={{backgroundColor: "white"}}>
            <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Log In
            </Button>
            </Form>
        </div>
    );
};

export default Login; 