// src/data.ts

export interface Link {
  title: string;
  description: string;
  url: string;
  category: string;
}

export const links: Link[] = [
  {
    title: 'beaconcha.in',
    description: 'CL block explorer for mainnet.',
    url: 'https://beaconcha.in/',
    category: 'Block Explorer'
  },
  {
    title: 'Etherscan',
    description: 'EL block explorer for mainnet.',
    url: 'https://etherscan.io/',
    category: 'Block Explorer'
  },
  {
    title: 'Ethereum Protocol YouTube Channel',
    description: 'Location of ACD and other protocol livestreams.',
    url: 'https://www.youtube.com/@EthereumProtocol',
    category: 'Research & Development'
  },
  {
    title: 'EIPs',
    description: 'Ethereum Improvement Proposals',
    url: 'https://eips.ethereum.org/',
    category: 'Research & Development'
  },
  {
    title: 'ETH Research',
    description: 'Ethereum Research discussions.',
    url: 'https://ethresear.ch/',
    category: 'Research & Development'
  },
  {
    title: 'Ethereum Magicians forum',
    description: 'Discussions about EIPs and other technical aspects of Ethereum.',
    url: 'https://ethereum-magicians.org/',
    category: 'Research & Development'
  },
  {
    title: 'ETH R&D discord server',
    description: 'A place to collaborate on the development of the Ethereum protocol.',
    url: 'https://discord.com/invite/qGpsxSA',
    category: 'Research & Development'
  },
  {
    title: 'Ethereum Validator Queue',
    description: 'Entry and exit queue for Ethereum validators.',
    url: 'https://www.validatorqueue.com/',
    category: 'Staking'
  },
  {
    title: 'Client Diversity',
    description: 'Ethereum validator client diversity.',
    url: 'https://clientdiversity.org/',
    category: 'Staking'
  },
  {
    title: 'Project Sunshine',
    description: 'Health metrics of the Ethereum network.',
    url: 'https://ethsunshine.com/',
    category: 'Staking'
  },
  {
    title: 'Staking Stats',
    description: 'A Dune dashboard with useful staking statistics.',
    url: 'https://dune.com/hildobby/eth2-staking',
    category: 'Staking'
  },
  {
    title: 'Ultra Sound Money',
    description: 'ETH supply change.',
    url: 'https://ultrasound.money/',
    category: 'Staking'
  },
  {
    title: 'Rated Network',
    description: 'Ethereum staking data.',
    url: 'http://rated.network/',
    category: 'Staking'
  },
  {
    title: 'MEV Watch',
    description: 'Monitoring OFAC compliance & censorship in block production.',
    url: 'https://www.mevwatch.info/',
    category: 'Staking'
  },
  {
    title: 'payload',
    description: 'Block building & MEV visualization.',
    url: 'https://payload.de/data/',
    category: 'Staking'
  },
  {
    title: 'Execution Client Diversity',
    description: 'Ethereum staking execution client diversity dashboard.',
    url: 'https://execution-diversity.info/',
    category: 'Staking'
  },
  {
    title: 'Blockprint by Sigma Prime',
    description: 'Analysis of CL clients based on their block fingerprint.',
    url: 'https://blockprint.sigp.io/',
    category: 'Staking'
  },
  {
    title: 'EthStaker',
    description: 'A community focused on Ethereum staking education.',
    url: 'https://ethstaker.cc/',
    category: 'Resources'
  },
  {
    title: 'The Daily Gwei',
    description: 'A daily recap of what\'s going on in the Ethereum ecosystem.',
    url: 'https://www.youtube.com/channel/UCvCp6vKY5jDr87htKH6hgDA',
    category: 'Resources'
  },
  {
    title: 'Ethereum.org',
    description: 'A website dedicated to educating people about Ethereum.',
    url: 'https://ethereum.org/',
    category: 'Resources'
  },
  {
    title: 'EthStaker Knowledge Base',
    description: 'A collection of knowledge focused on Ethereum staking.',
    url: 'https://docs.ethstaker.cc/ethstaker-knowledge-base/',
    category: 'Resources'
  },
  {
    title: 'The Eth2 Book',
    description: 'A book about eth2 (post-merge Ethereum) and other upgrades.',
    url: 'https://eth2book.info/',
    category: 'Resources'
  },
  {
    title: 'Ephemery Testnet Homepage',
    description: 'Ephemeral testnet that resets every week. Best use cases: testing staking setups, testing contract deployments when you don’t need longevity.',
    url: 'https://ephemery.dev/',
    category: 'Testnets'
  },
  {
    title: 'Holešky Testnet Homepage',
    description: 'A new, large, testnet to be used for long term application and staking testing.',
    url: 'https://holesky.ethpandaops.io/',
    category: 'Testnets'
  },
  {
    title: 'Holešky Info Page',
    description: 'Getting involved with the Holešky testnet.',
    url: 'https://notes.ethereum.org/@launchpad/holesky',
    category: 'Testnets'
  },
  {
    title: 'Holešky Dashboard by pk910',
    description: 'Holešky validator data.',
    url: 'https://dora-holesky.pk910.de/',
    category: 'Testnets'
  },
  {
    title: 'Sepolia Testnet Homepage',
    description: 'Testnet targeting dapp developers for long-lived applications.',
    url: 'https://sepolia.dev/',
    category: 'Testnets'
  },
  {
    title: 'Goerli Testnet Homepage',
    description: 'Soon to be deprecated.',
    url: 'https://goerli.net/',
    category: 'Testnets'
  }
];
