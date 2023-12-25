import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HashRouter as Router } from 'react-router-dom'
import UIContextProvider from './context/UIcontext';

import { ToastContainer } from 'react-toastify';
import { store } from "./redux-toolkit/store";
import { Provider } from "react-redux";

import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import { mainnet, goerli, bsc, bscTestnet } from 'wagmi/chains'

import 'react-toastify/dist/ReactToastify.css';
import "bootstrap/dist/css/bootstrap.css"
import AOS from 'aos/dist/aos'
import "aos/dist/aos.css"


const chains = [mainnet, goerli, bsc, bscTestnet]
const projectId = process.env.REACT_APP_WALLETCONNECT_PROJECT_ID;


const { publicClient } = configureChains(chains, [w3mProvider({ projectId })])
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient
})
const ethereumClient = new EthereumClient(wagmiConfig, chains)

AOS.init({
  duration: 1000,
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <WagmiConfig config={wagmiConfig}>
      <UIContextProvider>
        <Router>
          <Provider store={store}>
            <App />
            <ToastContainer />
          </Provider>
        </Router>
      </UIContextProvider>
    </WagmiConfig>
    <Web3Modal projectId={projectId} ethereumClient={ethereumClient}
      themeMode="light"
      themeVariables={{
        '--w3m-font-family': 'Roboto, sans-serif',
        '--w3m-accent-color': '#',
        '--w3m-accent-fill-color': '#fff',
        '--w3m-background-color': 'transparent',
        '--w3m-border-color': '#fff',
      }}
    />
  </>
);
