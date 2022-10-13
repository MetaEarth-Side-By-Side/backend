import { ChakraProvider } from '@chakra-ui/react';
import { DAppProvider, DEFAULT_SUPPORTED_CHAINS } from '@usedapp/core';
import 'mapbox-gl/dist/mapbox-gl.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import { COINEX_TEST_RPC} from './config';
import './index.css';
import reportWebVitals from './reportWebVitals';
import theme from './theme';
import { CoinExTestnet } from './coinex-testnet'


const config = {
  readOnlyChainId: CoinExTestnet.chainId,
  readOnlyUrls: {
    [CoinExTestnet.chainId]: COINEX_TEST_RPC,
  },
  multicallVersion: 1,
  networks:[...DEFAULT_SUPPORTED_CHAINS, CoinExTestnet]
}

ReactDOM.render(
  <React.StrictMode>
    <DAppProvider config={config}>
      <BrowserRouter>
        <ChakraProvider theme={theme}>
          <App />
        </ChakraProvider>
      </BrowserRouter>
    </DAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
