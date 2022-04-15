import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/Base/Header";
import Layout from "../components/Base/Layout";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <div
      className={`${
        router.pathname === "/joined" || router.pathname === "/spectating"
          ? "dark-bg"
          : "chess-bg"
      } w-full relative p-2 min-h-screen pb-3`}
    >
      {router.pathname === "/joined" ||
      router.pathname === "/spectating" ? null : (
        <Layout />
      )}

      <Header />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
