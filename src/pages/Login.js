import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import google from "./../assets/google.png";


const Login = () => {
    const {AllContexts}= useAuth()

    const {
        signInWithGoogle,
        setError,
        setUser} = AllContexts;

      const location = useLocation();

  const history = useHistory();
  const redirect = location?.state?.from || "/home";
    return (
        <div>
            <Container>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <div className="my-5 text-center" style={{border:"1px solid #333", padding:" 20px", margin:"50px 20px" }}>
                            <div className="my-5 ">
                                <h1>Welcome back</h1>
                                 <p>sign in to get personalized story recomendations, follow authors and topics you love and interact with stories</p>
                                 <br />
                            </div>
                         
                            <button className="btn btn-outline-warning text-black"
                            onClick={() => {
                                signInWithGoogle()
                                .then((result)=>{
                                    setUser(result.user);
                                    history.push(redirect);
                                })
                                .catch(error=>{
                                    setError(error.message)
                                })
                            }}
                            >
                            <img src={google} width="20px" alt="google-icon" /> Sign in with google
                            </button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Login
