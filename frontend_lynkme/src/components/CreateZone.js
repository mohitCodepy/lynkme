import React, { Component } from "react";
import { Form, Row, Col, Button, Container } from "react-bootstrap";
import axios from "axios";


export default class CreateZone extends Component {

    constructor(props){
        super(props)
        this.state = {
            guestCanPause : false
        }
    }

    createZone = async () => {
        console.log('creating the zone')
        await axios.get(`${window.BACKEND_URL}/zone`, {headers : { 'Content-Type' : 'application/json'}}).then(console.log)
    }

    playOption = (e) => {
        this.setState({guestCanPause: true})
        console.log('this is the event on chaning the rules', e.target, this.state.guestCanPause)
    }
    
    Disableplay = (e) => {
        this.setState({guestCanPause: false})
        console.log('this is the event on chaning the rules', e.target, this.state.guestCanPause)
        
    }

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
                                    onChange={this.playOption}
                                />
                            </Col>
                            <Col sm="6 text-end">
                                <Form.Check
                                    inline
                                    label="Disable"
                                    name="get_can_pause"
                                    type='radio'
                                    id='disable'
                                    onChange={this.Disableplay}
                                />
                            </Col>
                        </Row>
                    </Container>
                    <Container className="create-form-button">
                        <Row>
                            <Col md="12">
                                <Button variant="warning" onClick={this.createZone}>Create</Button>
                            </Col>
                        </Row>
                    </Container>
                </Form>
            </div>
        );
    }
}
