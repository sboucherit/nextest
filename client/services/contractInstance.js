import getWeb3 from '../lib/getWeb3'


const ContractInstance = async () => {

  //HARDCODED ABI
  let abi = [
    {
      "constant": false,
      "inputs": [
        {
          "name": "_message",
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
          "name": "_message",
          "type": "string"
        },
        {
          "indexed": false,
          "name": "_msgAddress",
          "type": "address"
        }
      ],
      "name": "NewMessage",
      "type": "event"
    }
  ]


    let web3;
    let accounts;
    let contract;

    //HARDOCED CONTRACT ADDRESS
    const contractAddress = '0xe80F72a6564e2015Fe51Ce03D15f189BABf4dEa2';

    try {
        web3 = await getWeb3()
        accounts = await web3.eth.getAccounts()

        contract = await new web3.eth.Contract(abi, contractAddress);

        await setWeb3(web3);
        await setAccounts(accounts);
        await setContract(contract);
        console.log("web3 :", web3, " accounts : ", accounts, " contract : ", contract);
      } catch (error) {
        alert(
          `Failed to load web3, accounts, or contract. Check console for details.`
        )
        console.log(error)
      }

      return web3, accounts, contract;
      
}

export default ContractInstance;