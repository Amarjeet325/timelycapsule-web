"use client";

import { X } from "lucide-react";

interface ConnectingViewProps {
  onClose: () => void;
}

export function ConnectingView({ onClose }: ConnectingViewProps) {
  return (
    <>
      <div className="flex justify-between items-center p-6 border-b border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900">Connecting</h2>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700 transition-colors"
        >
          <X size={24} />
        </button>
      </div>

      <div className="p-6 flex flex-col items-center justify-center py-16">
        <div className="flex space-x-2 mb-8">
          <div className="w-3 h-3 bg-gray-900 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
        </div>

        <h3 className="text-3xl font-bold text-gray-900 mb-6">
          Connecting Wallet
        </h3>
        <p className="text-lg text-gray-700">
          Please connect metamask & approve transaction
        </p>
      </div>
    </>
  );
}
