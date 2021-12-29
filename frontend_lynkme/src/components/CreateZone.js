import React, { Component } from "react";
import { Form, Row, Col, Button, Container } from "react-bootstrap";
export default class CreateZone extends Component {
    render() {
        return (
            <div className="create-zone-card">
                <Form>
                    <Container>
                        <Row>
                            <Col sm="6 text-start">
                                <Form.Check
                                    inline
                                    label="Play/Pause"
                                    name="get_can_pause"
                                    type='radio'
                                    id='get_can_pause'

                                />
                            </Col>
                            <Col sm="6 text-end">
                                <Form.Check
                                    inline
                                    label="Disable"
                                    name="get_can_pause"
                                    type='radio'
                                    id='get_can_pause'
                                />
                            </Col>
                        </Row>
                    </Container>
                    <Container className="create-form-button">
                        <Row>
                            <Col md="12">
                                <Button variant="warning">Create</Button>
                            </Col>
                        </Row>
                    </Container>
                </Form>
            </div>
        );
    }
}
