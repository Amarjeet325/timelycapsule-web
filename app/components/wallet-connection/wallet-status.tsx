"use client";

import { useWallet } from "./wallet-context";

export function WalletStatus() {
  const { state, openModal, handleDisconnect } = useWallet();
  const { walletAddress, selectedWallet } = state;

  if (!walletAddress) {
    return (
      <div className="flex flex-col items-center justify-center">
        <button
          onClick={openModal}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
        >
          Connect Wallet
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl p-6 max-w-md w-full">
      <div className="flex items-center mb-4">
        <div className="w-[40px] h-[40px] rounded-full bg-gradient-to-r from-orange-400 to-red-500 mr-4"></div>
        <span className="text-lg text-gray-800 font-medium">
          {walletAddress}
        </span>
      </div>

      <div className="flex justify-between items-center">
        <p className="text-lg text-gray-800">
          Connected with {selectedWallet?.toLowerCase() || "wallet"}
        </p>
        <button
          onClick={handleDisconnect}
          className="px-6 py-3 bg-red-100 text-black rounded-lg font-medium border border-red-300 hover:bg-red-200 transition-colors"
        >
          Disconnect
        </button>
      </div>
    </div>
  );
}
