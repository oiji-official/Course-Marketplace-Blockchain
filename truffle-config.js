const HDWalletProvider = require("@truffle/hdwallet-provider")
const keys =  require("./keys.json")

module.exports = {
  contracts_build_directory: "./public/contracts",
  networks: {
    development: {
     host: "127.0.0.1",
     port: 7545,
     network_id: "*",
    },
    ropsten: {
      provider: () =>
        new HDWalletProvider({
          mnemonic: {
            phrase: keys.MNEMONIC
          },
          providerOrUrl: `wss://ropsten.infura.io/ws/v3/${keys.INFURA_PROJECT_ID}`,
          addressIndex: 0
        }),
      network_id: 3,
      gas: 5500000, // Gas Limit, How much gas we are willing to spent
      gasPrice: 20000000000, // how much we are willing to spent for unit of gas
      confirmations: 2, // number of blocks to wait between deployment
      timeoutBlocks: 400 // number of blocks before deployment times out
    }
  },
  compilers: {
    solc: {
      version: "0.8.4",
    }
  }
}

//transaction hash:   0xea93fde917e871914be4533ffecab30f1a2a63f27410363cec5fc5cce727755e
//contract address:   0x09E22dABEF15e16EF4E5504fb19C8367B875F63E

// NEXT_PUBLIC_TARGET_CHAIN_ID=1337
// NEXT_PUBLIC_NETWORK_ID=5777