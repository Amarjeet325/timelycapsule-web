"use client";

import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { getNetworkInfo, getWalletInfo } from "../wallet-data";

interface WalletSelectorProps {
  selectedNetwork: string;
  selectedWallet: string | null;
  isWalletDropdownOpen: boolean;
  toggleWalletDropdown: () => void;
  onWalletSelect: (wallet: string) => void;
}

export function WalletSelector({
  selectedNetwork,
  selectedWallet,
  isWalletDropdownOpen,
  toggleWalletDropdown,
  onWalletSelect,
}: WalletSelectorProps) {
  const networkInfo = getNetworkInfo(selectedNetwork);

  return (
    <div>
      <div
        className="flex justify-between items-center mb-4 cursor-pointer"
        onClick={toggleWalletDropdown}
      >
        <h3 className="text-xl text-gray-800">Select Wallet</h3>
        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
          <ChevronDown
            size={20}
            className={`text-gray-500 transition-transform ${isWalletDropdownOpen ? "rotate-180" : ""}`}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {networkInfo.wallets.map((wallet) => {
          const walletInfo = getWalletInfo(wallet);
          return (
            <div
              key={wallet}
              onClick={() => onWalletSelect(wallet)}
              className={`
                p-4 rounded-xl flex flex-col items-center justify-center cursor-pointer transition-all
                ${selectedWallet === wallet ? "bg-gray-100 shadow-md" : "bg-white hover:bg-gray-50"}
              `}
            >
              <div className="w-14 h-14 mb-2 flex items-center justify-center">
                <Image
                  src={walletInfo.logo || "/placeholder.svg"}
                  alt={wallet}
                  width={56}
                  height={56}
                />
              </div>
              <span className="text-lg text-gray-800">{wallet}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
