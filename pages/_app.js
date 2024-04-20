import "@/styles/globals.css";
import merge from "lodash/merge";

import "@rainbow-me/rainbowkit/styles.css";

import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
  midnightTheme,
} from "@rainbow-me/rainbowkit";
import { http, createConfig, WagmiProvider } from "wagmi";
import { mainnet, sepolia } from "wagmi/chains";

const config = createConfig({
  chains: [sepolia],
  transports: {
    [sepolia.id]: http(),
  },
});

export default function App({ Component, pageProps }) {
  return;
  <WagmiProvider config={config}>
    <Component {...pageProps} />;
  </WagmiProvider>;
}
