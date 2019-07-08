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



//Beware things are hardcoded :

const PressfPage = () => {

  // HARDCODED ABI :



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

//HARDCODED CONTRACT ADDRESS
0xe80F72a6564e2015Fe51Ce03D15f189BABf4dEa2
//const contractAddress = '0xa14555fa51668f63e82c3c8716da6c3001477cbd';
//const contractAddress = '0x75E926820d740537F7377785452b9800892370f1';
const contractAddress = '0xe80F72a6564e2015Fe51Ce03D15f189BABf4dEa2';

  const [newMessage, setNewMessage] = useState("");
  let currentChatLog = [];

  const handleNewMessage = async (newMessage) => {
    setNewMessage(newMessage);


    const contract = await new web3.eth.Contract(abi, contractAddress);


      const accounts = await web3.eth.getAccounts();
    
    //console.log('ABI : ', abi);
    //console.log("Account 0 : ", accounts[0]);
    //console.log("contrac.method : ", contract.methods);
    //console.log("parent message :" + newMessage);
    //console.log("contrat : ", contract);
    //console.log("contract address : ", contractAddress, "fin du log puis on tate les events");


    //We call the EVENT here :


    try {
      await contract.methods.setmessage(newMessage).send({
        from: accounts[0]
      });
    } catch (e) {
      console.log("event not emmited : ", e);
    }


      //Get past events :
    await contract.getPastEvents(
      'allEvents',
      {
        fromBlock: 0,
        toBlock: 'latest'
      })
      .then(events => {
        console.log("event length : ", events.length)
      })
      .catch((err) => console.log(err));





      const subscription = await web3.eth.subscribe('logs', {
        fromBlock: 0
      }, (error, result) => {
          if (!error) {
            console.log("le resultat de la subscription : ", result);
          }else{
            console.error("l'erreur : ", error);
          }
      })
      .on("data", (log) => {
        console.log("le log des nouvelles data de la subscription : ", log);
        console.log("ok la on va parser : ", JSON.stringify(accounts, null, 4), "GROBEL", web3.utils.hexToAscii(log.data));
        messageSender = JSON.stringify(accounts, null, 4);
        currentChatLog.push(JSON.stringify(accounts, null, 4), newMessage);
        //currentChatLog.push[(newMessage)];
      })

      console.log("les logs du chat : ", currentChatLog);

      //subscription;

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

  //END OF HANDLE NEW_MESSAGE

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


//GANACHE SETUP :

  // HARDCODED ABI :

/*

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
  
  //HARDCODED CONTRACT ADDRESS
  const contractAddress = '0xa14555fa51668f63e82c3c8716da6c3001477cbd';
  
  */