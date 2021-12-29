import React, { Component } from 'react'
import { Button, Col, Container, Row } from "react-bootstrap";

export default class ChooseZone extends Component {

    showZone = (e) => {
        console.log('show or not');
        // this.props.setshowJoin(j => !j);
        console.log(e,'event');
        this.props.setshowCreate((c) =>!c);
    }
    // showJoin = () =>{
    //     console.log('show join');
    //     this.props.setshowCreate(c => !c);
    //     this.props.setshowJoin(j => !j);
    // }
    render() {
        return (
            <Container className="choose-zone-inner">
                <Row className="d-block d-md-flex " style={{ 'alignItems': 'center' }}>
                    <Col md="12" sm="12" >
                        <Button className="zone-btn rounded-pill" onClick={this.showZone}>{this.props.showCreate ? 'Join' : 'Create' } Zone</Button>{' '}
                    </Col>
                </Row>
            </Container>
        )
    }
}
