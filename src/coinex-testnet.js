
export const CoinExTestnet = {
  chainId: 53,
  chainName: 'CoinExTestnet',
  isTestChain: false,
  isLocalChain: false,
  multicallAddress: '0xD02bEdba90aF977DE64b2facbCEF660C8c65c60d',
  getExplorerAddressLink: (address) => `https://testnet.coinex.net/address/${address}`,
  getExplorerTransactionLink: (transactionHash) => `https://testnet.coinex.net/tx/${transactionHash}`,
  // Optional parameters:
  rpcUrl: 'https://testnet-rpc.coinex.net',
  blockExplorerUrl: 'https://testnet.coinex.net',
  nativeCurrency: {
    name: 'CoinExTestNet',
    symbol: 'CET',
    decimals: 18,
  }
}