
pragma solidity >=0.5.0;

contract Uchat{

event NewMessage(string _message, address _msgAddress);
//fichier create pp/sla/create-contract/create-contract.component.ts

function setmessage(string memory _message) public returns (address){
    emit NewMessage(_message, msg.sender);
    }
}