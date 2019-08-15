import getWeb3 from "../lib/getWeb3";

export {web3, accounts, contract}
 
//HARDCODED ABI
let abi = [
  {
    constant: false,
    inputs: [
      {
        name: "_message",
        type: "string"
      }
    ],
    name: "setmessage",
    outputs: [
      {
        name: "",
        type: "address"
      }
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "_message",
        type: "string"
      },
      {
        indexed: false,
        name: "_msgAddress",
        type: "address"
      }
    ],
    name: "NewMessage",
    type: "event"
  }
];
 
//HARDOCED CONTRACT ADDRESS
const contractAddress = "0xb73218D6612cA6b4c90e08Cd31b7a1B19C183153";

let web3, accounts, contract;


export const loadContract = async () => {
  try {

    web3 = await getWeb3();
    accounts = await web3.eth.getAccounts();
 
    contract = await new web3.eth.Contract(abi, contractAddress);

    console.log(
      "contractInstance web3 :",
      web3,
      "contractInstance accounts : ",
      accounts,
      "contractInstance contract : ",
      contract
    );

  } catch (error) {
    alert(
      `Failed to load web3, accounts, or contract. Check console for details.`
    );
    console.log(error);
  }
};
