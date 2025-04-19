export interface Partner {
  name: string;
  logo: string;
  type: 'blockchain' | 'defi' | 'nft' | 'infrastructure';
}

export const PARTNERS: Partner[] = [
  {
    name: 'Ethereum',
    logo: '/images/partners/ethereum.svg',
    type: 'blockchain'
  },
  {
    name: 'Polygon',
    logo: '/images/partners/polygon.svg',
    type: 'blockchain'
  },
  {
    name: 'Chainlink',
    logo: '/images/partners/chainlink.svg',
    type: 'infrastructure'
  },
  {
    name: 'MetaMask',
    logo: '/images/partners/metamask.svg',
    type: 'infrastructure'
  },
  {
    name: 'OpenSea',
    logo: '/images/partners/opensea.svg',
    type: 'nft'
  },
  {
    name: 'Alchemy',
    logo: '/images/partners/alchemy.svg',
    type: 'infrastructure'
  }
]; 