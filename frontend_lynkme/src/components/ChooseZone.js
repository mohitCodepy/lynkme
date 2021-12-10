import React, { Component } from 'react'
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from 'react-router-dom';
export default class ChooseZone extends Component {
    render() {
        return (
            <Container className="inner-div border">
                <Row>
                    <Col md="6" sm="12">
                        <Link to='/create-zone'>
                            <Button className="create-btn rounded-pill">Create Zone</Button>{' '}
                        </Link>
                    </Col>
                    <Col md="6" sm="12">
                    <Link to='/join-zone'>
                        <Button className="join-btn rounded-pill">Join Zone</Button>{' '}
                    </Link>
                    </Col>
                </Row>
            </Container>
        )
    }
}
