module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      host: "localhost",
      port: 8545,
      network_id: "4", // Rinkeby ID 4
      from: "0xAccF0024D56f75d9f8Bc490a86f3EC06e2B14e50",
      gas: 4600000
    }
  }
};
