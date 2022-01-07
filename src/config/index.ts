import 'dotenv/config';

export default {
  env: process.env.NODE_ENV,
  dbConfig: {
    host: 'localhost',
    database: 'blockchain-sync-server',
    port: 27017,
  },
  log: {
    format: 'combined',
    dir: '../logs',
  },
  cors: {
    origin: true,
    credentials: true,
  },
  blockchain: {
    sidechain: {
      url: 'http://13.57.177.184:8545',
      ERC721Contract: {
        address: '0xCf5909f2eac709151fFA95459fB14C5E0Ecf0849',
        startingBlock: 0,
      },
      AccountsContract: {
        address: '0xEE64CB0278f92a4A20cb8F2712027E89DE0eB85e',
        startingBlock: 0,
      },
    },
  },
};