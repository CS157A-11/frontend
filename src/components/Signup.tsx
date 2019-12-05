import React from "react";
import { Form, Button } from "react-bootstrap";
import { signup } from "../usecases/authentication";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { userActions } from "../modules/userModule";

const Signup: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const onSubmit = ($event: React.FormEvent<HTMLFormElement>): void => {
    const user = {
      // @ts-ignore
      name: $event.target[0].value,
      // @ts-ignore
      email: $event.target[1].value,
      // @ts-ignore
      password: $event.target[2].value
    };
    try {
      signup(user).then((res): void => {
        dispatch(userActions.getUser(res.user));
        dispatch(
          appActions.setIsAuthenticated(localStorage.getItem("token") !== null)
        );
        history.push("/home");
      });
    } catch (e) {
      throw e;
    }
    $event.preventDefault();
  };

  return (
    <div className="d-flex flex-column align-items-center">
      <Form onSubmit={onSubmit} style={{ minWidth: "400px" }}>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control placeholder="Enter your name" />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <div className="d-flex justify-content-center">
          <Button variant="primary" type="submit">
            Sign Up
          </Button>
        </div>
      </Form>
      <Button
        className=""
        variant="link"
        onClick={() => history.push("/login")}
      >
        have account?
      </Button>
    </div>
  );
};

export default Signup;
