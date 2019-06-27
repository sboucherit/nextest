import React, { useState } from 'react';
import Layout from '../components/myLayout.js';
import MesssageBox from '../components/messageBox';
import ChatBox from '../components/chatBox';
import Web3Container from '../lib/Web3Container'


const PressfPage = () => {
  const [newMessage, setNewMessage] = useState("");

  const handleNewMessage = (newMessage) => {
    setNewMessage(newMessage);
    console.log("le parent message :" + newMessage);
    // alert('A message was sent: ' + newMessage);

  }

  return (
    <Layout>
      <ChatBox/>
      <MesssageBox 
        onNewMessage={handleNewMessage}
        newMessage={newMessage}
        setNewMessage={setNewMessage}
      />
    </Layout> 
  );
}

export default PressfPage;

/* AVANT le grand genie :



import React, { useState, forwardRef,useRef, useImperativeHandle } from 'react';
import Layout from '../components/myLayout.js';
import MesssageBox from '../components/messageBox';
import ChatBox from '../components/chatBox';



const [newMessage, setNewMessage] = useState('');


const handleNewMessage = (newMessage) => {
  setNewMessage(newMessage);
  console.log("le parent message :" + newMessage);
  alert('A message was sent: ' + newMessage);

}



  //render() {
    return (
      <Layout>
       
        <ChatBox/>

        <MesssageBox onNewMessage={handleNewMessage} newMessage={newMessage}/>

      </Layout> 
    );
  //}
}

  export default PressfPage;





FIN Grand genie

  ==============================

Style :

        <style jsx>{`
        h1,
        a {
          font-family: 'Arial';
        }

        ul {
          padding: 0;
        }

        li {
          list-style: none;
          margin: 5px 0;
        }

        a {
          text-decoration: none;
          color: blue;
        }

        a:hover {
          opacity: 0.6;
        }
      `}</style>




============================================
Vieux :


export default function Pressf() {
return (

<Layout content={pressfPageContent} />
)    
}



APRES :

const PressfPage = () => {
constructor(props) {
  super(props)
  this.state = {
    newMessage: '',
  };

} 

const [newMessage, setNewMessage];


const handleNewMessage = (messageValue) => {
  setNewMessage({newMessage});
  console.log("le parent message :" + newMessage);
}



  //render() {
    return (
      <Layout>
       
        <ChatBox/>

        <MesssageBox onNewMessage={handleNewMessage}/>

      </Layout> 
    );
  //}
}

  export default PressfPage;

*/