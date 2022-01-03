import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom'

export default function PlayGround() {

    const [zoneData, setzoneData] = useState([])
    const [isAuth, setisAuth] = useState(false)

    useEffect(() => {
        getZone();
        // eslint-disable-next-line
    },[])

    const param = useParams();
    const getZone = async () => {
        const fetchedZone = await fetch(`${window.BACKEND_URL}/zone/${param.zone}`).then(res => res.json());
        setzoneData(fetchedZone.data);
        authenticateSpotify()
    }

    const authenticateSpotify = () =>{
        const is_authenticated = fetch(`http://127.0.0.1:8000/spotify/is-authenticated`)
        .then((res) => res.json()).then((data) => { setisAuth(data.isAuthenticated);
             if(!data.isAuthenticated){
                fetch(`http://127.0.0.1:8000/spotify/auth-url`).then((res) => res.json()).then((data) => window.location.replace(data.url))
        }})
        console.log(is_authenticated, 'is auth')
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
