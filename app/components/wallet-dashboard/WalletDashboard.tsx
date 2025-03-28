"use client";

import WalletCard from "./WalletCard";
import WalletDetails from "./WalletDetails";
import WalletBalance from "./WalletBalance";

export default function WalletDashboard() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-6 justify-center">
      {/* TON Wallet Card */}
      <WalletCard
        walletName="TON Wallet"
        walletAddress="EQDHirLoAYlHpIOA1B2C3D4E5F6G7H8I9J0"
        balance={1520056}
      />

      {/* Wallet Details */}
      <WalletDetails
        walletAddress="0x05c41sa5cfas...5c12a1178a1c5wa12"
        connectionType="Metamask"
        isConnected={true}
        onConnect={() => console.log("Connecting wallet...")}
        onDisconnect={() => console.log("Disconnecting wallet...")}
      />

      {/* Balance Info */}
      <WalletBalance
        balance={5240}
        increasePercentage={23.65}
        decreasePercentage={10.4}
        currency="USD / US Dollar"
        status="Active"
      />
    </div>
  );
}
