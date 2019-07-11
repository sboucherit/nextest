import React, { useState } from 'react';
import Layout from '../components/myLayout.js';
import MesssageBox from '../components/messageBox';
import ChatBox from '../components/chatBox';
import Web3 from 'web3';
//import abi from '../../build/contracts/Uchat.json';


//import Web3Container from '../lib/Web3Container';
//on gere tou web3 la :

//const Web3 = require('web3');
//const web3 = new Web3('http://localhost:7545');

//------------------------- WEB3JS INITALIZATION -------------------------\\

let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  // We are in the browser and metamask is running.
  web3 = new Web3(window.web3.currentProvider);
  //web3 = new Web3.providers.HttpProvider('http://localhost:7545');
  //console.log('ICI TEST PROVIDEEEEEEEEEEEEER : ', window.web3.currentProvider)

} else {
  // We are on the server *OR* the user is not running metamask
  const provider = new Web3.providers.HttpProvider(
    //'https://rinkeby.infura.io/orDImgKRzwNrVCDrAk5Q'
    'http://localhost:7545'

  );
  web3 = new Web3(provider);
}

//------------------------- END OF WEB3JS INITALIZATION -------------------------\\


let chatMsgLog;
let currentChatLog = [];

//------------------------- EVENT SUBSCRIPTION -------------------------\\

const subscription = web3.eth.subscribe('logs', {
  fromBlock: 0
}, (error, result) => {
  if (!error) {
    // console.log("le resultat de la subscription : ", result);
    console.log("subscription passed");
    console.log("ID de la subscription : ", result.id)
  } else {
    console.error("l'erreur : ", error);
  }
})
  .on("data", (log) => {

    console.log("APPEL 1 FOIS")

    //TMP OUT :
    /*      
    console.log("le log des nouvelles data de la subscription : ", log);
      console.log("ok la on va parser : ", JSON.stringify(accounts, null, 4), "GROBEL", web3.utils.hexToAscii(log.data));
    
      messageSender = JSON.stringify(accounts, null, 4);
    chatMsgLog = web3.utils.hexToAscii(log.data);
    
      currentChatLog.push([...currentChatLog, {
        messageSender
      },
      {
        chatMsgLog
      }]);
    
      currentChatLog.push[(newMessage)];
    */

  })





//Beware things are hardcoded :

const PressfPage = () => {

  //------------------------- HARDCODED ABI -------------------------\\


  let abi = [
    {
      "constant": false,
      "inputs": [
        {
          "name": "message",
          "type": "string"
        }
      ],
      "name": "setmessage",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "message",
          "type": "string"
        },
        {
          "indexed": false,
          "name": "msgAddress",
          "type": "address"
        }
      ],
      "name": "newMessage",
      "type": "event"
    }
  ]

  //------------------------- HARDCODED CONTRACT ADDRESS -------------------------\\

  const contractAddress = '0xe80F72a6564e2015Fe51Ce03D15f189BABf4dEa2';

  let [newMessage, setNewMessage] = useState("");
  let [chatHistory, setChatHistory] = useState("");

  let nbEvent;



  //------------------------- HANDLE NEW MESSAGE -------------------------\\

  const handleNewMessage = async (newMessage) => {
    setNewMessage(newMessage);

    let messageSender = null;

    const contract = await new web3.eth.Contract(abi, contractAddress);
    const accounts = await web3.eth.getAccounts();


    console.log("APPEL 3 FOIS");
    //We call the EVENT here :


    try {
      await contract.methods.setmessage(newMessage).send({
        from: accounts[0]
      });
    } catch (e) {
      console.log("event not emmited : ", e);
    }


    //await getMessageHistory(contract, accounts);
  }

  //END OF HANDLE NEW_MESSAGE

    //------------------------- GET ALL MESSAGES V2 -------------------------\\
const getAllMessages = async (contract, accounts) => {
  console.log("le log des nouvelles data de la subscription : ", log);
  console.log("ok la on va parser : ", JSON.stringify(accounts, null, 4), "GROBEL", web3.utils.hexToAscii(log.data));

  messageSender = JSON.stringify(accounts, null, 4);
chatMsgLog = web3.utils.hexToAscii(log.data);


}


  //------------------------- GET ALL MESSAGES V1 -------------------------\\
  const getMessageHistory = async (contract, accounts) => {

   // console.log("getmsg consolelog", newMessage);

    //Get past events :
    await contract.getPastEvents(
      'allEvents',
      {
        fromBlock: 0,
        toBlock: 'latest'
      })
      .then(events => {
        //console.log("event length : ", events.length)
        nbEvent = events.length;
        //console.log("on log ici en dehors : ", chatHistory);
      })
      .catch((err) => console.log(err));

    //console.log("les logs du chat : ", currentChatLog);

    //get all Event :
    /*       contract.events.allEvents()
          .on('data', (event) => {
            console.log("resultat des events : ", event);
            for(let i=0; i < event.length; i++){
              console.log("le all events : ", allEvents[i]["args"])
            }
          })
          .on('error', console.error);
     */




    //contract.setmessage(newMessage);
    // alert('A message was sent: ' + newMessage);
  }

  //------------------------- FINAL RETURN -------------------------\\
  return (

    <Layout>
      <ChatBox />
      <MesssageBox
        onNewMessage={handleNewMessage}
        newMessage={newMessage}
        setNewMessage={setNewMessage}
      />
    </Layout>
  );
}


export default PressfPage;