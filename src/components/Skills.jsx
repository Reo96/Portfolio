import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {Container, Row, Col, CarouselCaption} from 'react-bootstrap';
import meter1 from '../assets/img/meter1.svg';
import meter2 from '../assets/img/meter2.svg';  
import meter3 from '../assets/img/meter3.svg';
import colorSharp from '../assets/img/color-sharp.png';
const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
    <section className='skills' id='skills'>
        <Container>
            <Row>
                <Col>
                <div className='skill-bx'>
                    <h2>
                        Skills
                    </h2>
                    <p></p>
                    <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                        <div className='item'>
                            <img src={meter1} alt=""/>     
                            <h5>Web Developement</h5>                        
                        </div>
                        <div className='item'>
                            <img src={meter2} alt=""/>     
                            <h5>Data Analyst</h5>                        
                        </div>
                        <div className='item'>
                            <img src={meter3} alt=""/>     
                            <h5>Data Visualisation</h5>                        
                        </div>
                        <div className='item'>
                            <img src={meter1} alt=""/>     
                            <h5>MERN Stack</h5>                        
                        </div>
                        <div className='item'>
                            <img src={meter3} alt=""/>     
                            <h5>Logo Design</h5>                        
                        </div>
                    </Carousel>
                </div>
                </Col>
            </Row>
        </Container>
        <img className='background-image-left' src={colorSharp} alt="" />

    </section>
  )
}

export default Skills