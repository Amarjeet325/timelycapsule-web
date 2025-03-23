export type ModalState = "closed" | "select" | "connecting" | "connected";

export interface NetworkInfo {
  name: string;
  wallets: string[];
  logo: string;
}

export interface WalletInfo {
  name: string;
  logo: string;
}

export interface WalletConnectionState {
  selectedNetwork: string;
  selectedWallet: string | null;
  walletAddress: string | null;
  modalState: ModalState;
  isNetworkDropdownOpen: boolean;
  isWalletDropdownOpen: boolean;
  isCopied: boolean;
}
