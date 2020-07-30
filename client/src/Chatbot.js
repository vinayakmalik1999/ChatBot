import ChatBot from 'react-simple-chatbot';
import React, { Component }  from 'react';
function Chatbot(props) {
   const config = {
     width: "400px",
     height: "500px",
     floating: true
   };
   const steps = [
     {
      id: '1',
      message: 'What is your name?',
      trigger: '2',
    },
    {
      id: '2',
      user: true,
      trigger: '3',
    },
    {
      id: '3',
      message: 'Hi {previousValue}, nice to meet you!',
      end: true,
    },
    ];

   return <ChatBot steps={steps} cache = {true}  recognitionEnable={true} {...config} />;
  }
  export default Chatbot;
