import React from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";

const Contact = () => {
  return (
    <div>
      <ContactForm />
    </div>
  );
};
const formStyle = { background: "transparent", color: "white" };
function ContactForm() {
  
  return (
    <div style={{ padding: "58px 0 40px" }}>
      
        <h2 className="text-center text-Primary">Contact Us</h2>
        <p className="text-center text-muted mb-4">You can easily reach us through filling up the form</p>
      
      <div>
        <Container >
         
              <Row>
                  <Col md={{ span: 6, offset: 3 }}>
                  <h3 className>Contact Form</h3>
                  <Form className="  align-item-center ">
              <Row>
                <Col sm>
                  <Form.Group
                    className="mb-3 text-white"
                    controlId="formBasicText"
                  >
                    <Form.Label>Enter Your Name... </Form.Label>
                    <Form.Control
                      style={formStyle}
                      type="text"
                      placeholder="Enter Your Name"
                      className="text-dark fw-700"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col sm>
                    <Form.Group
                        className="mb-3 text-white"
                        controlId="formBasicEmail"
                    >
                        <Form.Label>Enter Your Email... </Form.Label>
                        <Form.Control
                        style={formStyle}
                        type="email"
                        placeholder="Enter Your Email"
                        className="text-dark fw-700"
                        />
                    </Form.Group>
                    </Col>
              </Row>
              <Row>
                  <Col md>
                      
                            <Form.Control
                            style={formStyle}
                            className="my-3"
                            type="number"
                            placeholder="Write Your Phone Number..."
                            className="text-dark fw-700"
                        />
                        <Form.Group
                            className="mb-3 text-white"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Your Messages</Form.Label>
                            <Form.Control
                            style={formStyle}
                            placeholder="Write you message..."
                            as="textarea"
                            className="text-dark fw-700"
                            rows={3}
                            />
                        </Form.Group>
                        <Button className="mb-5 w-100  px-4" variant="primary" type="submit">
                            SEND
                        </Button>
                  </Col>
              </Row>
            </Form>
                  </Col>
              </Row>
            
         
        </Container>
      </div>
    </div>
  );
}

export default Contact;
