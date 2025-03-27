import { Copy, MoreVertical, ArrowDownLeft, ArrowUpRight } from "lucide-react";

interface WalletCardProps {
  walletName: string;
  walletAddress: string;
  balance: number;
}

export default function WalletCard({
  walletName,
  walletAddress,
  balance,
}: WalletCardProps) {
  return (
    <div className="bg-gradient-to-tr from-[#37945E] to-[#34D399] text-white p-6 rounded-2xl shadow-lg relative flex flex-col w-full">
      <div className="absolute top-4 right-4 cursor-pointer">
        <MoreVertical size={20} />
      </div>
      <h3 className="text-lg font-semibold">{walletName}</h3>
      <p className="text-sm flex items-center gap-1 mt-1">
        {walletAddress.slice(0, 6)}...{walletAddress.slice(-6)}
        <Copy size={14} className="cursor-pointer" />
      </p>
      <p className="text-3xl font-bold mt-4">${balance.toLocaleString()}</p>
      <div className="flex gap-4 mt-6">
        <button className="bg-white/30 backdrop-blur-md text-white py-2 flex items-center justify-center gap-2 rounded-lg w-full font-semibold">
          <ArrowDownLeft /> Receive
        </button>
        <button className="bg-white/30 backdrop-blur-md text-white py-2 flex items-center justify-center gap-2 rounded-lg w-full font-semibold">
          Send <ArrowUpRight />
        </button>
      </div>
    </div>
  );
}
