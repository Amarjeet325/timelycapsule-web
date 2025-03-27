"use client";

import { X, Copy } from "lucide-react";

interface WalletDetailsProps {
  walletAddress?: string;
  connectionType?: string;
  isConnected: boolean;
  onConnect: () => void;
  onDisconnect: () => void;
}

export default function WalletDetails({
  walletAddress = "",
  connectionType = "",
  isConnected,
  onConnect,
  onDisconnect,
}: WalletDetailsProps) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg border flex flex-col w-full">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Wallet Details</h3>
        <button className="text-gray-400">
          <X />
        </button>
      </div>

      {isConnected ? (
        <>
          <div className="border p-4 rounded-lg mt-4 flex flex-col items-center justify-between">
            <div className="flex items-center">
              <span className="bg-gradient-to-tl from-red-500 to-yellow-500 w-6 h-6 rounded-full block"></span>
              <p className="text-xs flex-1 mx-2 truncate">{walletAddress}</p>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <Copy
                size={16}
                className="cursor-pointer"
                onClick={() => navigator.clipboard.writeText(walletAddress)}
              />
              <span className="text-xs text-[#616161]">Copy address</span>
            </div>
          </div>

          <div className="flex items-center justify-between mt-4 gap-2">
            <p className="text-sm text-gray-500 mt-2">
              Connected with {connectionType}
            </p>
            <button
              className="bg-[#FFE1E1] border border-red-500 text-sm px-4 py-2 rounded-lg"
              onClick={onDisconnect}
            >
              Disconnect
            </button>
          </div>
        </>
      ) : (
        <button
          className="flex items-center bg-red-500 text-white font-semibold text-sm px-4 py-2 rounded-lg w-full mt-4"
          onClick={onConnect}
        >
          Connect Wallet
        </button>
      )}
    </div>
  );
}
