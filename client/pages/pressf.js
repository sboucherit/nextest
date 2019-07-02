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

console.log('ici la new abi : ', abi);

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


// ABI :



const abi =[
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

const contractAddress = '0xa14555fa51668f63e82c3c8716da6c3001477cbd';




//Beware things are hardcoded :

const PressfPage = () => {


  const [newMessage, setNewMessage] = useState("");

  const handleNewMessage = (newMessage) => {
    setNewMessage(newMessage);


//fin gestion web3

const contract = new web3.eth.Contract(abi, contractAddress);

    const accounts = web3.eth.getAccounts();
    console.log("les accounts : ", contract.methods);


    console.log("le parent message :" + newMessage);
    console.log("le contrat : ", contract);

    console.log("abi : ", abi, "add : ", contractAddress, "fin du log puis on tate les events");

    contract.getPastEvents(
      'allEvents',
      {
        fromBlock: 0,
        toBlock: 'latest' 
      },
      (err, events) => { console.log(events.length ) }
    )


    //ICI ON CALL L'EVENT :


contract.setmessage(newMessage).send({
      from: accounts[0]
  });

    //contract.setmessage(newMessage);
    // alert('A message was sent: ' + newMessage);
  }

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

//export default PressfPage;

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