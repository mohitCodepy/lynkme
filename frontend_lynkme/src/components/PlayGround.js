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
        await authenticateSpotify()
    }

    const authenticateSpotify = async () =>{
        const is_authenticated = await fetch(`http://127.0.0.1:8000/spotify/is-authenticated`)
        .then((res) => res.json())
        setisAuth(is_authenticated);
        if(!is_authenticated.isAuthenticated){
           const authUrl = await fetch(`http://127.0.0.1:8000/spotify/auth-url`).then((res) => res.json())
           console.log(authUrl.url, 'auth url')
           window.location.replace(authUrl.url)
        }
        console.log(is_authenticated.isAuthenticated, isAuth, 'is auth')
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
