"use client";

import { motion, AnimatePresence } from "framer-motion";
import { AddressView } from "./modal-components/address-view";
import { SelectView } from "./modal-components/select-view";
import { ConnectingView } from "./modal-components/connecting-view";
import { ConnectedView } from "./modal-components/connected-view";
import { useWallet } from "./wallet-context";

export function WalletModal() {
  const {
    state,
    closeModal,
    toggleNetworkDropdown,
    toggleWalletDropdown,
    selectNetwork,
    handleWalletSelect,
    handleDisconnect,
    copyToClipboard,
    updateInputAddress,
    connectWithAddress,
  } = useWallet();

  const {
    modalState,
    selectedNetwork,
    selectedWallet,
    walletAddress,
    isNetworkDropdownOpen,
    isWalletDropdownOpen,
    isCopied,
    inputAddress,
  } = state;

  if (modalState === "closed") {
    return null;
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
        onClick={closeModal}
      >
        {/* Modal Content */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ type: "spring", damping: 20 }}
          className="bg-white w-full max-w-md rounded-3xl overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {modalState === "address" && (
            <AddressView
              inputAddress={inputAddress}
              onAddressChange={updateInputAddress}
              onConnect={connectWithAddress}
              onClose={closeModal}
            />
          )}

          {modalState === "select" && (
            <SelectView
              selectedNetwork={selectedNetwork}
              selectedWallet={selectedWallet}
              isNetworkDropdownOpen={isNetworkDropdownOpen}
              isWalletDropdownOpen={isWalletDropdownOpen}
              toggleNetworkDropdown={toggleNetworkDropdown}
              toggleWalletDropdown={toggleWalletDropdown}
              onNetworkSelect={selectNetwork}
              onWalletSelect={handleWalletSelect}
              onClose={closeModal}
            />
          )}

          {modalState === "connecting" && (
            <ConnectingView onClose={closeModal} />
          )}

          {modalState === "connected" && (
            <ConnectedView
              walletAddress={walletAddress}
              selectedWallet={selectedWallet}
              isCopied={isCopied}
              onCopyAddress={copyToClipboard}
              onDisconnect={handleDisconnect}
              onClose={closeModal}
            />
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
