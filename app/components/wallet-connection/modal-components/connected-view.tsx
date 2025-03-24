"use client";

import { X, Clipboard } from "lucide-react";

interface ConnectedViewProps {
  walletAddress: string | null;
  selectedWallet: string | null;
  isCopied: boolean;
  onCopyAddress: () => void;
  onDisconnect: () => void;
  onClose: () => void;
}

export function ConnectedView({
  walletAddress,
  selectedWallet,
  isCopied,
  onCopyAddress,
  onDisconnect,
  onClose,
}: ConnectedViewProps) {
  return (
    <>
      <div className="flex justify-between items-center p-6 border-b border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900">Wallet Details</h2>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700 transition-colors"
        >
          <X size={24} />
        </button>
      </div>

      <div className="p-6">
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <div className="flex items-center">
            <div className="w-[40px] h-[40px] rounded-full bg-gradient-to-r from-orange-400 to-red-500 mr-4"></div>
            <span className="text-lg text-gray-800">{walletAddress}</span>
          </div>

          <button
            onClick={onCopyAddress}
            className="flex items-center justify-center w-full mt-4 py-3 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <Clipboard size={20} className="mr-2" />
            {isCopied ? "Copied!" : "Copy address"}
          </button>
        </div>

        <div className="flex justify-between items-center">
          <p className="text-lg text-gray-800">
            Connected with {selectedWallet?.toLowerCase() || "metamask"}
          </p>
          <button
            onClick={onDisconnect}
            className="px-6 py-3 bg-red-100 text-black rounded-lg font-medium border border-red-300"
          >
            Disconnect
          </button>
        </div>
      </div>
    </>
  );
}
