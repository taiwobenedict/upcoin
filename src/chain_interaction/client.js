import { createPublicClient, http } from 'viem'
import { goerli } from 'viem/chains'
import Web3 from 'web3';
import axios from "axios";

// Connect to the Ethereum node
const web3 = new Web3(process.env.REACT_APP_WEB3_RPC); // Use your Infura Project ID
const web3BSC = new Web3(process.env.REACT_APP_WEB3_BSC_RPC); // Use your Infura Project ID

// Function to get the transaction receipt
export const confirmTransactionReceipt = async (txHash, maxAttempts = 20, interval = 3000) => {
  let receipt = null;
  let attempts = 0;

  console.log(`Checking receipt for transaction: ${txHash}`);

  while (attempts < maxAttempts && !receipt) {
    try {
      receipt = await web3.eth.getTransactionReceipt(txHash);
      if (receipt) {
        console.log('Transaction receipt:', receipt);
        return receipt;
      }
      // Wait for interval milliseconds before trying again
      await new Promise(resolve => setTimeout(resolve, interval));
      attempts++;
    } catch (error) {
      console.error("Error fetching transaction receipt: ", error);
      // If there's an error (e.g., network issue), retry after the interval
      await new Promise(resolve => setTimeout(resolve, interval));
      attempts++;
    }
  }

  throw new Error('Transaction receipt not found after maximum attempts');
};

// Function to get the transaction receipt
export const confirmTransactionReceiptBSC = async (txHash, maxAttempts = 10, interval = 3000) => {
  let receipt = null;
  let attempts = 0;

  console.log(`Checking receipt for transaction: ${txHash}`);

  while (attempts < maxAttempts && !receipt) {
    try {
      receipt = await web3BSC.eth.getTransactionReceipt(txHash);
      if (receipt) {
        console.log('Transaction receipt:', receipt);
        return receipt;
      }
      // Wait for interval milliseconds before trying again
      await new Promise(resolve => setTimeout(resolve, interval));
      attempts++;
    } catch (error) {
      console.error("Error fetching transaction receipt: ", error);
      // If there's an error (e.g., network issue), retry after the interval
      await new Promise(resolve => setTimeout(resolve, interval));
      attempts++;
    }
  }

  throw new Error('Transaction receipt not found after maximum attempts');
};



export const publicClient = createPublicClient({
  chain: goerli,
  transport: http()
})

export const checkTxIsSucceedOrNot = async (txHash) => {
  const query = `${process.env.REACT_APP_TX_SUCCEED_CHECK_API}${txHash}}&apikey=${process.env.REACT_APP_ETHRESCAN_API_KEY}`
  try {
    let queryResult = await axios.get(query);
    console.log("query >>> ", query);
    console.log("response >>> ", queryResult?.data);
    if (queryResult?.data?.result?.isError == 1) return false;
    else return true;
  } catch (err) {
    console.error(err);
    return false;
  }
}
