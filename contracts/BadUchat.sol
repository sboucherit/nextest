pragma solidity >=0.5.0;

contract Uchat{

  address[] msgAddrLog;
  string[] chatMsgLog;


//fichier create pp/sla/create-contract/create-contract.component.ts

function newMessage(string memory _newString) public {

  msgAddrLog.push(msg.sender);
  chatMsgLog.push(_newString);

}

function viewMessage(uint id) public view returns (string memory message){
    return chatMsgLog[id];
}

}

  //Mes bails

//juste tableau 2 dimensions :




/* Avec struct :

	struct MessageList {
	    //Each message is tied to a username
		string chatMsg;
		address[] chatUser;

	}
	mapping(address=>MessageList) chatMessage;


  ===========================================
  Poubelle : 

    uint storedData;
  string chatMsg;

  function set(uint x) public {
    storedData = x;
  }

  function get() public view returns (uint) {
    return storedData;
  }
	
  */

