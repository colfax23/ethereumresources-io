// src/data.ts

export interface Link {
  id: number;
  title: string;
  description: string;
  url: string;
  category: string;
}

export const links: Link[] = [
  {
    id: 1,
    title: 'beaconcha.in',
    description: 'CL block explorer for mainnet.',
    url: 'https://beaconcha.in/',
    category: 'Block Explorer'
  },
  {
    id: 2,
    title: 'Etherscan',
    description: 'EL block explorer for mainnet.',
    url: 'https://etherscan.io/',
    category: 'Block Explorer'
  },
  {
    id: 3,
    title: 'Ethereum Protocol YouTube Channel',
    description: 'Location of ACD and other protocol livestreams.',
    url: 'https://www.youtube.com/@EthereumProtocol',
    category: 'Research & Development'
  },
  {
    id: 4,
    title: 'EIPs',
    description: 'Ethereum Improvement Proposals',
    url: 'https://eips.ethereum.org/',
    category: 'Research & Development'
  },
  {
    id: 5,
    title: 'ETH Research',
    description: 'Ethereum Research discussions.',
    url: 'https://ethresear.ch/',
    category: 'Research & Development'
  },
  {
    id: 6,
    title: 'Ethereum Magicians forum',
    description: 'Discussions about EIPs and other technical aspects of Ethereum.',
    url: 'https://ethereum-magicians.org/',
    category: 'Research & Development'
  },
  {
    id: 7,
    title: 'ETH R&D discord server',
    description: 'A place to collaborate on the development of the Ethereum protocol.',
    url: 'https://discord.com/invite/qGpsxSA',
    category: 'Research & Development'
  },
  {
    id: 8,
    title: 'Ethereum Validator Queue',
    description: 'Entry and exit queue for Ethereum validators.',
    url: 'https://www.validatorqueue.com/',
    category: 'Staking'
  },
  {
    id: 9,
    title: 'Client Diversity',
    description: 'Ethereum validator client diversity.',
    url: 'https://clientdiversity.org/',
    category: 'Staking'
  },
  {
    id: 10,
    title: 'Project Sunshine',
    description: 'Health metrics of the Ethereum network.',
    url: 'https://ethsunshine.com/',
    category: 'Staking'
  },
  {
    id: 11,
    title: 'Staking Stats',
    description: 'A Dune dashboard with useful staking statistics.',
    url: 'https://dune.com/hildobby/eth2-staking',
    category: 'Staking'
  },
  {
    id: 12,
    title: 'Ultra Sound Money',
    description: 'ETH supply change.',
    url: 'https://ultrasound.money/',
    category: 'Staking'
  },
  {
    id: 13,
    title: 'Rated Network',
    description: 'Ethereum staking data.',
    url: 'http://rated.network/',
    category: 'Staking'
  },
  {
    id: 14,
    title: 'MEV Watch',
    description: 'Monitoring OFAC compliance & censorship in block production.',
    url: 'https://www.mevwatch.info/',
    category: 'Staking'
  },
  {
    id: 15,
    title: 'payload',
    description: 'Block building & MEV visualization.',
    url: 'https://payload.de/data/',
    category: 'Staking'
  },
  {
    id: 16,
    title: 'Execution Client Diversity',
    description: 'Ethereum staking execution client diversity dashboard.',
    url: 'https://execution-diversity.info/',
    category: 'Staking'
  },
  {
    id: 17,
    title: 'Blockprint by Sigma Prime',
    description: 'Analysis of CL clients based on their block fingerprint.',
    url: 'https://blockprint.sigp.io/',
    category: 'Staking'
  },
  {
    id: 18,
    title: 'EthStaker',
    description: 'A community focused on Ethereum staking education.',
    url: 'https://ethstaker.cc/',
    category: 'Resources'
  },
  {
    id: 19,
    title: 'Ethereum.org',
    description: 'A website dedicated to educating people about Ethereum.',
    url: 'https://ethereum.org/',
    category: 'Resources'
  },
  {
    id: 20,
    title: 'EthStaker Knowledge Base',
    description: 'A collection of knowledge focused on Ethereum staking.',
    url: 'https://docs.ethstaker.cc/ethstaker-knowledge-base/',
    category: 'Resources'
  },
  {
    id: 21,
    title: 'The Eth2 Book',
    description: 'A book about eth2 (post-merge Ethereum) and other upgrades.',
    url: 'https://eth2book.info/',
    category: 'Resources'
  },
  {
    id: 22,
    title: 'Ephemery Testnet Homepage',
    description: 'Ephemeral testnet that resets every week. Best use cases: testing staking setups, testing contract deployments when you don’t need longevity.',
    url: 'https://ephemery.dev/',
    category: 'Testnets'
  },
  {
    id: 23,
    title: 'Holešky Testnet Homepage',
    description: 'A new, large, testnet to be used for long term application and staking testing.',
    url: 'https://holesky.ethpandaops.io/',
    category: 'Testnets'
  },
  {
    id: 24,
    title: 'Holešky Info Page',
    description: 'Getting involved with the Holešky testnet.',
    url: 'https://notes.ethereum.org/@launchpad/holesky',
    category: 'Testnets'
  },
  {
    id: 25,
    title: 'Holešky Dashboard by pk910',
    description: 'Holešky validator data.',
    url: 'https://dora-holesky.pk910.de/',
    category: 'Testnets'
  },
  {
    id: 26,
    title: 'Sepolia Testnet Homepage',
    description: 'Testnet targeting dapp developers for long-lived applications.',
    url: 'https://sepolia.dev/',
    category: 'Testnets'
  },
  {
    id: 27,
    title: 'Goerli Testnet Homepage',
    description: 'Soon to be deprecated.',
    url: 'https://goerli.net/',
    category: 'Testnets'
  }
];
