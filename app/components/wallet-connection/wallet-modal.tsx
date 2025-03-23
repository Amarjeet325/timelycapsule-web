"use client";

import { motion, AnimatePresence } from "framer-motion";
import type { ModalState } from "./types";
import { ConnectedView } from "./modal-components/connected-view";
import { ConnectingView } from "./modal-components/connecting-view";
import { SelectView } from "./modal-components/select-view";

interface WalletModalProps {
  modalState: ModalState;
  selectedNetwork: string;
  selectedWallet: string | null;
  walletAddress: string | null;
  isNetworkDropdownOpen: boolean;
  isWalletDropdownOpen: boolean;
  isCopied: boolean;
  onClose: () => void;
  toggleNetworkDropdown: () => void;
  toggleWalletDropdown: () => void;
  onWalletSelect: (wallet: string) => void;
  onDisconnect: () => void;
  onCopyAddress: () => void;
}

export function WalletModal({
  modalState,
  selectedNetwork,
  selectedWallet,
  walletAddress,
  isNetworkDropdownOpen,
  isWalletDropdownOpen,
  isCopied,
  onClose,
  toggleNetworkDropdown,
  toggleWalletDropdown,
  onWalletSelect,
  onDisconnect,
  onCopyAddress,
}: WalletModalProps) {
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
        onClick={onClose}
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
          {modalState === "select" && (
            <SelectView
              selectedNetwork={selectedNetwork}
              selectedWallet={selectedWallet}
              isNetworkDropdownOpen={isNetworkDropdownOpen}
              isWalletDropdownOpen={isWalletDropdownOpen}
              toggleNetworkDropdown={toggleNetworkDropdown}
              toggleWalletDropdown={toggleWalletDropdown}
              onWalletSelect={onWalletSelect}
              onClose={onClose}
            />
          )}

          {modalState === "connecting" && <ConnectingView onClose={onClose} />}

          {modalState === "connected" && (
            <ConnectedView
              walletAddress={walletAddress}
              selectedWallet={selectedWallet}
              isCopied={isCopied}
              onCopyAddress={onCopyAddress}
              onDisconnect={onDisconnect}
              onClose={onClose}
            />
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
