import React, {Component} from 'react';
import {Suspense} from "react";
import Loading from './Loading.js'
import Model from './Model.js'
import { Canvas,useLoader } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import "./styles.css";
import ChatBot from "./Chatbot.js"
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image'
import Img from './images/hospital-building-symbol-03.jpg'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'
import Button from 'react-bootstrap/Button'
import Iframe from 'react-iframe'

//var x = document.getElementsByClassName("example");
const popover = (
  <Popover id="popover-basic">
    <Popover.Title as="h3">Technology used</Popover.Title>
    <Popover.Content>
      And here's some <strong>amazing</strong> content. blah blah blah
    </Popover.Content>
  </Popover>
);

const Example = () => (
  <OverlayTrigger trigger="hover" placement="right" overlay={popover}>
    <Button variant="primary">Drone</Button>
  </OverlayTrigger>
);


class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      overlay:false
    }
  }
  componentDidMount(){
    //if(this.state.overlay == false){

  //  }

  }
  render(){
    return(
      <div>

      <Model/>
      <ChatBot/>

      </div>

    )
  }

}

export default App;
