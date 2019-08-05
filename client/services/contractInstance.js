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
const contractAddress = "0xe80F72a6564e2015Fe51Ce03D15f189BABf4dEa2";

let web3, accounts, contract;


export const loadContract = async () => {
  try {
    web3 = await getWeb3();
    accounts = await web3.eth.getAccounts();
 
    contract = await new web3.eth.Contract(abi, contractAddress);
    /*
          await setWeb3(web3);
          await setAccounts(accounts);
          await setContract(contract); */
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
 
/* props.setWeb3(await getWeb3());
props.setAccounts(await web3.eth.getAccounts());
props.setContract(await web3.eth.Contract(abi, contractAddress)); */