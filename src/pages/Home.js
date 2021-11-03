import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Header from '../components/Header/Header'
import Plan from '../components/Plan/Plan'
import useAuth from '../hooks/useAuth'

const Home = () => {
    const {plans} = useAuth()
    return (

        // this is hero area
           <div>
                <div className="bg-img">
               <Container>
                   <Row >
                       <Col sm={12} md={{ span: 6, offset: 3 }}>
                            <div className="hero-text text-center">
                                <h1>The journey of a thousand miles begins with a single step.</h1>
                                <p>A traveller is a person who is making a journey or <br /> a person who travels a lot.
                                    Many air travellers suffer puffy ankles and feet during long flights.</p>
                                <Link to="/plans">
                                <button className="btn btn-outline-info hero-btn" >Continue</button>
                                </Link>
                            </div>
                       </Col>
                   </Row>
               </Container>
            </div>
            
            {/* //service area */}
            <div style={{ 
                            background: ' linear-gradient(315deg, #182b3a 0%, #20a4f3 74%)', 
                            backgroundSize: 'cover',
                            minHeight: '100vh',
                            width: '100%',
                            backgroundPosition: 'center' 
                         }}
                className="overlybody"
             >
                    <div className="py-5  text-white">
                        <div className="text-center pt-5">
                                <p className="text-danger">EXPLORE GREAT PLACES</p>
                                <h1 className="text-whtie">POPULAR  PACKAGES</h1>
                                <p className="mb-0">
                                Our Services To Give Best Care For Your Eyes.
                                </p>
                        </div>
                    </div>
                    <Container>
                        <div className="py-4 d-flex flex-wrap justify-content-between">
                            
                                {plans.slice(0, 6)?.map((plan) => (
                                    <Plan key={plan._id} plan={plan} />
                                ))}
                        </div>
                    </Container>
            
             </div>
                
                {/* activity area */}
            <div className="tour-type-bg">

               
                <Container >
                    <Row>
                        <Col>
                                <div className="adventure-tittle">
                                    <p className="font-italic">Find a tour by</p>
                                    <h1>Tour <span className="text-danger">@</span>  Type</h1>
                                    
                                </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xm={12} sm={6} md={4} lg={2}>
                                <div className="text-center bg-adventure p-2 border my-5">
                                    <img style={{width:"50px",height:"50px"}} src="https://i.ibb.co/Wt93zJj/social-care.png" alt="" />
                                    <h4>Day Long</h4>
                                </div>
                        </Col>
                        <Col xm={12} sm={6} md={4} lg={2}>
                                <div className="text-center bg-adventure p-2 border my-5">
                                    <img style={{width:"50px",height:"50px"}} src="https://i.ibb.co/XsnP5G4/employees.png" alt="" />
                                    <h4>Adventure</h4>
                                </div>
                        </Col>
                        <Col xm={12} sm={6} md={4} lg={2}>
                                <div className="text-center bg-adventure p-2 border my-5">
                                    <img style={{width:"50px",height:"50px"}} src="https://i.ibb.co/Yt85Bk0/camera.png" alt="" />
                                    <h4>Meet the Ethnic</h4>
                                </div>
                        </Col>
                        <Col xm={12} sm={6} md={4} lg={2}>
                                <div className="text-center bg-adventure p-2 border my-5">
                                    <img style={{width:"50px",height:"50px"}} src="https://i.ibb.co/BTZ1Gkb/adventure.png" alt="" />
                                    <h4>photography Tour</h4>
                                </div>
                        </Col>
                        <Col xm={12} sm={6} md={4} lg={2}>
                                <div className="text-center bg-adventure p-2 border my-5">
                                    <img style={{width:"50px",height:"50px"}} src="https://i.ibb.co/QJCthhB/24-hours.png" alt="" />
                                    <h4>Community based tour</h4>
                                </div>
                        </Col>
                        <Col xm={12} sm={6} md={4} lg={2}>
                                <div className="text-center bg-adventure p-2 border my-5">
                                    <img style={{width:"50px",height:"50px"}} src="https://i.ibb.co/QJCthhB/24-hours.png" alt="" />
                                    <h4>Community based tour</h4>
                                </div>
                        </Col>
                    </Row>
                </Container>
            </div>
                {/* image gellary */}
                <div className="photo-bg py-5">

                
                <Container>
                    <Row className="text-center py-4 mx-5">
                        <Col >
                            <h2 style={{textTransform:"uppercase", marginBottom:"5px"}}> PHoto GEllary</h2>
                            <p>Travelers Click</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col >
                            <div className="img-hover-zoom mb-3 ">

                             <img src="https://i.ibb.co/h9sj9Sq/Pexels-stijn-dijkstra-2659475.jpg" style={{width:"300px",height:"350px"}} alt=""  className="mb-4"/> 
                            </div>
                        </Col>
                        <Col >
                            
                            <div className="img-hover-zoom mb-3">

                             <img src="https://i.ibb.co/nmsTP28/Pexels-rachel-claire-4993151.jpg" style={{width:"300px",height:"350px"}} alt=""  className="mb-4"/> 
                            </div>
                        </Col>
                        <Col >
                            <div className="img-hover-zoom mb-3">

                             <img src="https://i.ibb.co/cQRXQYZ/Pexels-samuel-theo-manat-silitonga-737586.jpg" style={{width:"300px",height:"350px"}} alt=""  className="mb-4"/> 
                            </div>
                        </Col>
                        <Col >
                            
                             <div className="img-hover-zoom mb-3">

                             <img src="https://i.ibb.co/ssvXpf2/Pexels-artem-beliaikin-1319829.jpg" style={{width:"300px",height:"350px"}} alt=""  className="mb-4"/> 
                            </div>
                        </Col>
                        <Col >
                          
                            <div className="img-hover-zoom mb-3">

                             <img src="https://i.ibb.co/rpy4D03/Pexels-porapak-apichodilok-346768.jpg" style={{width:"300px",height:"350px"}} alt=""  className="mb-4"/> 
                            </div>
                        </Col>
                        <Col >
                           <div className="img-hover-zoom mb-3">

                             <img src="https://i.ibb.co/0ZtJC70/Pexels-nina-uhl-kov-725255.jpg" style={{width:"300px",height:"350px"}} alt=""  className="mb-4"/> 
                            </div>
                        </Col>
                        <Col >
                            <div className="img-hover-zoom mb-3">

                             <img src="https://i.ibb.co/999htTt/Pexels-yaroslav-shuraev-4510992.jpg" style={{width:"300px",height:"350px"}} alt=""  className="mb-4"/> 
                            </div>
                        </Col>
                        <Col >
                            <div className="img-hover-zoom mb-3">

                             <img src="https://i.ibb.co/Mks6xXm/Pexels-asad-photo-maldives-1268855.jpg" style={{width:"300px",height:"350px"}} alt=""  className="mb-4"/> 
                            </div>
                        </Col>
                    </Row>
                </Container>
                </div>

           </div>

            
    )
}

export default Home

