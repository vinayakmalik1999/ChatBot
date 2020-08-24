import React, {Component,useRef} from 'react';
import "./styles.css";
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Card from 'react-bootstrap/Card'
import ReactPlayer from 'react-player/lazy'
export default class New extends Component{
  constructor(props){
    super(props)
    this.state = {
      overlay:false
    }
  }
  render(){
    return (
      <div class="tabs-container">
      <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
        <Tab eventKey="home" title="Home">
          Blasmaslfaksdnjkas
        </Tab>
        <Tab eventKey="profile" title="Profile">
          dasdasdmasdnkjasdn
        </Tab>
        <Tab eventKey="contact" title="Contact" disabled>
          adasndbasjkdnjkasndjkasjhdnjkas
        </Tab>
      </Tabs>
      </div>

    );
  }

}
