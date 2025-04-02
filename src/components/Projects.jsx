import React from 'react'
import {Container, Row, Col, Tab,Nav} from 'react-bootstrap';
import {ProjectCard} from './ProjectCard';
import colorSharp2 from '../assets/img/color-sharp2.png';
import projImg1 from '../assets/img/project-img1.png';
import projImg2 from '../assets/img/project-img2.png';
import projImg3 from '../assets/img/project-img3.png';
const Projects = () => {
    const projects = [
        {
            title: 'Cipher Encoding and Decoding Program',
            description: 'A project that encodes and decodes messages using a simple to complex cipher algorithm.',
            imgUrl: projImg1
        },
        {
            title: 'Netflix Clone Website',
            description: 'Developed a full-featured Netflix clone with a modern tech stack, providing an immersive user experience. Implemented authentication, movie/TV show fetching, search functionality, and personalized recommendations.',
            imgUrl: projImg2
        },
        {
            title: 'Seating Arrangement and Attendance sheet planner',
            description: 'Developed a comprehensive system for dynamically generating seating arrangements for exams and creating attendance sheets for each exam session, ensuring accuracy and efficiency.',
            imgUrl: projImg3
        }
    ]
  return (
    <section className='projects' id='projects'>
        <Container>
            <Row>
                <Col>
                <h2>Projects</h2>
                <p></p>
                <Tab.Container id='projects-tabs' defaultActiveKey='first' >
                    <Nav variant="pills" className='nav-pills mb-5 justify-content-center align-items-center' id='pills-tab' >
                        <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey={"first"}>
                            <Row>
                                {
                                    projects.map((project,index) =>{
                                        return (
                                            <ProjectCard 
                                            key = {index}
                                            {...project}
                                            />
                                        )
                                    })
                                }
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey={"second"}>
                            <Row>
                                {
                                    projects.map((project,index) =>{
                                        return (
                                            <ProjectCard 
                                            key = {index}
                                            {...project}
                                            />
                                        )
                                    })
                                }
                            </Row>
                        </Tab.Pane>
                    </Tab.Content>
                </Tab.Container>
                </Col>
            </Row>
        </Container>
        {/* <img src={colorSharp2}   className='background-img-right'/> */}

    </section>
  )
}

export default Projects