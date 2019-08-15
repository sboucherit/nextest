import React, { useState, useEffect } from 'react';
import Layout from '../components/myLayout.js';
import MesssageBox from '../components/messageBox';
import ChatBox from '../components/chatBox';
import {loadContract, accounts, contract} from '../services/contractInstance';



  //Get contract data from contractInstance
  const getContract = async () => {
    try {
      await loadContract();
    }
    catch(err) {
      console.log("getContract call error : ", err);
    }
  }


  let chatMsgObj = {
    msgObj: "",
    addrObj: ""
  };


  
const PressfPage = () => {



  //hook initialization

  let [newMessage, setNewMessage] = useState("");
  let [chatHistory, setChatHistory] = useState([]);


useEffect(() => {
  getContract();
}, []);


  //Cette partie  pourrait etre en dehors de handleNewMessage ?

  //getEvent and build chat history
  const getEvent = () => {

//avant :
// contract.once('NewMessage', function(error, event){
    contract.once('NewMessage', {
      filter: []
    }, function(error, event){

      chatMsgObj.msgObj=event.returnValues._message;
      chatMsgObj.addrObj=event.returnValues._msgAddress;

      //Send a deep copy of the object :
      chatMsgObj = JSON.parse(JSON.stringify(chatMsgObj));
      setChatHistory([...chatHistory, chatMsgObj])

      console.log("chatHistory : ", chatHistory);
    });
  
  }


//---------------------- HANDLE NEW MESSAGE -------------------------\\

  const handleNewMessage = async (newMessage) => {
    setNewMessage(newMessage);
    
    console.log("handleNewMessage function called");

  //get Events :

  try{
    getEvent();

  } catch(e) {
    console.log("Cannot call getEvent() : ", e);
  }


//SET NEW MESSAGE

try {
  await contract.methods.setmessage(newMessage).send({
    from: accounts[0]
  });
} catch (e) {
  console.log("event contract.methods.setmessage not emmited : ", e);
}

}



  //------------------------- FINAL RETURN -------------------------\\
  return (

    <Layout>
      <ChatBox 
        //onNewEvent={getEvent}
        chatHistory={chatHistory}
      />
      <MesssageBox
        onNewMessage={handleNewMessage}
        newMessage={newMessage}
        setNewMessage={setNewMessage}
      />
  
    </Layout>
  );
}


export default PressfPage;

/* poubelle :

-------------------
  //contract.events.allEvents()
contract.events.NewMessage()
  .on('data', (event) => {
    console.log("resultat des events : ", event);
    console.log("GROBEL DE MESSAGE : ", event.returnValues._message, "GROBEL DE ADDRESSE : ", event.returnValues._msgAddress);
  })
  .on('error', err => {throw Error(err)});

---------------------------

*/