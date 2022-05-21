import React from "react";
import { Button,Form,Container } from "react-bootstrap";
import Header from "./header";
import Expenseitems from "./expenseitems";
import Home from "./home";


const Add_expense_nav = (props) => {
    const update_expense = (event) => {
      event.preventDefault();
      let new_expense = {
        id : Math.random,
        amount : event.target[1].value,
        about : event.target[0].value,
        date : new Date(event.target[2].value)
      };
      props.update_exp(new_expense);
      event.target[0].value = '';
      event.target[1].value = '';
      event.target[2].value = '';
    }
    return (
      <div>
      <Container className="text-center mt-3" style={{width:"70%"}}> 
      <Form onSubmit={update_expense}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label><i>Expense Description</i></Form.Label>
          <Form.Control type="text" placeholder="Describe Expense" required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label><i>Amount</i></Form.Label>
          <Form.Control type="number" placeholder="Amount" required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label><i>Date</i></Form.Label>
          <Form.Control type="date" placeholder="Amount" min="0" required/>
        </Form.Group>

        <Button className="text-center mt-2" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      </Container>
      </div>
    );
}

export default Add_expense_nav;