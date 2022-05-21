import React from "react";
import { Form ,Container} from "react-bootstrap";
const Addfilter = (props) => {
  const update = (event) => {
    props.setFilteryear(event.target.value);
  }
    return (
      <Container bg="dark" className="justify-content-end">
        <Form.Select value={props.filteryear} onChange={update}>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
        </Form.Select>
      </Container>
    );
}

export default Addfilter;