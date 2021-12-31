import React, { Component } from "react";
import { Col, Container, Row, Form, Button, FloatingLabel } from "react-bootstrap";
export default class JoinZone extends Component {

  removeBorder(e){
    // console.log(e.target, 'this is the data after click');
    e.target.style.boxShadow = 'none';
    e.target.style.autoComplete = 'nope'
    e.target.style.borderColor = 'white';
  }
  render() {
    return (
      <>
        <div className="create-zone-card">
          <Form>
            <Container>
              <Row>
                <Col sm="12 text-center">
                  <FloatingLabel controlId="join-zone-label-id" label="Enter Zone Code" style={{ 'color': 'white', 'fontSize': 'normal' }}>

                    <Form.Control  type="text" placeholder="T1E2S3T4" 
                    className="join-class-input"
                    style={{'color': 'white', 'fontWeight' : 'bolder', 'backgroundColor':'transparent', 'textAlign': 'center', 'fontSize': 'large', 'borderLeft': '0','borderRight': '0','borderTop': '0', 'borderBottomWidth': '3px', 'paddingTop': '35px', 'borderRadius': '7px'}} onFocus={this.removeBorder} autoComplete="off" />
                  </FloatingLabel>
                  
                </Col>
                {/* <Col sm="6">
                                <Form.Check
                                    inline
                                    label="Disable"
                                    name="get_can_pause"
                                    type='radio'
                                    id='get_can_pause'
                                />
                            </Col> */}
              </Row>
            </Container>
            <Container className="create-form-button">
              <Row>
                <Col md="12">
                  <Button variant="warning">Join</Button>
                </Col>
              </Row>
            </Container>
          </Form>
        </div>
        {/* <img src="https://cdn.discordapp.com/attachments/901727342521634847/920397165233307688/Pngtreedisc_3768551.png" width={200} height={180} alt="" /> */}

        {/* <button type="radio" >Guest Can Pause</button>
            </div> */}
      </>
    );
  }
}
