import Web3Modal from "web3modal";
import Web3 from "web3";
let web3: any;
if (typeof window !== "undefined") {
  const { ethereum } = window;
  web3 = new Web3(ethereum);
}
import CoinbaseWalletSDK from "@coinbase/wallet-sdk";
const providerOptions = {
  walletlink: {
    package: CoinbaseWalletSDK,
    options: {
      appName: "Web 3 Modal Demo",
      infuraId: "3fd4907115b84c7eb48e95514768a4e8",
    },
  },
};

let Modal: any;
if (typeof window !== "undefined") {
  Modal = new Web3Modal({
    cacheProvider: true, // optional
    providerOptions, // required
    theme: {
      background: "rgb(39, 49, 56)",
      main: "rgb(199, 199, 199)",
      secondary: "rgb(136, 136, 136)",
      border: "rgba(195, 195, 195, 0.14)",
      hover: "rgb(16, 26, 32)",
    },
  });
}

export const connectWallet = async () => {
  try {
    const provider = await Modal.connect();
    const web3 = new Web3(provider);
    return true;
  } catch (e) {
    // console.log(e);
    return false;
  }
};

export const getCurrentWalletConnected = async () => {
  try {
    const addressArray = await window.ethereum.request({
      method: "eth_accounts",
    });
    if (addressArray.length > 0) {
      const balance = await web3.eth.getBalance(addressArray[0]);
      return {
        address: addressArray[0],
        balance: balance,
        status: "👆🏽 Write a message in the text-field above.",
      };
    } else {
      return {
        address: "",
        status: "🦊 Connect to Metamask using the top right button.",
      };
    }
  } catch (err: any) {
    return {
      address: "",
      status: "😥 " + err.message,
    };
  }
};

export const disconnectMetamask = async () => {
  console.log(Modal);
  await Modal.clearCachedProvider();
  //   window.location.reload();
};
