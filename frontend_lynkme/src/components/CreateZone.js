import React, { Component } from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
export default class CreateZone extends Component {
    render() {
        return (
            <div>
                <Container className="border">
                    <Row>
                        <Col md="6">
                            <Form>
                                <Container className="option-class">
                                    <Row>
                                        <Col md="6">
                                            <Form.Check
                                                inline
                                                label="Play/Pause"
                                                name="get_can_pause"
                                                type='radio'
                                                id='get_can_pause'
                                                
                                            />
                                        </Col>
                                        <Col md="6">
                                            <Form.Check
                                                inline
                                                label="Disable"
                                                name="get_can_pause"
                                                type='radio'
                                                id='get_can_pause'
                                            />
                                        </Col>
                                    </Row>
                                    <Row className="justify-content-center d-flex">
                                        <Col md = "12">
                                            <Button variant="warning">Create</Button>
                                        </Col>
                                    </Row>
                                </Container>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
