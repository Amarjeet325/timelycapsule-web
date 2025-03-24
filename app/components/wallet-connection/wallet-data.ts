import type { NetworkInfo, WalletInfo } from "./types";

export const networks: Record<string, string[]> = {
  "Ethereum Network": ["Metamask", "Coinbase", "Safepal", "Wallet Connect"],
  "Solana Network": ["Phantom", "Solflare", "Slope"],
  "Binance Smart Chain": ["Binance Wallet", "Trust Wallet", "SafePal"],
};

export const walletLogos: Record<string, string> = {
  Metamask: "/images/metamask-logo.png",
  Coinbase: "/images/coinbase-logo.png",
  Safepal: "/images/safepal-logo.png",
  "Wallet Connect": "/images/walletconnect-logo.png",
  Phantom: "/placeholder.svg?height=56&width=56",
  Solflare: "/placeholder.svg?height=56&width=56",
  Slope: "/placeholder.svg?height=56&width=56",
  "Binance Wallet": "/placeholder.svg?height=56&width=56",
  "Trust Wallet": "/placeholder.svg?height=56&width=56",
};

export const networkLogos: Record<string, string> = {
  "Ethereum Network": "/images/ethereum-logo.png",
  "Solana Network": "/placeholder.svg?height=32&width=32",
  "Binance Smart Chain": "/placeholder.svg?height=32&width=32",
};

export const getNetworkInfo = (networkName: string): NetworkInfo => {
  return {
    name: networkName,
    wallets: networks[networkName] || [],
    logo: networkLogos[networkName] || "/placeholder.svg?height=32&width=32",
  };
};

export const getWalletInfo = (walletName: string): WalletInfo => {
  return {
    name: walletName,
    logo: walletLogos[walletName] || "/placeholder.svg?height=56&width=56",
  };
};
