"use client";

import { useWalletConnection } from "./use-wallet-connection";
import { WalletModal } from "./wallet-modal";

export default function ConnectWallet() {
  const { state, actions } = useWalletConnection();
  const {
    modalState,
    selectedNetwork,
    selectedWallet,
    walletAddress,
    isNetworkDropdownOpen,
    isWalletDropdownOpen,
    isCopied,
  } = state;

  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      {/* Connect Wallet Button */}
      {modalState === "closed" && (
        <button
          onClick={actions.openModal}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium"
        >
          Connect Wallet
        </button>
      )}

      {/* Wallet Modal */}
      <WalletModal
        modalState={modalState}
        selectedNetwork={selectedNetwork}
        selectedWallet={selectedWallet}
        walletAddress={walletAddress}
        isNetworkDropdownOpen={isNetworkDropdownOpen}
        isWalletDropdownOpen={isWalletDropdownOpen}
        isCopied={isCopied}
        onClose={actions.closeModal}
        toggleNetworkDropdown={actions.toggleNetworkDropdown}
        toggleWalletDropdown={actions.toggleWalletDropdown}
        onWalletSelect={actions.handleWalletSelect}
        onDisconnect={actions.handleDisconnect}
        onCopyAddress={actions.copyToClipboard}
      />
    </div>
  );
}
