import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import sponser from '../assets/sponser.jpg'
import ReactPlayer from "react-player"

const About = () => {
    const mystyle = {
        backgroundColor: 'rgb(2,0,36)',
        background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(59,59,120,0.8939950980392157) 0%, rgba(53,73,121,0.8883928571428571) 14%, rgba(5,97,179,0.8799894957983193) 32%, rgba(59,81,85,0.8183648459383753) 74%, rgba(59,68,124,0.7651435574229692) 100%)',
        padding: "50px 0"
      };
    return (
        <div>
            <div style={mystyle}>
                        <h1 className="text-center text-white  mb-1">About</h1>
                
                    <h6 className="text-center text-white py-1 mb-4" >
                            Home / About
                    </h6>
             </div>
             <Container>
                 <Row className="my-5">
                     <Col>
                        <div className="text-danger">
                            <div>
                            <div style={{width:"65px", height:"2px",top:"14px",position:"relative",bottom:"-40", backgroundColor:"red"}}></div>
                            <h6 style={{left:"73px", position:"relative"}}>Our Tour Gallery</h6>
                             
                            </div>
                            <div className="mt-5">
                                <h1>HELLO. OUR AGENCY HAS BEEN PRESENT BEST IN THE MARKET</h1>
                            </div>
                        </div>
                     </Col>
                     <Col>
                       <div>
                           <p>we are group of passionate and adventurous tourism professional. We have assembled the best in the business who can teach you all there is to know about Bangladesh .we are proud to have formed team of tour managers who area knowledgeable, dedicated and open minded energetic yet easy going .</p>
                           <br />
                           <p>Touts & Trips organized excursions for tourist group from all around the world. visitor hav come to us form Italy,Germany,France Sweden china india netherlands and Uk, us and so on . out experts includes taklking care indiviual tourist and small groups with tailor- made adventure tours including mangrove forest hills and visits arround the countru . there is an expert</p>
                       </div>
                     </Col>
                 </Row>
                 <Row>
                     <Col>
                        <div className="someInfo my-5">
                           <Row>
                               <Col md={4} lg={4} >
                                <div className="img-site">
                                     <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" className="abouttext" alt="" />
                                     <div className="img-text">
                                        <h5>AFFORDABLE PRICE</h5>
                                        <p>What does affordable mean? If something is affordable, it means its price is low enough </p>
                                    </div>
                                 </div>
                            </Col>
                               <Col md={4} lg={4} >
                                <div className="img-site">
                                     <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" className="abouttext" alt="" />
                                     <div className="img-text">
                                        <h5>BEST DESTINATION</h5>
                                        <p>According to a new survey, Bali is the top bucket list destination in the world. Getty.</p>
                                    </div>
                                 </div>
                            </Col>
                               <Col md={4} lg={4} >
                                <div className="img-site">
                                     <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" className="abouttext" alt="" />
                                     <div className="img-text">
                                        <h5>PERSONAL SERVICE</h5>
                                        <p> you have the opportunity to gather the people you want to hang out with and feel that would enjoy </p>
                                    </div>
                                 </div>
                            </Col>
                               
                           </Row>
                        </div>
                     </Col>
                 </Row>
                 <Row>
                 <div className=" d-flex align-items-center justify-content-center">
                      <ReactPlayer
                         url="https://youtu.be/8Z1eMy2FoX4 ' + id + '?showinfo=0&enablejsapi=1&origin=http://localhost:9000" controls/>
                  </div>
                 </Row>

                 <Row>
                     <Col md={{ span: 6, offset: 3 }}>
                            <div  className="my-5">
                              <div>
                                    <div style={{width:"65px", height:"2px",top:"14px",position:"relative",bottom:"-40", backgroundColor:"red"}}></div>
                                        <h6 style={{left:"73px", position:"relative"}}>Our Assoicaite</h6>
                              </div>
                              <div className="text-pertner text-center">
                                  <h1>PARTNER'S AND CLIENTS</h1>
                                  <p>Mollit voluptatem perspiciatis convallis elementum corporis quo veritatis aliquid blandit, blandit torquent, odit placeat. Adipiscing repudiandae eius cursus? Nostrum magnis maxime curae placeat.</p>
                                  <img src={sponser} alt="" />
                              </div>
                            </div>
                     </Col>
                 </Row>
             </Container>
        </div>
    )
}

export default About
