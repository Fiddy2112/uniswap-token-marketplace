import "@/styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";

import merge from "lodash.merge";

import {
  getDefaultConfig,
  RainbowKitProvider,
  darkTheme,
  midnightTheme,
} from "@rainbow-me/rainbowkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider, http } from "wagmi";
import { mainnet, sepolia } from "wagmi/chains";

const config = getDefaultConfig({
  appName: "Custom Dex",
  projectId: "837797a9309b96f646cc327278ca80b9",
  chains: [sepolia],
  transports: {
    [sepolia.id]: http(
      "https://eth-sepolia.g.alchemy.com/v2/3VKoco_o3Wo_P9cYwbLIGCPcHDRY_bi7"
    ),
  },
});

const queryClient = new QueryClient();

const myTheme = merge(midnightTheme(), {
  colors: {
    accentColor: "#18181b",
    accentColorForeground: "#fff",
  },
});

export default function App({ Component, pageProps }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider theme={myTheme}>
          <Component {...pageProps} />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
