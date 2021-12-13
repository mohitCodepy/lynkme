import React, { Component } from "react";
import { Col, Container, InputGroup, Row } from "react-bootstrap";
export default class JoinZone extends Component {
  render() {
    return (
      <>
        <div>

           
            <Container>
              <Row>
              <h1>Join Zone</h1>
            <Col sm="12">
                <InputGroup >
                  Enter the Room Name
                </InputGroup>
            </Col>
                </Row>
            </Container>
                {/* <button type="radio" >Guest Can Pause</button>
            </div> */}
        </div>
      </>
    );
  }
}
