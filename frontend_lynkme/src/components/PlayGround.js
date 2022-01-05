import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import axios from 'axios';
axios.defaults.withCredentials = true;
export default function PlayGround() {
    

    const [zoneData, setzoneData] = useState([])
    const [isAuth, setisAuth] = useState(false)

    useEffect(() => {
        getZone();
        axios.defaults.withCredentials = true;
        // eslint-disable-next-line
    },[])

    const param = useParams();
    const getZone = async () => {
        const fetchedZone = await axios.get(`${window.BACKEND_URL}/zone/${param.zone}`,{
            withCredentials: true,
            headers: {'Content-Type': 'application/json'}}).then(res => res);
        setzoneData(fetchedZone.data.data);
        console.log(fetchedZone.data.data, 'fetchedZone is here')
        await authenticateSpotify()
    }

    const authenticateSpotify = async () =>{
        const is_authenticated = await axios.get(`http://127.0.0.1:8000/spotify/is-authenticated`,{
            withCredentials: true,
            headers: {'Content-Type': 'application/json'}})
        .then((res) => res)
        setisAuth(is_authenticated.data.isAuthenticated);
        if(!is_authenticated.data.isAuthenticated){
           const authUrl = await axios.get(`http://127.0.0.1:8000/spotify/auth-url`,{
            withCredentials: true,
            headers: {'Content-Type': 'application/json'}}).then((res) => res)
           console.log(authUrl.data.url, 'auth url')
           window.location.replace(authUrl.url)
        }
    }
    
    return (
        <Container className='playground-class'>
            <Row className='border justify-content-center d-flex align-items-center' style={{'height' : '100vh'}}>
                <Col sm="12" className='border justify-content-center d-flex'>
                    <ul>
                        <li>{zoneData.id}</li>
                        <li>{zoneData.zone_num}</li>
                        <li>{!zoneData.guest_can_pause ? 'false' : 'true'}</li>
                        <li>{zoneData.host}</li>
                        <li>{zoneData.votes_to_skip}</li> 
                    </ul>
                </Col>
            </Row>
        </Container>
    )
}
