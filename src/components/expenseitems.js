import React from "react";
import { Badge, Button, Card, Col, Container, Row } from "react-bootstrap";
import { Stack } from "react-bootstrap";
import CloseButton from 'react-bootstrap/CloseButton'
import Progressbar from "./progressbar";
const days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];



const Expenseitems = (props) => {
  const fx = (expense) =>
  {
    return (
      <Card className="mb-3" style={{backgroundColor: "", width: "80%", margin: "auto"}}>
        <Card.Body>
          <CloseButton aria-label="delete" style={{borderRadius: "0.45rem", marginLeft: "95%"}}></CloseButton>
        <Card.Text>
          <Row >
            <Col>
              <Card border="info" style={{ width: "6rem" }}>
                <Card.Header>{months[expense.date.getMonth()]}</Card.Header>
                <Card.Body>
                  <Card.Title>{expense.date.getDate()} {days[expense.date.getDay()]}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={6} md={6} lg={6}  className="mt-3" ><h3 style={{color: "#659DBD"}}>{expense.about}</h3></Col>
            <Col className="mt-3"><h3 style={{color: "#659DBD"}}>₹ {expense.amount}</h3></Col>
          </Row>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
  const monthly_expense = [
    {"month":"Jan","expense":0,"variant":""},
    {"month":"Feb","expense":0,"variant":""},
    {"month":"Mar","expense":0,"variant":""},
    {"month":"Apr","expense":0,"variant":""},
    {"month":"May","expense":0,"variant":""},
    {"month":"Jun","expense":0,"variant":""},
    {"month":"Jul","expense":0,"variant":""},
    {"month":"Aug","expense":0,"variant":""},
    {"month":"Sep","expense":0,"variant":""},
    {"month":"Oct","expense":0,"variant":""},
    {"month":"Nov","expense":0,"variant":""},
    {"month":"Dec","expense":0,"variant":""}
  ]
  let totalamount = 0;
  const filteredexpenses = [];
  for (let index = 0; index < props.expenses.length; index++) {
    const element = props.expenses[index];
    if(element.date.getFullYear() == props.filteryear)
    {
      filteredexpenses.push(element);
      totalamount += eval(element.amount);
      let a = monthly_expense[element.date.getMonth()];
      a["expense"]+=eval(element.amount);
    }
    }
    return (
      <div>
        <Progressbar monthly_expense={monthly_expense} totalamount={totalamount}></Progressbar>
        <Container>{filteredexpenses.map(fx)}</Container>
      </div>
    );
}

export default Expenseitems;