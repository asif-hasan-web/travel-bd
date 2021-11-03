import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Plan from '../components/Plan/Plan';
import useAuth from '../hooks/useAuth'

const Plans = () => {
    const {plans}= useAuth();
    return (
        <div style={{ 
                        background: ' linear-gradient(315deg, #182b3a 0%, #20a4f3 74%)', 
                        backgroundSize: 'cover',
                        minHeight: '100vh',
                        width: '100%',
                        backgroundPosition: 'center'
                     }}
          className="overlybody"
          >
           <Container>
               <Row>
               <div className="text-center  text-white pt-5">
                <h1>Our All Plans</h1>
                <p >Tour planning is a planning process in which transport orders are grouped into tours and put into a certain order. The tour is usually performed by one person or one vehicle. The tour planning is important in the areas where there are many tours and orders.</p>
           </div>
               </Row>
           </Container>
           
           <Container>
                  <Row className="py-2">
                            
                        {
                            plans.map((plan) =>(<Plan key={plan._id} plan ={plan}/>))
                        }   
                </Row>  
           </Container>
        </div>
    )
}

export default Plans
