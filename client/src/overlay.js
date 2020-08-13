import React, {Component} from 'react';
import "./overlay.css"

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
    <div  id="myNav" class="overlay">
    </div>

    );
  }

}
