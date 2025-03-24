"use client";

import { useState } from "react";
import type { WalletConnectionState } from "./types";

export function useWalletConnection() {
  const [state, setState] = useState<WalletConnectionState>({
    selectedNetwork: "Ethereum Network",
    selectedWallet: null,
    walletAddress: null,
    modalState: "closed",
    isNetworkDropdownOpen: false,
    isWalletDropdownOpen: false,
    isCopied: false,
  });

  const updateState = (newState: Partial<WalletConnectionState>) => {
    setState((prevState) => ({ ...prevState, ...newState }));
  };

  const openModal = () => updateState({ modalState: "select" });

  const closeModal = () => updateState({ modalState: "closed" });

  const toggleNetworkDropdown = () =>
    updateState({ isNetworkDropdownOpen: !state.isNetworkDropdownOpen });

  const toggleWalletDropdown = () =>
    updateState({ isWalletDropdownOpen: !state.isWalletDropdownOpen });

  const selectNetwork = (network: string) =>
    updateState({ selectedNetwork: network, isNetworkDropdownOpen: false });

  const handleWalletSelect = (wallet: string) => {
    updateState({
      selectedWallet: wallet,
      modalState: "connecting",
    });

    // Simulate connection process
    setTimeout(() => {
      updateState({
        walletAddress: "0x05c41sa5cfas...5c12a11178a1c5wa12",
        modalState: "connected",
      });
    }, 2000);
  };

  const handleDisconnect = () => {
    updateState({
      walletAddress: null,
      selectedWallet: null,
      modalState: "select",
    });
  };

  const copyToClipboard = () => {
    if (state.walletAddress) {
      navigator.clipboard.writeText(state.walletAddress);
      updateState({ isCopied: true });
      setTimeout(() => updateState({ isCopied: false }), 2000);
    }
  };

  return {
    state,
    actions: {
      openModal,
      closeModal,
      toggleNetworkDropdown,
      toggleWalletDropdown,
      selectNetwork,
      handleWalletSelect,
      handleDisconnect,
      copyToClipboard,
    },
  };
}
