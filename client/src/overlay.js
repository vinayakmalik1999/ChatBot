import React, {Component} from 'react';
import "./overlay.css"
import img from './images/hospital final static image.JPG'
export default class Overlay extends Component{
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
    <div id="myNav" class="overlay">
     <img src={img} class="overlayimg"/>
    </div>

    );
  }

}
