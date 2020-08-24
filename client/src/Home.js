import React, {Component,useRef} from 'react';
import "./styles.css";
import FullScreenOverlay from './overlay.js'
import Model from './Model.js'

const OverlayButton =({onClick}) => (
  <div onClick={onClick} class="wrapper">
  <div class="link_wrapper">
    <a class="close" href="javascript:void(0)">OPEN</a>
    <div class="icon">
      <svg class ="new" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 268.832 268.832">
        <path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z"/>
      </svg>
    </div>
  </div>

</div>
)
export default class Home extends Component{
  constructor(props){
    super(props)
    this.state = {
      overlay:true
    }
    this.buttonHandler = this.buttonHandler.bind(this)

  }
  buttonHandler(){
    this.setState({overlay:!this.state.overlay});

  }
  componentDidMount(){

  }
  render(){
    return (
      <div>

      {this.state.overlay?<div><OverlayButton onClick= {this.buttonHandler}/><FullScreenOverlay/></div>:<div></div>}
      <Model/>
      </div>
    );
  }

}
