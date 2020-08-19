import React, {Component} from 'react';
import Model from './Model.js'
import "./styles.css";
import ChatBot from "./Chatbot.js"
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'
import Button from 'react-bootstrap/Button'
import FullScreenOverlay from './overlay.js'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import ReactPlayer from 'react-player/lazy'
import { TransitionGroup, CSSTransition } from "react-transition-group";

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
const Techbutton1 = ({onClick, isDisplayed }) => (

  <TransitionGroup component={null}>
  <CSSTransition classNames="fade" timeout={300}>
  !isDisplayed?
  <button class="bnt1" onClick={onClick}>DRONE</button>:<div></div>
    </CSSTransition>
  </TransitionGroup>
)
  const Techbutton2 = ({onClick, isDisplayed }) => (
    !isDisplayed?
    <button class="bnt2" onClick={onClick}>BLOCKCHAIN</button>:<div></div>
  )
  const Techbutton3 = ({onClick, isDisplayed }) => (
    !isDisplayed?
    <button class="bnt3" onClick={onClick}>VISION</button>:<div></div>
  )
  const Techbutton4 = ({onClick, isDisplayed }) => (
    !isDisplayed?
    <button class="bnt4" onClick={onClick}>DIGITALTWIN</button>:<div></div>
  )
const SideNav = ({onClick}) => (
  <div id="mySidenav" class="sidenav">
  <a href="javascript:void(0)" class="closebtn" onClick={onClick}>&times;</a>

  </div>
)

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      overlay:true,
      navIsOpen:false,
      istechoneOpen:false,
      istechtwoOpen:false,
      istechthreeOpen:false,
      istechfourOpen:false,
      techShow:false,
    }
    this.buttonHandler = this.buttonHandler.bind(this)
    this.openNav = this.openNav.bind(this)
    this.closeNav = this.closeNav.bind(this)
    this.opentechhOne = this.opentechhOne.bind(this)
    this.opentechhTwo = this.opentechhTwo.bind(this)
    this.opentechhThree = this.opentechhThree.bind(this)
    this.opentechhFour = this.opentechhFour.bind(this)
    this.handleTechShow = this.handleTechShow.bind(this)
  }

  buttonHandler(){
    this.setState({overlay:!this.state.overlay});

  }
  handleTechShow(){
    if(this.state.techShow===false){
      this.setState({istechoneOpen:false,
                     istechtwoOpen:false,
                     istechthreeOpen:false,
                     istechfourOpen:false})



  }}
opentechhOne(){
  if(!this.state.navIsOpen){
    this.openNav()
  }
  else {
    console.log("kj")
  }
  this.setState({istechoneOpen:true})
  this.setState({
    istechtwoOpen:false,
    istechthreeOpen:false,
    istechfourOpen:false})

}
opentechhTwo(){
  if(!this.state.navIsOpen){
    this.openNav()
  }
  else {
    console.log("kj")
  }
  this.setState({istechtwoOpen:true})
  this.setState({
    istechoneOpen:false,
    istechthreeOpen:false,
    istechfourOpen:false})

}
opentechhThree(){
  if(!this.state.navIsOpen){
    this.openNav()
  }
  else {
    console.log("kj")
  }
  this.setState({istechthreeOpen:true})
  this.setState({
    istechtwoOpen:false,
    istechoneOpen:false,
    istechfourOpen:false})


}
opentechhFour(){
  if(!this.state.navIsOpen){
    this.openNav()
  }
  else {
    console.log("kj")
  }
  this.setState({istechfourOpen:true})
  this.setState({
    istechtwoOpen:false,
    istechthreeOpen:false,
    istechoneOpen:false})


}
openNav(){
  if(!this.state.navIsOpen){
    this.setState({navIsOpen:!this.state.navIsOpen})
  }
  else {
    console.log("kj")
  }
document.getElementById("mySidenav").style.width = "37%";
 document.getElementById("root").style.marginLeft = "37%";
}
closeNav(){
  //add all ribbons show
  this.setState({navIsOpen:!this.state.navIsOpen,
                  techShow:false})
                  this.handleTechShow()
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("root").style.marginLeft = "0";
}
  render(){
    return(


      <div>

      <Techbutton1 onClick={this.opentechhOne} isDisplayed={this.state.istechoneOpen}/>
      <Techbutton2 onClick={this.opentechhTwo} isDisplayed={this.state.istechtwoOpen}/>
      <Techbutton3 onClick={this.opentechhThree} isDisplayed={this.state.istechthreeOpen}/>
      <Techbutton4 onClick={this.opentechhFour} isDisplayed={this.state.istechfourOpen}/>

      {this.state.overlay?<div><Button variant="primary" onClick= {this.buttonHandler}>X</Button><FullScreenOverlay/></div>:<div></div>}
      <Model/>
      <ChatBot/>
      <SideNav onClick={this.closeNav}/>
      </div>


    )
  }

}

export default App;
