import React, { Component } from 'react'
import { Button, Col, Container, Row } from "react-bootstrap";

export default class ChooseZone extends Component {

    showCreate = () => {

        this.props.setshowCreate(v => !v);
        console.log('show or not');
    }
    render() {
        return (
            <Container className="choose-zone-inner">
                <Row className="d-block d-md-flex " style={{ 'align-items': 'center' }}>
                    <Col md="6" sm="12" >
                        <Button className="create-btn rounded-pill" onClick={this.showCreate}>Create Zone</Button>{' '}
                    </Col>
                    <Col md="6" sm="12">
                        <Button className="join-btn rounded-pill">Join Zone</Button>{' '}
                    </Col>
                </Row>
            </Container>
        )
    }
}
