import React from "react";
import Container from "react-bootstrap/cjs/Container";
import Card from "react-bootstrap/cjs/Card";
import Form from 'react-bootstrap/cjs/Form';
import Dropdown from "react-bootstrap/cjs/Dropdown";
import Button from "react-bootstrap/cjs/Button";


import 'bootstrap/dist/css/bootstrap.min.css';

let messages = [



]

class ChatRoom extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'chat': messages,
            'cur_msg':"",
            "database": props.database,
            'name': props.name,
            "color":"info",
            "text_color":"white",
        };
        this.chatRef = React.createRef();
        this.renderAllMessages = this.renderAllMessages.bind(this);
        this.scrollToBottom = this.scrollToBottom.bind(this);
        this.setChatColor = this.setChatColor.bind(this);

        setTimeout(()=>{
            this.state.database.state.ref.onSnapshot(doc => {
                let data = doc.data();
                if(data != undefined) {
                    this.setState({"chat": data['chats'],'pauseReq':data["pauseReq"]});
                }
            })

        },2000)
    }

    displayMessage(msg,isLast){
        if(!isLast) {
            return (
                <Container>
                    <div className={'message'}>
                        <div className={'mheader'}>
                            {msg.from}
                        </div>
                        <div className={'mmessage'} >
                            {msg.text}
                        </div>
                    </div>

                </Container>
            );
        } else {
            return (
                <div ref={this.chatRef}>
                <Container>


                        <div className={'message'} >
                            <div className={'mheader'}>
                                {msg.from}
                            </div>
                            <div className={'mmessage'} >
                                {msg.text}
                            </div>
                        </div>

                </Container>
                </div>
            );

        }
    }

    renderAllMessages(){
        // setTimeout(function () { alert("Hello"); }, 3000);
        let rendered = [];

        this.state.chat.forEach((msg,idx) => {
            if (msg.pause_request && msg.pause_request==true)
            {
                setTimeout(function () { alert("Hello"); }, 1000);
                msg.pause_request = false;
            }
            else
            rendered.push(this.displayMessage(msg,(idx == (this.state.chat.length - 1))));
        })

        console.log(this.chatRef);

        return rendered;//(<div id="chat_div" style={{"overflow-y":"scroll","height": "400px"}} >{rendered}</div>);

    }

    componentDidMount () {
        console.log("Component mounted");
        // setTimeout(this.scrollToBottom,1500)
    }
    componentDidUpdate () {
        console.log("Component updated");

        console.log("*************************");
            console.log(this.state);
        
        if(this.state.pauseReq){
            this.state.database.removepauseReq(this.state.room_id)
                var parent = document.getElementById('data')
                var el = document.createElement("p");
                /* <p class="p-2 bg-success white rounded" >
                <b>
                    Playing
                </b>
                </p> */
                if(document.getElementById('alert')==undefined)
                {
            el.setAttribute("class", "p-2 bg-danger white rounded");
                    el.setAttribute("id", "alert");
                el.innerHTML = "!! A User Requested Pause !!";
                setTimeout(function (el) {
                    el.parentNode.removeChild(el);
                }, 2000,el);
                parent.appendChild(el);
            }

        }

        // if (this.state.room_id) {
        //     console.log("*************************");
        //     console.log(this.state.database.ispauseReq());

        //     // if(this.state.database.ispauseReq())
        //     // {
        //     //     setTimeout(function () { alert("Hello"); }, 1000);
        //     //     this.state.database.removepauseReq(this.state.room_id)

        //     // }
        // }
        // setTimeout(this.scrollToBottom,1500)
    }
    scrollToBottom = () => {
        console.log("Scroll to bottom invoked")

        if(this.state.chat != [] && this.chatRef.current != null) {
            this.chatRef.current.scrollIntoView({behavior: "smooth"})
        }
    }

    setChatColor(color,text_color){
        this.setState({'color':color,'text_color':text_color});
    }

    render() {
        return(
            <div>
            <div className={'chatbox'} >
                <Container fluid>
                    
                    <div className={'chatt'} style={{"height": "500px"}} >{this.renderAllMessages()}</div>
                        <Form>
                            <Form.Group>
                                <Form.Control as={'textarea'} rows={'2'}
                                              placeHolder={'Enter Text to send to chat'}
                                              onChange={(evt)=>this.state.cur_msg = evt.target.value}
                                              onKeyDown={(evt)=>{
                                                  if(evt.key == "Enter" && this.state.cur_msg != "" && this.state.cur_msg !="\n"){
                                                      this.state.database.addChat({"from":this.state.name,"text":this.state.cur_msg,"color":this.state.color,
                                                          "text_color":this.state.text_color,"time":new Date()});
                                                      evt.target.value = "";
                                                  }
                                              }}

                                />
                                
                            </Form.Group>
                        </Form>
               



                </Container>

            </div>
                <Button variant={"primary"} className={'m-2 p-2'}
                    onClick={async () => this.state.database.addpauseReq()}
                >Request Pause ✋ </Button>
            </div>
        );
    }
}

export default ChatRoom;