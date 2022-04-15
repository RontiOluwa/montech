import type { NextPage } from "next";
import Button from "../components/WalletOptions";
import { connectWallet } from "../utils/interact";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();

  const walletConnect = async () => {
    const response = await connectWallet();
    if (response === true) {
      router.push("/games");
    }
  };

  return (
    <div className="m-auto max-w-3xl p-inherit text-center mt-24">
      <h3 className="text-4xl font-medium">Welcome to Chess Games</h3>
      <p className="text-xs mt-2 light-grey-color">
        Sign in with your wallet to be able to authenticate and play games
      </p>
      <div className="mt-12">
        <div onClick={() => walletConnect()}>
          <Button
            shade="dark"
            img="/metamask.svg"
            text="Sign in with metamask"
          />
        </div>

        <div onClick={() => walletConnect()}>
          <Button
            shade="light"
            img="/coinbase.svg"
            text="Sign in with Coinbase Wallet"
          />
        </div>
      </div>
      <div className="mt-8">
        <a className="underline cursor-pointer">Show more options</a>
      </div>
    </div>
  );
};

export default Home;
