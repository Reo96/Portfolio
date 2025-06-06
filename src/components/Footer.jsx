import {Container, Row, Col} from 'react-bootstrap'
import logo from '../assets/img/logo.png'
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg'; 
import navIcon3 from '../assets/img/nav-icon3.svg';
const Footer = () => {
  return (
    <footer>
        <Container className='footer'>
            <Row className='align-item-center'>
                <Col sm={6}>
                    <img src={logo}/>
                </Col>
                <Col sm={6} className='text-center text-sm-end' >
                    <div className='social-icon'>
                    <a href="https://www.linkedin.com/in/rachit-mudgil-16880525a/"><img src={navIcon1} alt="" /></a>
                    <a href=""><img src={navIcon2} alt="" /></a>
                    <a href="https://www.instagram.com/mudgil_boy_96/"><img src={navIcon3} alt="" /></a>
                    </div> 
                    <p>CopyRight 2025. All Right Reserved</p>
                </Col>    
            </Row>
        </Container>
    </footer>
  )
}

export default Footer