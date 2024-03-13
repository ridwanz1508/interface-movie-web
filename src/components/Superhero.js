import {Card, Col, Container, Row, Image} from "react-bootstrap"
import { FaPlay } from "react-icons/fa"

import antmanImage from "../assets/images/superhero/antman.jpg"
import avengerhingImage from "../assets/images/superhero/avenger.jpg"
import batmanImage from "../assets/images/superhero/batman.jpg"
import robinhoodImage from "../assets/images/superhero/robinhood.jpg"
import spidermancoverImage from "../assets/images/superhero/spiderman-cover.jpg"
import supermanImage from "../assets/images/superhero/superman.jpg"

const Superhero = () => {
    return (
        <div>
            <Container>
                <br/>
                <h1 className="text-white">SUPERHERO MOVIES</h1>
                <br/>
                <Row>
                    <Col md={4} className="movieWrapper mt-4" id="superhero">
                        <Card className="movieImage">
                            <Image src={antmanImage} alt="Antman Movies" className="images" />
                            <div className="overlay">
                            <div className="overlay-content">
                                <Card.Title className="text-center">ANTMAN</Card.Title>
                                <Card.Text className="text-left">
                                The story explores the Quantum Realm and the search for Hope's mother, Janet van Dyne 
                                (played by Michelle Pfeiffer), who was lost there years ago
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                <button className="play-button">
                                <FaPlay />
                                </button>
                            </div>
                            </div>
                        </Card>
                    </Col>

                    <Col md={4} className="movieWrapper mt-4" id="superhero">
                        <Card className="movieImage">
                        <Image src={avengerhingImage} alt="Avenger Movies" className="images" />
                            <div className="overlay">
                            <div className="overlay-content">
                                <Card.Title className="text-center">AVENGER</Card.Title>
                                <Card.Text className="text-left">
                                The culmination of the Infinity Saga, directed by Anthony and Joe Russo, 
                                where the Avengers strive to undo the devastating events of Infinity War
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                <button className="play-button">
                                <FaPlay />
                                </button>
                            </div>
                            </div>
                        </Card>
                    </Col>

                    <Col md={4} className="movieWrapper mt-4" id="superhero">
                        <Card className="movieImage">
                        <Image src={batmanImage} alt="Batman Movies" className="images" />
                            <div className="overlay">
                            <div className="overlay-content">
                                <Card.Title className="text-center">BATMAN</Card.Title>
                                <Card.Text className="text-left">
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content.
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                <button className="play-button">
                                <FaPlay />
                                </button>
                            </div>
                            </div>
                        </Card>
                    </Col>

                    <Col md={4} className="movieWrapper mt-4" id="superhero">
                        <Card className="movieImage">
                        <Image src={robinhoodImage} alt="Robinhood Movies" className="images" />
                            <div className="overlay">
                            <div className="overlay-content">
                                <Card.Title className="text-center">ROBINHOOD</Card.Title>
                                <Card.Text className="text-left">
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content.
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                <button className="play-button">
                                <FaPlay />
                                </button>
                            </div>
                            </div>
                        </Card>
                    </Col>

                    <Col md={4} className="movieWrapper mt-4" id="superhero">
                        <Card className="movieImage">
                        <Image src={spidermancoverImage} alt="Spiderman Movies" className="images" />
                            <div className="overlay">
                            <div className="overlay-content">
                                <Card.Title className="text-center">SPIDERMAN</Card.Title>
                                <Card.Text className="text-left">
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content.
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                <button className="play-button">
                                <FaPlay />
                                </button>
                            </div>
                            </div>
                        </Card>
                    </Col>

                    <Col md={4} className="movieWrapper mt-4" id="superhero">
                        <Card className="movieImage">
                        <Image src={supermanImage} alt="Superman Movies" className="images" />
                            <div className="overlay">
                            <div className="overlay-content">
                                <Card.Title className="text-center">SUPERMAN</Card.Title>
                                <Card.Text className="text-left">
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content.
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                <button className="play-button">
                                <FaPlay />
                                </button>
                            </div>
                            </div>
                        </Card>
                    </Col>

                </Row>

                <br/>
                <br/>
            </Container>
        </div>
    )
}

export default Superhero