import React, {Component} from 'react';
import {Suspense} from "react";
import Loading from './Loading.js'
import Model from './Model.js'
import { Canvas,useLoader } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import "./styles.css";
import ChatBot from "./Chatbot.js"
import Iframe from 'react-iframe'
var x = document.getElementsByClassName("example");
class App extends Component{
  constructor(props){
    super(props)
  }
  componentDidMount(){
    
  }
  render(){
    return(


      <Iframe url="https://app.modelo.io/embedded/uYsMnxC28k?viewport=true&autoplay=false&autoRotate=false&hideTools=false"
        width="100%"
        height="100%"
        id="myId"
        className="myClassname"
        display="initial"
        allowfullscreen
        webkitallowfullscreen
        mozallowfullscreen
        position="relative"/>



    )
  }

}

export default App;
