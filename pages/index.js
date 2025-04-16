import { useAddress, useContract, Web3Button } from "@thirdweb-dev/react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  // 等待畫面載入後再啟用 Web3 hook
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // 伺服器端不執行任何畫面

  const address = useAddress();
  const { contract } = useContract("YOUR_NFT_DROP_CONTRACT_ADDRESS", "nft-drop");

  return (
    <div style={{ padding: 40, fontFamily: 'Arial, sans-serif', backgroundColor: '#f1f5e4', minHeight: '100vh' }}>
      <h1>ReImagining Reuse — Through Art, Community & Web3</h1>
      <Image src="/thankyou-nft.png" alt="Thank You NFT" width={400} height={600} />
      <p style={{ marginTop: 20 }}>
        For over a decade, Depot for Creative ReUse has transformed how communities see waste —
        turning discarded materials into education, art, and purpose.
      </p>
      <Web3Button
        contractAddress="YOUR_NFT_DROP_CONTRACT_ADDRESS"
        action={async (contract) => {
          await contract.claim(1);
        }}
      >
        Claim NFT
      </Web3Button>
    </div>
  );
}
