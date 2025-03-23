"use client";

import type React from "react";

import { X } from "lucide-react";

interface AddressViewProps {
  inputAddress: string;
  onAddressChange: (address: string) => void;
  onConnect: () => void;
  onClose: () => void;
}

export function AddressView({
  inputAddress,
  onAddressChange,
  onConnect,
  onClose,
}: AddressViewProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onConnect();
  };

  return (
    <>
      <div className="flex justify-between items-center p-6 border-b border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900">Connect Wallet</h2>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700 transition-colors"
        >
          <X size={24} />
        </button>
      </div>

      <div className="p-6">
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label
                htmlFor="wallet-address"
                className="block text-lg font-medium text-gray-700 mb-2"
              >
                Enter Wallet Address
              </label>
              <input
                id="wallet-address"
                type="text"
                value={inputAddress}
                onChange={(e) => onAddressChange(e.target.value)}
                placeholder="0x..."
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                required
              />
            </div>

            <div className="flex justify-end mt-4">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-3 mr-3 bg-gray-100 text-black rounded-lg font-medium border border-gray-300 hover:bg-gray-200 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-3  bg-red-100 border border-red-300 text-black rounded-lg font-medium hover:bg-blue-500 transition-colors"
              >
                Connect
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
