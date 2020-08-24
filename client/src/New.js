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
      <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
        <Tab eventKey="home" title="tech1">
          <ReactPlayer class="player"  width = "auto" height="375px" url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
        </Tab>
        <Tab eventKey="profile" title="tech2">
          <ReactPlayer class="player"  width = "auto" height="375px" url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
        </Tab>
        <Tab eventKey="contact" title="tech3" >
          <ReactPlayer class="player"  width = "auto" height="375px" url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
        </Tab>
      </Tabs>
      </div>

    );
  }

}
