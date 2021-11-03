import React from 'react';
import './Footer.css';
// import { Button } from '../../Button';
import { Link } from 'react-router-dom';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';
import { Button, Col, Container, Row } from 'react-bootstrap';
// import { MdFingerprint } from 'react-icons/md';

function Footer() {
  return (
    <div className='footer-container'>
    <Container>
    <Row>
        <Col>
        <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join our exclusive membership to receive the latest news and travel package
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button className='btn-outline'>Subscribe</Button>
          </form>
        </div>
      </section>
        </Col>
    </Row>
      

      <Row>
          <Col>
            <div className='footer-link-items'>
                <h2>About Us</h2>
                <div className="bg-danger bottom-wd"></div>
                <Link to='/sign-up'>How it works</Link>
                <Link to='/'>Discription</Link>
                <Link to='/'>Plans</Link>
                <Link to='/'>Travelers</Link>
                <Link to='/'>Terms of Package</Link>
            </div>
        </Col>
          <Col>
            <div className='footer-link-items'>
                <h2>Contact Us</h2>
                <div className="bg-danger bottom-wd"></div>
                <Link to='/'>Contact</Link>
                <Link to='/'>Support</Link>
                <Link to='/'>Destinations</Link>
                <Link to='/'>Sponsorships</Link>
            </div>
          </Col>
          <Col>
            <div className='footer-link-items'>
                <h2>Videos</h2>
                <div className="bg-danger bottom-wd"></div>

                <Link to='/'>Submit Video</Link>
                <Link to='/'>Ambassadors</Link>
                <Link to='/'>Agency</Link>
                <Link to='/'>Influencer</Link>
            </div>
          </Col>
          <Col>
            <div className='footer-link-items'>
                <h2>Social Media</h2>
                <div className="bg-danger bottom-wd"></div>

                <Link to='/'>Instagram</Link>
                <Link to='/'>Facebook</Link>
                <Link to='/'>Youtube</Link>
                <Link to='/'>Twitter</Link>
            </div>
          </Col>
      </Row>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              TravelBd
            </Link>
          </div>
          
 

          <small className='website-rights'>TravelBd © 2021</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <FaFacebook />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <FaInstagram />
            </Link>
            <Link
              className='social-icon-link'
              to={'/'}
              target='_blank'
              aria-label='Youtube'
            >
              <FaYoutube />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <FaTwitter />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </section>
    </Container>
    </div>
  );
}

export default Footer;