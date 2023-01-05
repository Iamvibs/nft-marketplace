const fs = require('fs');
require('dotenv').config();
require('@nomiclabs/hardhat-waffle');

const privateKeys = process.env.PRIVATE_KEYS || '';
const privateKey = fs.readFileSync('.secret').toString().trim();

module.exports = {
  solidity: '0.8.4',
  networks: {
    localhost: {},
    mumbai: {
      url: 'https://polygon-mumbai.g.alchemy.com/v2/K2pFaXChulkNM5XWSyL4NV2DCU0KBvzn',
      accounts: privateKeys.split(','),
    },
  },
};
