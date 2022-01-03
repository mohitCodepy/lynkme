import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom'

export default function PlayGround() {

    const [zoneData, setzoneData] = useState([])

    useEffect(() => {
        getZone();
        // eslint-disable-next-line
    },[])

    const param = useParams();
    const getZone = async () => {
        const fetchedZone = await fetch(`${window.BACKEND_URL}/zone/${param.zone}`).then(res => res.json());
        setzoneData(fetchedZone.data);
    }

    
    return (
        <Container className='playground-class'>
            <Row className='border justify-content-center d-flex'>
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
