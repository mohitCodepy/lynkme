import React, { Component } from 'react'

import {Button, Col, Container, Row} from "react-bootstrap";

export default class ChooseZone extends Component {
    render() {
        return (
           <Container className="inner-div">
               <Row>
                   <Col md="6">
                   <Button  className="create-btn" pill>Create Zone</Button>{' '}
                   </Col>
                   <Col md="6">
                   <Button className="join-btn rounded-pill" pill>Join Zone</Button>
                   </Col>
               </Row>
           </Container>
        )
    }
}
