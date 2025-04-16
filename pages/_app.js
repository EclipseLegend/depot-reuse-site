import { ThirdwebProvider } from "@thirdweb-dev/react";

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider activeChain="ethereum">
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
