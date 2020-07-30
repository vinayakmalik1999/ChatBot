import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import ChatBot from "./Chatbot.js"

class App extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <ChatBot/>
    )
  }

}

export default App;
