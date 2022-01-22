const Self = {
  CHAIN_DISPLAY_NAME: {
    'Mainnet': 'Mainnet',
    'Kovan': 'Kovan',
    'Ganache': 'Ganache',
    'BSC_MAINNET': 'Binance Smart Chain',
    'xDai': 'xDai',
    'Matic': 'Matic',
    'Hardhat': 'Hardhat',
  },
  CHAIN_URL_NAME: {
    'Mainnet': 'mainnet',
    'Kovan': 'kovan',
    'Ganache': 'ganache',
    'BSC_MAINNET': 'bsc',
    'xDai': 'xdai',
    'Matic': 'matic',
    'Hardhat': 'hardhat',
  },
  CHAIN_IDS: {
    'Mainnet': 1,
    'Kovan': 42,
    'BSC_MAINNET': 56,
    'xDai': 100,
    'Matic': 137,
    'Hardhat': 1337,
  },
  UNCX_ADDRESS: {
    'Mainnet': '0xaDB2437e6F65682B85F814fBc12FeC0508A7B1D0',
    'BSC_MAINNET': '0x09a6c44c3947B69E2B45F4D51b67E6a39ACfB506',
    'xDai': '0x0116e28B43A358162B96f70B4De14C98A4465f25',
  },
  UNCL_ADDRESS: {
    'Mainnet': '0x2f4eb47A1b1F4488C71fc10e39a4aa56AF33Dd49',
    'BSC_MAINNET': '0x0E8D5504bF54D9E44260f8d153EcD5412130CaBb',
    'xDai': '0x703120F2f2011a0D03A03a531Ac0e84e81F15989',
  },

  BLOCK_TIME: {
    'Mainnet': 13.3,
    'Kovan': 4,
    'Ganache': 13.3,
    'BSC_MAINNET': 3,
    'xDai': 5,
    'Matic': 2.2,
  },

  EXPLORER_NAME: {
    'Mainnet': 'Etherscan',
    'Kovan': 'Etherscan',
    'Ganache': 'Etherscan',
    'BSC_MAINNET': 'BscScan',
    'xDai': 'blockscout',
    'Matic': 'Explorer',
  },

  ETHERSCAN_URL: {
    'Mainnet': 'https://etherscan.io',
    'Kovan': 'https://kovan.etherscan.io',
    'Ganache': 'https://etherscan.io',
    'BSC_MAINNET': 'https://bscscan.com',
    'xDai': 'https://blockscout.com/poa/xdai',
    'Matic': 'https://explorer-mainnet.maticvigil.com',
  },

  NATIVE_GAS_TOKEN_SYMBOL: {
    'Mainnet': 'ETH',
    'Kovan': 'ETH',
    'Ganache': 'ETH',
    'BSC_MAINNET': 'BNB',
    'xDai': 'xDai',
    'Matic': 'MATIC',
    'Hardhat': 'ETH',
  },

  WRAPPED_GAS_TOKEN: { // e.g. WETH on ETHEREUM
    'Mainnet': '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
    'Kovan': '0xd0A1E359811322d97991E03f863a0C30C2cF029C',
    'Ganache': '0xa6c3c0c397DE062Df60c080341b4900eeB27acb2',
    'BSC_MAINNET': '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    'xDai': '0xe91D153E0b41518A2Ce8Dd3D7944Fa863463a97d',
    'Matic': '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
  },

  CHAINS: {
    'Mainnet': {
      icon: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png',
      gasToken: {
        symbol: 'ETH',
        name: 'Ethereum',
        decimals: 18
      },
      explorerName: 'Etherscan',
      explorerURL: 'https://etherscan.io'
    },
    'Kovan': {
      icon: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png',
      gasToken: {
        symbol: 'ETH',
        name: 'Ethereum',
        decimals: 18
      },
      explorerName: 'Etherscan',
      explorerURL: 'https://kovan.etherscan.io'
    },
    'Ganache': {
      icon: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png',
      gasToken: {
        symbol: 'ETH',
        name: 'Ethereum',
        decimals: 18
      },
      explorerName: 'Etherscan',
      explorerURL: 'https://kovan.etherscan.io'
    },
    'Hardhat': {
      icon: 'https://pbs.twimg.com/profile_images/1317925773425168384/XQkaoFRg_400x400.jpg',
      gasToken: {
        symbol: 'ETH',
        name: 'Ethereum',
        decimals: 18
      },
      explorerName: 'Etherscan',
      explorerURL: 'https://kovan.etherscan.io'
    },
    'BSC_MAINNET': {
      icon: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/smartchain/assets/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c/logo.png',
      gasToken: {
        symbol: 'BNB',
        name: 'BNB',
        decimals: 18
      },
      explorerName: 'BscScan',
      explorerURL: 'https://bscscan.com'
    },
    'xDai': {
      icon: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x0Ae055097C6d159879521C384F1D2123D1f195e6/logo.png',
      gasToken: {
        symbol: 'xDai',
        name: 'xDai',
        decimals: 18
      },
      explorerName: 'blockscout',
      explorerURL: 'https://blockscout.com/poa/xdai'
    },
    'Matic': {
      icon: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0/logo.png',
      gasToken: {
        symbol: 'Matic',
        name: 'Matic',
        decimals: 18
      },
      explorerName: 'Explorer',
      explorerURL: 'https://polygon-explorer-mainnet.chainstacklabs.com'
    },
  },

  // AMMS key must never be changed as it will break contract interaction
  // shortname must never be changed as it will break URL links. 
  // Display name can be changed without affecting the app in any way
  AMMS: {
    'Pancakeswap V2': {
      chain: 'BSC_MAINNET',
      displayname: 'Pancakeswap V2',
      shortname: 'pancake-v2',
      icon: 'https://cryptologos.cc/logos/pancakeswap-cake-logo.svg?v=010',
      // graphExplorer: 'https://api.bscgraph.org/subgraphs/id/QmUDNRjYZ7XbgTvfVnXHj6LcTNacDD9GPXHWLjdTKi6om6',
      graphExplorer: 'https://bsc.streamingfast.io/subgraphs/name/pancakeswap/exchange-v2',
      ammTokenLink: 'https://exchange.pancakeswap.finance/#/swap?inputCurrency=',
      ammPairLink: 'https://pancakeswap.info/pair',
      // server: 'https://api-pcakev2.unicrypt.network/api/v1'
      server: 'https://pancaketest.unicrypt.network/api/v1'
      // server: 'http://localhost/api/v1'
    }
  },
}

module.exports = Self