import React, { useState } from 'react';
import Layout from '../components/myLayout.js';
import MesssageBox from '../components/messageBox';
import ChatBox from '../components/chatBox';
import Web3 from 'web3';
import ContractInstance from '../services/contractInstance';


//------------------------- END OF WEB3JS INITALIZATION -------------------------\\



const PressfPage = async () => {


  let [newMessage, setNewMessage] = useState("");
  let [web3, setWeb3] = useState("");
  let [accounts, setAccounts] = useState("");
  let [contract, setContract] = useState("");

  let contractdata =  await ContractInstance();
  
  setWeb3(contractdata.web3)
  setAccounts(contractdata.accounts)
  setContract(contractdata.contract)

//---------------------- HANDLE NEW MESSAGE -------------------------\\

  const handleNewMessage = async (newMessage) => {
    setNewMessage(newMessage);
/* 
    const contract = await new web3.eth.Contract(abi, contractAddress);
    const accounts = await web3.eth.getAccounts();
 */

    console.log("APPEL 3 FOIS");
    //We call the EVENT here :
    //await eventSubscription();




  //get all Event :
  contract.events.allEvents()
  .on('data', (event) => {
    console.log("resultat des events : ", event);
    console.log("GROBEL DE MESSAGE : ", event.returnValues._message, "GROBEL DE ADDRESSE : ", event.returnValues._msgAddress);
  })
  .on('error', err => {throw Error(err)});


//SET NEW MESSAGE
    try {
      await contract.methods.setmessage(newMessage).send({
        from: accounts[0]
      });
    } catch (e) {
      console.log("event not emmited : ", e);
    }


  }



  //------------------------- FINAL RETURN -------------------------\\
  return (

    <Layout>
      <ChatBox 
        //chatMsgLog={chatMsgLog}
        //messageSender={messageSender}
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