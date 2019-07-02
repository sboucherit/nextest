const Uchat = artifacts.require('./Uchat.sol')

module.exports = function (deployer) {
  deployer.deploy(Uchat)
}
