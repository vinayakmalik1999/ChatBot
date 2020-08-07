import React, {Component,useRef} from 'react';
import { Canvas, useLoader, useFrame } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import "./styles.css";
import model from "./models/arwing.glb"
import Iframe from 'react-iframe'


export default class Model extends Component{
  constructor(props){
    super(props)
    this.state = {
      overlay:false
    }
  }
  componentDidMount(){
    var iframe = document.getElementById("iframe");
    var header = iframe.contentWindow.document.getElementsByClassName("branding-watermark branding-watermark--isFreeEmbed");
    console.log("here IT IS   S S S S S S S")
    console.log(header)
  }
  render(){
    return (
      <Iframe url="https://app.modelo.io/embedded/pfLTz6QhM9?viewport=true&autoplay=true&autoRotate=false&hideTools=false&c_at0=-179.03193126224065&c_at1=9.803510396336913&c_at2=29.51814399236105&c_theta=47.879316617892975&c_phi=0.1511635645498493&c_dis=503.90612038046754"
        width="100%"
        height="100%"
        id="iframe"
        className="model"
        display="initial"
        allowfullscreen
        webkitallowfullscreen
        mozallowfullscreen
        position="relative"/>

    );
  }

}
