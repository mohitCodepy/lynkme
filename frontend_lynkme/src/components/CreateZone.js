import React, { Component } from "react";
import { Form, Row, Col, Button, Container, FloatingLabel } from "react-bootstrap";
import axios from "axios";
import { Navigate } from 'react-router-dom'


export default class CreateZone extends Component {

    constructor(props) {
        super(props)
        this.state = {
            guestCanPause: true,
            numOfVotes : 1,
            zoneCreated : false,
            zoneNum : '',
            isSpotifyAuthenticated : false,
        }
    }

    createZone = async () => {
        console.log('creating the zone')
        let data = {
            "guest_can_pause": this.state.guestCanPause,
            "votes_to_skip": this.state.numOfVotes
        }
    
        const createdZone = await axios.post(`${window.BACKEND_URL}/create-zone/`,data, { headers: { 'Content-Type': 'application/json' } }).then(res => res);
        console.log(createdZone.data.zone_num, 'created');
        await this.setState({zoneCreated : true, zoneNum : createdZone.data.zone_num})
        console.log(this.state.zoneNum, 'zone number')
    }

    playOption = (e) => {
        this.setState({ guestCanPause: true })
        console.log('this is the event on chaning the rules', e.target, this.state.guestCanPause)
    }

    Disableplay = (e) => {
        this.setState({ guestCanPause: false })
        this.setState({ numOfVotes : 1 })
        console.log('this is the event on chaning the rules', e.target, this.state.guestCanPause)

    }
    minVotes = (e) => {
        console.log(e.target.value, 'min value')
        if(e.target.value < 1) {
            e.target.value = 1;
        }
        this.setState({ numOfVotes : e.target.value })
    }
    removeBorder(e){
        // console.log(e.target, 'this is the data after click');
        e.target.style.boxShadow = 'none';
        e.target.style.autoComplete = 'nope'
        e.target.style.borderColor = 'white';
      }
    componentDidMount(){
        document.getElementById('get_can_pause').checked = true;
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
                        <Row className="my-3">
                            <Col sm="12">
                                <Container>
                                    <Row>
                                      <Col sm="12">  
                                      {this.state.guestCanPause ?      <FloatingLabel controlId="join-zone-label-id" label="No. of votes to skip" style={{ 'color': 'white', 'fontSize': 'normal' }}>

                                                <Form.Control type="number" placeholder="T1E2S3T4"
                                                    className="join-class-input"
                                                    style={{ 'color': 'white', 'fontWeight': 'bolder', 'backgroundColor': 'transparent', 'textAlign': 'center', 'fontSize': 'large', 'borderLeft': '0', 'borderRight': '0', 'borderTop': '0', 'borderBottomWidth': '3px', 'paddingTop': '35px', 'borderRadius': '7px' }} onFocus={this.removeBorder} autoComplete="off" onChange={this.minVotes} />
                                            </FloatingLabel> : '' }
                                        </Col> 
                                    </Row>
                                </Container>
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
                { this.state.zoneCreated && <Navigate to={'/music-playground/' + this.state.zoneNum}/>}
            </div>
        );
    }
}
