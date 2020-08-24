import React, {Component} from 'react';
import "./styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'
import Button from 'react-bootstrap/Button'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import ReactPlayer from 'react-player/lazy'
import { TransitionGroup, CSSTransition } from "react-transition-group";
import ContosoLogo from "./images/1.png"
import New from './New.js'
import Home from './Home.js'

import {ReactComponent as ReactLogo} from './images/technology.svg';
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Link
} from "react-router-dom";


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


  !isDisplayed?
  <button class="bnt1" onClick={onClick}>DRONE</button>:<div></div>

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
  const Techbutton5 = ({onClick, isDisplayed }) => (
    !isDisplayed?
    <button class="bnt5" onClick={onClick}>GERIATRICS</button>:<div></div>
  )
const SideNav = ({onClick,isDisplayed2,isDisplayed3,isDisplayed4}) => (
  <div id="mySidenav" class="sidenav">
  <a href="javascript:void(0)" class="closebtn" onClick={onClick}>&times;</a>


  </div>
)
const Overlay = ({onClick,isDisplayed,isDisplayed1,isDisplayed2,isDisplayed3,isDisplayed4,isDisplayed5}) => (
  isDisplayed?
  <div id="myNav" class="overlay" onClick={onClick}>
  <Tech1 isDisplayed={isDisplayed1}/>
  <Tech2 isDisplayed={isDisplayed2}/>
  <Tech3 isDisplayed={isDisplayed3}/>
  <Tech4 isDisplayed={isDisplayed4}/>
  <Tech5 isDisplayed={isDisplayed5}/>
  </div>:<div></div>
)

const Tech1 = ({isDisplayed}) => (
  isDisplayed?
  <Card bsPrefix="Tech1">
  <Card.Title>Drone</Card.Title>
      <Card.Body bsPrefix="cardBodyCustom"><ReactPlayer class="player"  width = "auto" height="375px" url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
      </Card.Body>
      <Card.Footer align="right"><a href = "javascript:void(0)">Link to Demo</a></Card.Footer>
  </Card>:<div></div>



)
const Tech2 = ({isDisplayed}) => (
  isDisplayed?
  <Card bsPrefix="Tech1">
  <Card.Title>Blockchain</Card.Title>
      <Card.Body bsPrefix="cardBodyCustom"><ReactPlayer class="player"  width = "auto" height="375px" url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
      </Card.Body>
      <Card.Footer align="right"><a href = "javascript:void(0)">Link to Demo</a></Card.Footer>
      </Card>:<div></div>
)
const Tech3 = ({isDisplayed}) => (
  isDisplayed?
  <Card bsPrefix="Tech1">
  <Card.Title>Vision</Card.Title>
      <Card.Body bsPrefix="cardBodyCustom"><ReactPlayer class="player"  width = "auto" height="375px" url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
      </Card.Body>
      <Card.Footer align="right"><a href = "javascript:void(0)">Link to Demo</a></Card.Footer>
        </Card>:<div></div>
)
const Tech4 = ({isDisplayed}) => (
  isDisplayed?
  <Card bsPrefix="Tech1">
  <Card.Title>Digital Twin</Card.Title>
      <Card.Body bsPrefix="cardBodyCustom"><ReactPlayer class="player"  width = "auto" height="375px" url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
      </Card.Body>
      <Card.Footer align="right"><a href = "javascript:void(0)">Link to Demo</a></Card.Footer>
  </Card>:<div></div>
)
const Tech5 = ({isDisplayed}) => (
  isDisplayed?
  <Card bsPrefix="Tech1">
  <Card.Title>Geriatrics</Card.Title>
      <Card.Body bsPrefix="cardBodyCustom"><ReactPlayer class="player"  width = "auto" height="375px" url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
      </Card.Body>
      <Card.Footer align="right"><a href = "javascript:void(0)">Link to Demo</a></Card.Footer>
  </Card>:<div></div>
)


class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      overlay:true,
      techoverlay:false,
      navIsOpen:false,
      istechoneOpen:false,
      istechtwoOpen:false,
      istechthreeOpen:false,
      istechfourOpen:false,
      istechfiveOpen:false,
      techShow:false,
    }
    this.openNav = this.openNav.bind(this)
    this.closeNav = this.closeNav.bind(this)
    this.opentechhOne = this.opentechhOne.bind(this)
    this.opentechhTwo = this.opentechhTwo.bind(this)
    this.opentechhThree = this.opentechhThree.bind(this)
    this.opentechhFour = this.opentechhFour.bind(this)
    this.opentechhFive = this.opentechhFive.bind(this)
    this.handleTechShow = this.handleTechShow.bind(this)
    this.closetechoverlay = this.closetechoverlay.bind(this)
  }


  handleTechShow(){
    if(this.state.techShow===false){
      this.setState({istechoneOpen:false,
                     istechtwoOpen:false,
                     istechthreeOpen:false,
                     istechfourOpen:false,
                     istechfiveOpen:false})



  }}
opentechhOne(){
  // if(!this.state.navIsOpen){
  //   this.openNav()
  // }
  // else {
  //   console.log("kj")
  // }
  if(!this.state.techoverlay){
    this.opentechoverlay()
  }
  if(this.state.navIsOpen){
    this.closeNav()
  }

  this.setState({istechoneOpen:true})
  this.setState({
    istechtwoOpen:false,
    istechthreeOpen:false,
    istechfourOpen:false,
    istechfiveOpen:false})

}
opentechoverlay(){
  this.setState({techoverlay:true})
}
closetechoverlay(){
  this.setState({techoverlay:false,
                 techShow:false})
                 this.handleTechShow()
}
opentechhTwo(){
  if(!this.state.techoverlay){
    this.opentechoverlay()
  }

  this.setState({istechtwoOpen:true})
  this.setState({
    istechoneOpen:false,
    istechthreeOpen:false,
    istechfourOpen:false})

}
opentechhThree(){
  if(!this.state.techoverlay){
    this.opentechoverlay()
  }
  if(this.state.navIsOpen){
    this.closeNav()
  }
  this.setState({istechthreeOpen:true})
  this.setState({
    istechtwoOpen:false,
    istechoneOpen:false,
    istechfourOpen:false,
    istechfiveOpen:false})


}
opentechhFour(){
  if(!this.state.techoverlay){
    this.opentechoverlay()
  }
  if(this.state.navIsOpen){
    this.closeNav()
  }
  this.setState({istechfourOpen:true})
  this.setState({
    istechtwoOpen:false,
    istechthreeOpen:false,
    istechoneOpen:false,
    istechfiveOpen:false})


}
opentechhFive(){
  if(!this.state.techoverlay){
    this.opentechoverlay()
  }
  if(this.state.navIsOpen){
    this.closeNav()
  }
  this.setState({istechfiveOpen:true})
  this.setState({
    istechtwoOpen:false,
    istechthreeOpen:false,
    istechoneOpen:false,
    istechfourOpen:false})


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
      <Router>
      <img class = "logo" src ={ContosoLogo}/>
      <Card bsPrefix="pogo"></Card>

      <Techbutton1 onClick={this.opentechhOne} isDisplayed={this.state.istechoneOpen}/>
      <Techbutton2 onClick={this.opentechhTwo} isDisplayed={this.state.istechtwoOpen}/>
      <Techbutton3 onClick={this.opentechhThree} isDisplayed={this.state.istechthreeOpen}/>
      <Techbutton4 onClick={this.opentechhFour} isDisplayed={this.state.istechfourOpen}/>
      <Techbutton5 onClick={this.opentechhFive} isDisplayed={this.state.istechfiveOpen}/>
      <Overlay onClick={this.closetechoverlay} isDisplayed={this.state.techoverlay} isDisplayed1={this.state.istechoneOpen} isDisplayed2={this.state.istechtwoOpen} isDisplayed3={this.state.istechthreeOpen} isDisplayed4={this.state.istechfourOpen} isDisplayed5={this.state.istechfiveOpen}/>
        <SideNav onClick={this.closeNav}  isDisplayed2={this.state.istechtwoOpen} isDisplayed3={this.state.istechthreeOpen} isDisplayed4={this.state.istechfourOpen}/>
      <Switch>
 <Route exact path="/" component={Home}/>
 <Route path="/new" component={New}/>

</Switch>

</Router>



      </div>


    )
  }

}

export default App;
