module.exports = {
  networks: {
    development: {
      host: 'localhost',
      port: 7545,
      network_id: '*' // Match any network id
    }
  },
  solc: {
    // Turns on the Solidity optimizer. For development the optimizer's
    // quite helpful, just remember to be careful, and potentially turn it
    // off, for live deployment and/or audit time. For more information,
    // see the Truffle 4.0.0 release notes.
    //
    // https://github.com/trufflesuite/truffle/releases/tag/v4.0.0

    version: "^0.5.2", // A version or constraint - Ex. "^0.5.0" Can also be set to "native" to use a native solc
    docker: false, // Use a version obtained through docker
    settings: {
      optimizer: {
        enabled: true,
        runs: 200  // Optimize for how many times you intend to run the code
      },
      evmVersion: "byzantium" // Default: "byzantium"
    }
  }
}
