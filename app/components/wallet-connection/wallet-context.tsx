"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import type { WalletConnectionState } from "./types";

interface WalletContextType {
  state: WalletConnectionState;
  openModal: () => void;
  closeModal: () => void;
  toggleNetworkDropdown: () => void;
  toggleWalletDropdown: () => void;
  selectNetwork: (network: string) => void;
  handleWalletSelect: (wallet: string) => void;
  handleDisconnect: () => void;
  copyToClipboard: () => void;
  updateInputAddress: (address: string) => void;
  connectWithAddress: () => void;
}

const initialState: WalletConnectionState = {
  selectedNetwork: "Ethereum Network",
  selectedWallet: null,
  walletAddress: null,
  modalState: "closed",
  isNetworkDropdownOpen: false,
  isWalletDropdownOpen: false,
  isCopied: false,
  inputAddress: "",
};

const WalletContext = createContext<WalletContextType | undefined>(undefined);

export function WalletProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<WalletConnectionState>(initialState);

  const updateState = (newState: Partial<WalletConnectionState>) => {
    setState((prevState) => ({ ...prevState, ...newState }));
  };

  const openModal = () => {
    // If already connected, show connected modal
    if (state.walletAddress) {
      updateState({ modalState: "connected" });
    } else {
      // Otherwise show address input
      updateState({ modalState: "address" });
    }
  };

  const closeModal = () => updateState({ modalState: "closed" });

  const toggleNetworkDropdown = () =>
    updateState({ isNetworkDropdownOpen: !state.isNetworkDropdownOpen });

  const toggleWalletDropdown = () =>
    updateState({ isWalletDropdownOpen: !state.isWalletDropdownOpen });

  const selectNetwork = (network: string) =>
    updateState({ selectedNetwork: network, isNetworkDropdownOpen: false });

  const updateInputAddress = (address: string) =>
    updateState({ inputAddress: address });

  const connectWithAddress = () => {
    if (!state.inputAddress || state.inputAddress.trim() === "") return;

    updateState({
      walletAddress: state.inputAddress,
      modalState: "select",
    });
  };

  const handleWalletSelect = (wallet: string) => {
    updateState({
      selectedWallet: wallet,
      modalState: "connecting",
    });

    // Simulate connection process
    setTimeout(() => {
      updateState({
        modalState: "connected", // Show connected modal after successful connection
      });
    }, 2000);
  };

  const handleDisconnect = () => {
    updateState({
      walletAddress: null,
      selectedWallet: null,
      inputAddress: "",
      modalState: "closed",
    });
  };

  const copyToClipboard = () => {
    if (state.walletAddress) {
      navigator.clipboard.writeText(state.walletAddress);
      updateState({ isCopied: true });
      setTimeout(() => updateState({ isCopied: false }), 2000);
    }
  };

  const value = {
    state,
    openModal,
    closeModal,
    toggleNetworkDropdown,
    toggleWalletDropdown,
    selectNetwork,
    handleWalletSelect,
    handleDisconnect,
    copyToClipboard,
    updateInputAddress,
    connectWithAddress,
  };

  return (
    <WalletContext.Provider value={value}>{children}</WalletContext.Provider>
  );
}

export function useWallet() {
  const context = useContext(WalletContext);
  if (context === undefined) {
    throw new Error("useWallet must be used within a WalletProvider");
  }
  return context;
}
