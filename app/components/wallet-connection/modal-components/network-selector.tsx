"use client";

import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { getNetworkInfo } from "../wallet-data";

interface NetworkSelectorProps {
  selectedNetwork: string;
  isNetworkDropdownOpen: boolean;
  toggleNetworkDropdown: () => void;
}

export function NetworkSelector({
  selectedNetwork,
  isNetworkDropdownOpen,
  toggleNetworkDropdown,
}: NetworkSelectorProps) {
  const networkInfo = getNetworkInfo(selectedNetwork);

  return (
    <div className="mb-6">
      <div
        className="flex justify-between items-center mb-2 cursor-pointer"
        onClick={toggleNetworkDropdown}
      >
        <h3 className="text-xl text-gray-800">Choose Network</h3>
        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
          <ChevronDown
            size={20}
            className={`transition-transform ${isNetworkDropdownOpen ? "rotate-180" : ""}`}
          />
        </div>
      </div>

      <div className="flex items-center p-2">
        <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
          <Image
            src={networkInfo.logo || "/placeholder.svg"}
            alt={networkInfo.name}
            width={32}
            height={32}
          />
        </div>
        <span className="text-2xl text-gray-800">{networkInfo.name}</span>
      </div>
    </div>
  );
}
