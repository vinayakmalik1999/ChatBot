import React, {Component,useRef} from 'react';
import "./styles.css";
import Iframe from 'react-iframe'


export default class Model extends Component{
  constructor(props){
    super(props)
    this.state = {
      overlay:false
    }
  }
  componentDidMount(){

  }
  render(){
    return (
      <Iframe url="https://3dwarehouse.sketchup.com/embed/2c683d71-d28d-45c0-874c-02b9e87a6f13"
        width="100%"
        height="100%"
        id="iframe"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
        className="model"
        display="initial"
        allowfullscreen
        webkitallowfullscreen
        mozallowfullscreen
        position="relative"/>

    );
  }

}
