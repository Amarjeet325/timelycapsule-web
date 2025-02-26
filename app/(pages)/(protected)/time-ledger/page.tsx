import CapsuleManagementTable from "@/app/components/CapsuleManagementTable";
import CapsuleStatCard from "@/app/components/CapsuleStatCard";
import { Filter, Clock4, Lock, Archive, Trash2 } from "lucide-react";

export default function CapsuleManangementPage() {
  return (
    <div className="font-manrope py-5 px-10 bg-[#F6F7FF]">
      {/* Head */}
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Capsule Management
          </h1>
          <p className="text-gray-500 text-sm md:text-base">
            Manage and organize your time capsules
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <button className="flex items-center space-x-2 border border-gray-300 py-2 px-3 md:px-4 rounded-lg hover:bg-gray-50 transition-colors text-sm md:text-base">
            <Filter size={18} />
            <span>Filter</span>
          </button>
          <button className="flex items-center space-x-2 bg-[#5046E5] text-white py-2 px-3 md:px-4 rounded-lg hover:bg-[#4038c7] transition-colors text-sm md:text-base">
            Create New Capsule
          </button>
        </div>
      </div>
      {/* Stats */}
      <div className="flex flex-col gap-y-5 md:flex-row justify-center md:items-center md:space-x-4 mt-5">
        <CapsuleStatCard
          icon={Clock4}
          title="Active Capsules"
          value="24"
          bgColor="bg-[#DBE9FE]"
          iconColor="text-[#2463EB]"
        />
        <CapsuleStatCard
          icon={Lock}
          title="Locked"
          value="12"
          bgColor="bg-[#DCFCE7]"
          iconColor="text-[#61C485]"
        />
        <CapsuleStatCard
          icon={Archive}
          title="Archived"
          value="8"
          bgColor="bg-[#F3E8FF]"
          iconColor="text-[#CD9FF6]"
        />
        <CapsuleStatCard
          icon={Trash2}
          title="Deleted"
          value="3"
          bgColor="bg-[#FFEBE6]"
          iconColor="text-[#FF6A5A]"
        />
      </div>
      {/* Table */}
      <CapsuleManagementTable />
    </div>
  );
}
