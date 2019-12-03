import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { logout } from "../../usecases/authentication";
import { useHistory } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { userActions, User } from "../../modules/userModule";
import { RootState } from "../../modules";

const Header: React.FC = () => {
  const history = useHistory();
  const user: User = useSelector((state: RootState) => state.user.user);
  const dispatch = useDispatch();
  const session = localStorage.getItem("token");
  return (
    // bg = "light"
    <Navbar style={{ backgroundColor: "white" }} expand="lg">
      <Navbar.Brand href="home">Habit Tracker</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="home">Home</Nav.Link>
          <Nav.Link href="generate">Generate</Nav.Link>
          <Nav.Link href="report">Report</Nav.Link>

          {!user.name && !session ? (
            <>
              <Nav.Link href="login">Login</Nav.Link>
              <Nav.Link href="signup">Signup</Nav.Link>
            </>
          ) : (
            <Button
              variant="light"
              onClick={(
                event: React.MouseEvent<HTMLButtonElement, MouseEvent>
              ) => {
                event.preventDefault();
                logout();
                dispatch(userActions.getUser({ name: "", email: "" }));
                history.push("/login");
              }}
            >
              logout
            </Button>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
