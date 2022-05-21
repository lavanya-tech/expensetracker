import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Addfilter from "./addfilter";
import Expenseitems from "./expenseitems";


const Home = (props) => 
{
  let d = new Date();
  const [filteryear,setFilteryear] = useState(2022);
    return (
      <div>
      <Container> 
        <br></br>
        <Addfilter expenses={props.expenses} setexpenses={props.setexpenses} filteryear={filteryear} setFilteryear={setFilteryear}></Addfilter>
        <br></br>
        <Expenseitems expenses={props.expenses} setexpenses={props.setexpenses} filteryear={filteryear} setFilteryear={setFilteryear} delete_expense={props.delete_expense}></Expenseitems>
      </Container>
      </div>
    );
}

export default Home;