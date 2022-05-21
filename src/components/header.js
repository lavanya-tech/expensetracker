import React from "react";
import { Button,Container,Navbar,Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
      <Navbar expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Expense Tracker</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink className="nav-link" to="/">View Expenses</NavLink>
          </Nav>
          <Nav className="ml-auto">
            <NavLink as="button" to="/addexpense"><Button>Add Expense</Button></NavLink>
          </Nav>
        </Container>
      </Navbar>
    );
}

export default Header;