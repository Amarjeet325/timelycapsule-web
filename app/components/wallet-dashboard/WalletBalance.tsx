import Image from "next/image";
import up from "@/public/images/up.svg";
import down from "@/public/images/down.svg";

interface WalletBalanceProps {
  balance: number;
  increasePercentage: number;
  decreasePercentage: number;
  currency: string;
  status: string;
}

export default function WalletBalance({
  balance,
  increasePercentage,
  decreasePercentage,
  currency,
  status,
}: WalletBalanceProps) {
  return (
    <div className="bg-[#fafafa] p-6 rounded-2xl shadow-lg border flex flex-col w-full">
      <p className="text-gray-500 text-sm">Your Balance</p>
      <div className="flex items-center justify-between gap-4 mt-2">
        <p className="text-2xl font-semibold">${balance.toLocaleString()}</p>
        <div className="flex gap-4 mt-2">
          <p className="flex items-center text-green-500 text-sm">
            <Image src={up} alt="▲" /> {increasePercentage}%
          </p>
          <p className="flex items-center text-red-500 text-sm">
            <Image src={down} alt="▼" /> {decreasePercentage}%
          </p>
        </div>
      </div>
      <hr className="my-5" />
      <div className="flex justify-between text-sm mt-4">
        <p className="text-gray-500">Currency</p>
        <p className="text-gray-500">Status</p>
      </div>
      <div className="flex justify-between text-sm mt-2">
        <p className="font-semibold">{currency}</p>
        <p
          className={`font-semibold ${status === "Active" ? "text-green-600" : "text-red-600"}`}
        >
          {status}
        </p>
      </div>
    </div>
  );
}
