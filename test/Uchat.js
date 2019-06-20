const Uchat = artifacts.require('./Uchat.sol')



contract('Uchat', (accounts) => {
    it('...should set a chat message', async () => {
      let contract = await Uchat.deployed()

      expect(contract).to.exist;

    }
    
    )})
      // Set value of 89
      //await Uchat.set("phrase de test", {from: accounts[0]})
  
      // Get stored value
      //const storedData = await Uchat.get.call()
  
      //assert.equal(storedData, "phrase  de test", 'The value 89 was not stored.')
      //})
  
      //Mes bails
  





 //Mes bails test :

/*   assertEventOfType: function(response, eventName, index) {
    assert.equal(response.logs[index].event, eventName, eventName + ' event should fire.');
 */



//on verifie que le contrat est bien deploye

/* describe('Uchat Contract', () => {
    it('deploys a contract', () => {
        assert.ok(casino.options.address);
    });
}) */



/* 
A L'ANCIENNE :

const SimpleStorage = artifacts.require('./SimpleStorage.sol')

contract('SimpleStorage', (accounts) => {
  it('...should store the value 89.', async () => {
    const simpleStorageInstance = await SimpleStorage.deployed()

    // Set value of 89
    await simpleStorageInstance.set(89, {from: accounts[0]})

    // Get stored value
    const storedData = await simpleStorageInstance.get.call()

    assert.equal(storedData, 89, 'The value 89 was not stored.')
  })

    //Mes bails

})
 */