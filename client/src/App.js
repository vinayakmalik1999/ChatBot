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
import FullScreenOverlay from './overlay.js'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import ReactPlayer from 'react-player/lazy'

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
const NavButton = ({ onClick, isDisplayed }) => (

  !isDisplayed ?
  <Button variant="outline-dark" onClick={onClick}>
    Nav
  </Button>: <div></div>
);
const SideNav = ({onClick}) => (
  <div id="mySidenav" class="sidenav">
  <a href="javascript:void(0)" class="closebtn" onClick={onClick}>&times;</a>
  <Accordion>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
        Drone
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus</p> <ReactPlayer width = "auto" url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
      <a href = "javascript:void(0)">Link to Demo</a>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
        Geriatrics
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>Demo</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="2">
        Computer Vision
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="2">
      <Card.Body>Demo</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="3">
        Digital Twin
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="3">
      <Card.Body>Demo</Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
  </div>
)

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      overlay:true,
      navIsOpen:false,
    }
    this.buttonHandler = this.buttonHandler.bind(this)
    this.openNav = this.openNav.bind(this)
    this.closeNav = this.closeNav.bind(this)
  }

  buttonHandler(){
    this.setState({overlay:!this.state.overlay});

  }

openNav(){
this.setState({navIsOpen:!this.state.navIsOpen})
document.getElementById("mySidenav").style.width = "37%";
 document.getElementById("root").style.marginLeft = "37%";
}
closeNav(){
  this.setState({navIsOpen:!this.state.navIsOpen})
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("root").style.marginLeft = "0";
}
  render(){
    return(


      <div>
      <div class="overflow"><Button variant="primary">DRONE</Button></div>
      {this.state.overlay?<div><Button variant="primary" onClick= {this.buttonHandler}>X</Button><FullScreenOverlay/></div>:<div></div>}
      <Model/>
      <ChatBot/>
      <NavButton onClick={this.openNav} isDisplayed={this.state.navIsOpen}/>
      <SideNav onClick={this.closeNav}/>
      </div>


    )
  }

}

export default App;
