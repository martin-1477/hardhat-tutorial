require("hardhat-klaytn-patch");
require("@nomiclabs/hardhat-waffle");
require("@openzeppelin/hardhat-upgrades");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
accessKeyId = 'KASKIXJAWJQQDG89HCVT549A'
secretAccessKey = '6AHMNN1UEm43en1YXScgTbNoKMdxYLlPySVcZmk_'
module.exports = {
  solidity: "0.8.6",
  networks: {
    baobab: {
      url: "https://kaikas.baobab.klaytn.net:8651/",
      accounts: ["{YOUR PRIVATE KEY}"],
    },
    cypress: {
      url: "https://node-api.klaytnapi.com/v1/klaytn",
      accounts: ["{YOUR PRIVATE KEY}"],
      gasPrice: 0x5d21dba00,
      httpHeaders: {
        'x-chain-id': "8217",
        Authorization: "Basic " +
            Buffer.from(accessKeyId + ":" + secretAccessKey).toString(
                "base64"
            )
      }
    }
  }
};

