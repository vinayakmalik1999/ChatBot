import React, {Component} from 'react';
import {Suspense} from "react";
import Loading from './Loading.js'
import Model from './Model.js'
import { Canvas,useLoader } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import "./styles.css";
import ChatBot from "./Chatbot.js"

class App extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div>
      <Canvas style={{ background: "#171717" }}>
      <directionalLight intensity={0.5} />
      <Suspense fallback={<Loading />}>
        <Model />
      </Suspense>
    </Canvas>
      <ChatBot/>
      </div>
    )
  }

}

export default App;
