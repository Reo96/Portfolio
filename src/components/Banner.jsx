import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from '../assets/img/header-img.svg';
import { useState, useEffect } from 'react';
const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ['Web Developer', 'Data Analyst', 'Software Engineer'];
  const [text, setText] = useState('');
  const [delta ,setDelta]= useState(200 - Math.random()*30);
  const period = 100;
  useEffect(() =>{
    let ticker = setInterval(()=>{
      tick();
    },delta)
    return () => {clearInterval(ticker)};
  },[text]);
  const tick =() =>{
    let i = loopNum% toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting? fullText.substring(0,text.length-1): fullText.substring(0,text.length+1);
    setText(updatedText);

    if(isDeleting){
      setDelta(prevDelta => prevDelta/2);
    }
    if(!isDeleting && updatedText === fullText){
      setIsDeleting(true);
      setDelta(period);
    }
    else if(isDeleting && updatedText === ''){
      setIsDeleting(false);
      setLoopNum(loopNum+1);
      setDelta(200);
    }
  }

  return (
    <section className='banner' id='home'>
        <Container>
        <Row className='align-items-center'> 
            <Col xs={12} md={6} xl={7}>
              <span className='tagline'>Welcome to my Portfolio</span>
              <h1> {`Hi I am Rachit `}</h1>
              <h1 className='wrap'>{text}</h1>
              <p>I'm a passionate web developer with a knack for creating dynamic and responsive web applications. Let's work together to bring your ideas to life!</p>
              <button onClick={ () => console.log('connect')}>Let's Connect<ArrowRightCircle size={25}/></button>

            </Col>
            <Col xs={12} md={6} xl ={5}>
              <img src={headerImg} alt="Header img" />
            </Col>
        </Row>
        </Container>
    </section>
    
  )
}

export default Banner