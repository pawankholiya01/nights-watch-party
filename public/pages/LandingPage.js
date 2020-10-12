import React from "react";
import Button from "react-bootstrap/cjs/Button";
import Container from "react-bootstrap/cjs/Container";
import Row from "react-bootstrap/cjs/Row";
import Col from "react-bootstrap/cjs/Col";
import Form from "react-bootstrap/cjs/Form";
import PartyRoom from "../components/PartyRoom";
import Background from './background.png';
import Hritvik from './Hritvik.jpg';
import Pawan from './Pawan.jpg';
import stark from './sigil/stark.png';



import URLFormatter from "../components/URLFormatter";
import 'bootstrap/dist/css/bootstrap.min.css';


class LandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'url' :'',
            'room':'',
            'room_id':'',
            'name': 'Anonymous',
            'room_set': false,
            'title': 'Nights Watch Party!',
            'url_formatter': new URLFormatter(),
        };
    }

    render() {
//  style={{ backgroundColor: '#181A1B' }}
        let pre_room = "";
        if(!this.state.room_set) {
            pre_room = (
                <div >
                    <br/>
                   
                    <Row className={"justify-content-md-center"}>
                        <h1> <b>Night's Watch Party</b></h1>
                    </Row>
                    <br/>
                    <br />
                    <Row>
                        <Col md={2}>
                        </Col>
                        <Col md={4} className={'m-3 p-3  rounded'} style={{ backgroundColor: "#2B2F31" }} >
                        <br/>
                            <Row className={"justify-content-md-center"}>
                                <h2><b>Create A Party</b></h2>
                            </Row>
                    <Row className={"justify-content-md-center"} >
                                
                        <Form >
                            <Form.Group controlId="landingForm.ControlInput1">
                                <Form.Label className={"form_style"}>Your Name</Form.Label>
                                        <Form.Control style={{ backgroundColor: "#181A1B", borderColor: '#3C4144' }}  onChange={(evt) => this.state.name = evt.target.value}
                                              placeholder="Anonymous"/>
                            </Form.Group>
                            <Form.Group controlId="landingForm.ControlInput2">
                                <Form.Label className={"form_style"}>Party Name</Form.Label>
                                        <Form.Control style={{ backgroundColor: "#181A1B", borderColor: '#3C4144' }}  onChange={(evt) => this.state.title = evt.target.value}
                                              placeholder="Nights Watch Party!"/>
                            </Form.Group>
                            <Form.Group controlId="landingForm.ControlInput1">
                                        <Form.Label  className={"form_style"}>Video Link</Form.Label>
                                        <Form.Control style={{ backgroundColor: "#181A1B", borderColor:'#3C4144' }} onChange={(evt) => this.state.url = evt.target.value}
                                              placeholder="Video URL"/>
                            </Form.Group>
                        </Form>
                    </Row>
                    <Row className={"justify-content-md-center"}>
                        <Button variant={"primary"} onClick={() => {
                            console.log(this.state.url);
                            this.setState({'room': (<PartyRoom url={this.state.url_formatter.rewrite_url(this.state.url)} title={this.state.title} name={this.state.name}/>),
                                "room_set":true});
                        }
                        }>Start Party</Button>
                    </Row>
                            <br />
                        </Col>

                        {/* <Col md={2}>
                        </Col> */}
                        <Col md={4} className={'m-3 p-3   rounded'} style={{ backgroundColor: "#2B2F31"}}  >
                            <br />
                            <Row className={"justify-content-md-center"}>
                                <h2><b>Join A Party</b></h2>
                            </Row>
                    <Row className={"justify-content-md-center"}>
                        <Form>
                                    <Form.Group controlId="landingForm.ControlInput1">
                                        <Form.Label className={"form_style"}>Your Name</Form.Label>
                                        <Form.Control style={{ backgroundColor: "#181A1B", borderColor: '#3C4144' }} onChange={(evt) => this.state.name = evt.target.value}
                                            placeholder="Anonymous" />
                                    </Form.Group>
                            <Form.Group controlId="landingForm.ControlInput2">
                                <Form.Label className={"form_style"}>Room ID</Form.Label>
                                        <Form.Control style={{ backgroundColor: "#181A1B", borderColor: '#3C4144', color:'#000000' }}  onChange={(evt) => this.state.room_id = evt.target.value}
                                              placeholder="Room Id"/>
                            </Form.Group>
                        </Form>
                    </Row>
                    <Row className={"justify-content-md-center"}>
                        <Button variant={"primary"}  onClick={() => {
                            console.log(this.state.url);
                            this.setState({"room_set":true,'room': (<PartyRoom name={this.state.name} room_id={this.state.room_id} is_join={true}/>)});
                        }
                        }>Join Party</Button>
                    </Row>
                            <br />
                        </Col>
                    <br/>
                    </Row>
                    <br />
                    <br />
                    <br />
                    <Row>
                        <Col md={1}>

                        </Col>
                        {/* <div className=...
       style={{
           , background: `url(${Background})`
              background: `url(${Background})`,
            }}
    > */}
                        <Col md={10} className={'m-3 p-5   rounded'} style={{ backgroundColor: "#2B2F31" }}  >
                            <h1> <b>Night's Watch Party</b></h1>
                            <br/>
                            <p className={'descp'} >
                                Their are 19 towers along the Wall, manned by the Night's Watch.
                                <br/> <br/>
                                Seperated from their brothers, spread thin all along the Wall into more castles than the Watch can staff sufficiently - the silence, loneliness, and isolation are enough to drive a man insane.
                                <br/> <br />
                                Besides, for the greater part of the year there is no wildling activity, and the brothers of The Watch drown in boredom. 
                                <br/> <br />
This is a tool for the brotherhood to catch a reprieve. Using the magic of the Three Eyed Raven, it allows the brothers to watch movies and videos together, and join each other in conversation. Separated physically, united virtually, this is one of the thin barriers keeping the men from insanity. </p>
                        </Col>
                        <Col md={1}>

                        </Col>
                    </Row>
                    <br />
                    <br />
                    <Row>
                        <Col md={1}>

                        </Col>
                        {/* <div className=...
       style={{
           , background: `url(${Background})`
              background: `url(${Background})`,
            }}
    > */}
                        <Col md={10} className={'m-3 p-5 justify-content-md-center  rounded'} style={{ backgroundColor: "#2B2F31" }}  >
                            <h1> <b>Creaters</b></h1>
                            <div class="drogon"><img src="drogon.png" /></div>
                            <div class="house-lists">
                                <div class="house" style={{
                                    background: `url(${Pawan})`
                                }}  >
                                    <div class="house-inner">
                                        <div class="sigil"><img   src='pages/sigil/stark.png'  /></div>
                                        <div class="house-name">Stark</div>
                                        <h2>Pawan Kholiya</h2>
                                    </div>
                                </div>
                                <div class="house" style={{
                                    background: `url(${Background})`}}  >
                                    <div class="house-inner">
                                        <div class="sigil"><img src="/pages/sigil/sigil-targaryen.png" /></div>
                                        <div class="house-name">Targaryen</div>
                                        <h2>Pradyumn Gupta</h2>
                                    </div>
                                </div>
                                <div class="house" style={{
                                    background: `url(${Background})`}}>
                                    <div class="house-inner">
                                        <div class="sigil"><img src="sigil/sigil-lannister.png" /></div>
                                        <div class="house-name">Lannister</div>
                                        <h2>Lakshay Singhal</h2>
                                    </div>
                                </div>
                                <div class="house" style={{
                                    background: `url(${Hritvik})`}}>
                                    <div class="house-inner">
                                        <div class="sigil"><img src="sigil/sigili-baratheon.png" /></div>
                                        <div class="house-name">Baratheon</div>
                                        <h2>Hritvik Kaushik</h2>
                                    </div>
                                </div>
                               
                            </div>
                            
                        </Col>
                        <Col md={1}>

                        </Col>
                    </Row>
                    <br />

                    <br /><br />

                </div>

            );
        }
        return(
            <div>
                <Container fluid style={{ background: `url(${Background})`,backgroundAttachment:'fixed',backgroundSize:'cover'}}>

                    {pre_room}
                    <Row className={"justify-content-md-center"}>
                        {this.state.room}
                    </Row>



                </Container>

            </div>
        );
    }
}

export default LandingPage;