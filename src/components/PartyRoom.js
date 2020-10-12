import React from "react";

import Container from "react-bootstrap/cjs/Container";
import Row from "react-bootstrap/cjs/Row";
import Col from "react-bootstrap/cjs/Col";
import Button from "react-bootstrap/cjs/Button";
import Form from "react-bootstrap/cjs/Form";
import InputGroupWithExtras from "react-bootstrap/cjs/InputGroup";

import 'bootstrap/dist/css/bootstrap.min.css';
import VideoPlayer from "./VideoPlayer";
import ChatRoom from "./ChatRoom";
import DatabaseBackend from "./DatabaseBackend";
import URLFormatter from "./URLFormatter";

class PartyRoom extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'room_id': props.room_id || "NO ROOM ID PROVIDED",
            'title': props.title || "White Walkers Party!",
            'url': props.url,
            'database': new DatabaseBackend(),
            'ref': "",
            'is_join': props.is_join || false,
            'name': props.name,
            'add_url':'',
            'play_mode':'pause',
            'url_formatter': new URLFormatter(),
        };
        this.isPauseRequested = this.isPauseRequested.bind(this);

        console.log(`IS JOIN ${this.state.is_join}`);


    }
    componentDidMount() {
        if(!this.state.is_join) {
            this.state.database.createRoom({
                "url": this.state.url, "title": this.state.title,
                "mode": "pause", "time": 0.000,
                "chats":[{"color":"info","text_color":"white","from":"White Walker's Party!","text":"Welcome to White Walker's Party for the Winter Is Comming!","title": this.state.title}],
                "video_list": [this.state.url],
                "pauseReq" : false,
            }).then(ref => {
                this.state.room_id = ref.id;
                console.log(ref.id);
                ref.onSnapshot(doc => {
                    console.log("Current data: ", doc.data());
                })
                this.setState({'room_id':ref.id});

                    ref.onSnapshot(doc => {
                        let data = doc.data();

                        if (data != undefined) {
                            if (data['mode'] != this.state.mode) {
                                this.setState({"play_mode": data['mode']})
                            }
                        }
                    })
            })


        } else {
            console.log('fetching room info')
            this.state.database.getRef(this.state.room_id).then(ref => {
                this.state.room_id = ref.id;
                ref.get().then(doc=>{
                    console.log(doc.data());
                    this.setState({'room_id':ref.id, url: doc.data['url'],title:doc.data['title']});
                })
            })


        }

    }

    isPauseRequested(){
        if(this.state.room_id)
        {
            console.log("*************************");
            console.log(this.state.database.ispauseReq());

            // if(this.state.database.ispauseReq())
            // {
            //     setTimeout(function () { alert("Hello"); }, 1000);
            //     this.state.database.removepauseReq(this.state.room_id)

            // }
        }

    }

    render() {

        let room_controls  = "";

        if(!this.state.is_join){
            room_controls = (
                <div  >
                    <Row>
                        
                        <Col md={"auto"}>
                        {/* <Button variant={"info"} onClick={()=>this.state.database.deleteRoom()}>Delete Room</Button> */}
                        </Col>
                        <Col md={"auto"}>
                            <InputGroupWithExtras>
                                <Form.Control style={{ backgroundColor: "#181A1B", borderColor: '#3C4144' }}
                                    onChange ={ evt => {this.state.add_url = evt.target.value}}
                                    placeholder={"Video URL"}>
                                </Form.Control>
                                <InputGroupWithExtras.Append>
                                    <Button variant={"primary"}
                                            onClick={()=>this.state.database.addVideo(this.state.url_formatter.rewrite_url(this.state.add_url))}
                                    >Add Video</Button>
                                </InputGroupWithExtras.Append>
                            </InputGroupWithExtras>

                        </Col>
                    </Row>
                </div>
            );

        }
        let status = '';
        if (this.state.play_mode.toUpperCase()==='PLAY')
        {
            status = (
                <p class="p-2 bg-success white rounded" >
                <b>
                    Playing
                </b>
                </p>

            );
        }
        else{
            status = (
                <p class="p-2 bg-warning white rounded" >
                    <b>
                        Paused
                    </b>
                </p>

            );
        }

        return(
            <Container fluid style={{ backgroundColor: '#181A1B' }}>
            <div>
                
                    <br/>
                    <Row className={"justify-content-md-center"}  >
                        <h1>{this.state.title}</h1>
                    </Row>
                    <Row id={'data'} >
                        <Col md={6} >
                            <p  >
                        Room-ID: {this.state.room_id}
                        </p>
                        </Col>
                        <Col md ={'auto'}>
                            <div>
                                {status}
                            {/* <p class="p-2 bg-warning rounded" >
                            {this.state.play_mode.toUpperCase()}
                            </p> */}
                            </div>
                        </Col>
                        <Col md = {'auto'}></Col>
                    </Row>
                    <Row >
                        <Col md={9}>
                            <VideoPlayer url={this.state.url} database={this.state.database} is_join={this.state.is_join}/>
                        </Col>
                        <Col md={3}>
                            <ChatRoom name={this.state.name} database={this.state.database}/>
                        </Col>
                    </Row>
                    <br/>
                    {room_controls}
                

            </div>
            <br></br>
                <br></br>
                <br></br>
                <br></br>
                {/* {this.isPauseRequested()} */}

            </Container >
        );
    }
}

export default PartyRoom;