import { ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles.css"; // 可省略，如有設樣式用

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider activeChain="ethereum">
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
