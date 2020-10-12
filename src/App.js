import React from 'react';
import logo from './logo.svg';
import './App.css';
import Background from './background.png';


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Header from "./components/Header";
import Footer from "./components/Footer";
import VideoPlayer from "./components/VideoPlayer";
import LandingPage from "./pages/LandingPage";

import 'bootstrap/dist/css/bootstrap.min.css';
import HowToUse from "./pages/HowToUse";
import Suggestions from "./pages/Suggestions";


function App() {
    return (
        <Router>
            <div style={{ backgroundColor: '#181A1B' }}>
                <Header/>
                <Container fluid style={{ backgroundColor: '#181A1B' }}>

                    <Switch>
                        {/* <Route path={"/suggestions"}>
                            <Suggestions/>
                        </Route>
                        <Route path={"/about"}>
                            <h1>ABOUT</h1>
                        </Route>
                        <Route path={"/how_to_use"}>
                            <HowToUse/>
                        </Route> */}
                        <Route path={"/"}>
                            <LandingPage style={{ backgroundColor: '#181A1B' }} />
                        </Route>
                    </Switch>
                </Container>
            </div>
        </Router>
    );
}

export default App;
