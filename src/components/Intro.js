import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { FaList, FaPlayCircle } from 'react-icons/fa';

import '../style/landingPage.css';

const Intro = ({ title = 'Unlimited Movies,', title1 = 'TV shows and more', subtitle = 'Watch anywhere. Cancel anytime' }) => {
    return (
        <header className="intro">
            <Container className="text-white d-flex align-items-center justify-content-center">
                <Row>
                    <Col className="text-center">
                        <h1 className='title'>{title}</h1>
                        <h1 className='title'>{title1}</h1>
                        <h2 className='subtitle'>{subtitle}</h2>
                        <div className='buttonIntro mt-4'>
                        {/* <Button variant='dark'>
                            <FaList className="mr-2" style={{ verticalAlign: 'middle', marginBottom: '4px' }} /> EXPLORE NOW
                        </Button> */}

                        </div>
                        <div className='buttonPlay mt-2'>
                            <Button variant='outline-light' size='lg'>
                                <FaPlayCircle className="mr-2" style={{ verticalAlign: 'middle', marginBottom: '4px', marginRight: '4px' }} />
                                PLAY NOW
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </header>
    );
};

export default Intro;
