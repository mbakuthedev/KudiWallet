require("dotenv").config();
const HDWalletProvider = require("truffle-hdwallet-provider");
const { INFURA_API_KEY, MNEMONIC, PRIVATE_KEY_0, PRIVATE_KEY_1 } = process.env;

const Private_keys = [
  PRIVATE_KEY_0,
  PRIVATE_KEY_1
]
module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*"
      // type: "quorum"
      // you can uncomment type and use the id of other blockchains,
      // please visit the truffle documentation for more info
    },
    
    goerli: {
      provider: () =>
        new HDWalletProvider(MNEMONIC,INFURA_API_KEY
          ),
      network_id: "5",
      skipDryRun: true
    }
  },
  compilers: {
    solc: {
      version: '0.8.7',
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};
