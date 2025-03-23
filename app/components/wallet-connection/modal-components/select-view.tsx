"use client";

import { X } from "lucide-react";
import { NetworkSelector } from "./network-selector";
import { WalletSelector } from "./wallet-selector";

interface SelectViewProps {
  selectedNetwork: string;
  selectedWallet: string | null;
  isNetworkDropdownOpen: boolean;
  isWalletDropdownOpen: boolean;
  toggleNetworkDropdown: () => void;
  toggleWalletDropdown: () => void;
  onWalletSelect: (wallet: string) => void;
  onClose: () => void;
}

export function SelectView({
  selectedNetwork,
  selectedWallet,
  isNetworkDropdownOpen,
  isWalletDropdownOpen,
  toggleNetworkDropdown,
  toggleWalletDropdown,
  onWalletSelect,
  onClose,
}: SelectViewProps) {
  return (
    <>
      <div className="flex justify-between items-center p-6 border-b border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900">Connect Wallet</h2>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700 transition-colors"
        >
          <X size={24} />
        </button>
      </div>

      <div className="p-6">
        {/* Network Selection */}
        <NetworkSelector
          selectedNetwork={selectedNetwork}
          isNetworkDropdownOpen={isNetworkDropdownOpen}
          toggleNetworkDropdown={toggleNetworkDropdown}
        />

        {/* Wallet Selection */}
        <WalletSelector
          selectedNetwork={selectedNetwork}
          selectedWallet={selectedWallet}
          isWalletDropdownOpen={isWalletDropdownOpen}
          toggleWalletDropdown={toggleWalletDropdown}
          onWalletSelect={onWalletSelect}
        />
      </div>
    </>
  );
}
