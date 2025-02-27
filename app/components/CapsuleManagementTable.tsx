"use client";

import { SquarePen, Download, EllipsisVertical, Lock } from "lucide-react";
import { useState } from "react";

interface Capsule {
  id: number;
  name: string;
  created: string;
  recipients: number;
  unlockDate: string;
  status: string;
}

const capsules: Capsule[] = [
  {
    id: 1,
    name: "Birthday Memories 2024",
    created: "2024-02-10",
    recipients: 5,
    unlockDate: "2025-12-01",
    status: "Locked",
  },
  {
    id: 2,
    name: "Birthday Memories 2024",
    created: "2024-01-15",
    recipients: 3,
    unlockDate: "2026-06-20",
    status: "Locked",
  },
  {
    id: 3,
    name: "Birthday Memories 2024",
    created: "2023-11-08",
    recipients: 2,
    unlockDate: "2027-09-12",
    status: "Locked",
  },
];

export default function CapsuleManagementTable() {
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const allSelected = selectedRows.length === capsules.length;

  const toggleRowSelection = (id: number) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id],
    );
  };

  const toggleSelectAll = () => {
    setSelectedRows(allSelected ? [] : capsules.map((c) => c.id));
  };
  return (
    <div className="mt-10 rounded-lg shadow-lg bg-white">
      <div className="grid grid-cols-[50px,1fr,1fr,1fr,1fr,100px] p-3 text-gray-600 uppercase rounded-md font-medium place-items-center bg-[#F9FAFB]">
        <div className="flex justify-center items-center">
          <label className="relative flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="peer hidden"
              checked={allSelected}
              onChange={toggleSelectAll}
            />
            <div className="h-5 w-5 flex items-center justify-center border border-gray-400 bg-transparent peer-checked:bg-[#61C485] transition">
              <svg
                fill="none"
                viewBox="0 0 24 24"
                className="w-5 h-5 stroke-white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 12.6111L8.92308 17.5L20 6.5"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
          </label>
        </div>

        <p>Name</p>
        <p>Created</p>
        <p>Unlock Date</p>
        <p>Status</p>
        <p>Actions</p>
      </div>

      {capsules.map((capsule) => (
        <div
          key={capsule.id}
          className="grid grid-cols-[50px,1fr,1fr,1fr,1fr,100px] p-5 border-b place-items-center hover:bg-gray-50 transition-colors"
        >
          <div className="flex justify-center items-center mr-4">
            <label className="relative flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="peer hidden"
                checked={selectedRows.includes(capsule.id)}
                onChange={() => toggleRowSelection(capsule.id)}
              />
              <div className="h-5 w-5 flex items-center justify-center border border-gray-400 bg-transparent peer-checked:bg-[#61C485] transition">
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  className="w-5 h-5 stroke-white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 12.6111L8.92308 17.5L20 6.5"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
            </label>
          </div>

          <div className="flex items-center space-x-3">
            <p className="bg-[#DBE9FE] text-[#2463EB] inline-block rounded-full p-2">
              <Lock />
            </p>
            <p className="flex flex-col">
              <span>{capsule.name}</span>
              <span className="text-gray-500">
                {capsule.recipients} recipients
              </span>
            </p>
          </div>
          <p className="text-gray-600">{capsule.created}</p>
          <p className="text-gray-600">{capsule.unlockDate}</p>
          <p className="text-[#936124] bg-[#FEF9C3] rounded-full px-2 font-bold">
            {capsule.status}
          </p>
          {/* Action Icons */}
          <div className="flex justify-center space-x-3">
            <button className="text-gray-500">
              <SquarePen size={18} />
            </button>
            <button className="text-gray-500">
              <Download size={18} />
            </button>
            <button className="text-gray-500">
              <EllipsisVertical size={18} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
