// import { Button } from 'bootstrap'
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Card, Col,Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const Plan = ({plan}) => {
    
    const [plans, setPlans] = useState([])
    useEffect(()=>{
        fetch("https://evening-crag-32826.herokuapp.com/plans")
        .then((res) => res.json())
        .then((data)=>setPlans(data))
    },[])


    const{_id,name,picture,about,price}= plan || {};

    return (
        

        <Col className="my-2">
           
           <Card className="m-2 mt-2 h-100"  style={{ width: '20rem' }}>
                <Card.Img variant="top" className="img-fluid text-dark" src={picture}  />
                    <Card.Body className="text-dark">


                        <Card.Title >{name}</Card.Title>
                        <Card.Text>{about}</Card.Text>

                    </Card.Body>
                    
                        
                        <Card.Footer  className="text-center">
                            <Link to={`/booking/${_id}`}>
                                    <Button variant="primary" className="text-white text-center mx-auto" style={{
                                        bottom: '0',
                                        marginBottom:'10px'
                                    }}
                                    >Book now</Button>
                                </Link>
                        </Card.Footer>
                </Card>
                                    </Col>

    )
}

export default Plan
