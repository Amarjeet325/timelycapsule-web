"use client";

import { WalletProvider } from "./wallet-context";
import { WalletModal } from "./wallet-modal";
import { WalletStatus } from "./wallet-status";

export default function ConnectWallet() {
  return (
    <WalletProvider>
      <div className="flex justify-center items-center min-h-screen bg-black">
        <WalletStatus />
        <WalletModal />
      </div>
    </WalletProvider>
  );
}
