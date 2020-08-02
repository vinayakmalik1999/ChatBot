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
      message: 'Hi {previousValue}, what would you like to do today!',
      trigger: '4',
    },
    {
      id:'4',
      options:[
        {
          value:'navigation',
          label:'Navigation',
          trigger:'navi'
        },
        {
          value:'exploring website',
          label:'Exploring Website',
          trigger:'explor'
        },
        {
          value:'other',
          label:'Other Help',
          trigger:'other'
        }
      ]
    },
    {
      id:'navi',
      message:'where do you want to go',
      trigger:'5'
    },
    {
      id:'5',
      user:true,
      trigger:'6'
    },
    {
      id:'6',
      message:'not implemented yet',
      trigger:'1'
    },
    {
      id:'explor',
      message:'not implemented yet',
      trigger:'1'
    },
    {
      id:'other',
      message:'not implemented yet',
      trigger:'1'
    }
    ];

   return <ChatBot steps={steps} cache = {true}  recognitionEnable={true} recognitionLang={'en-IN	'}{...config} />;
  }
  export default Chatbot;
