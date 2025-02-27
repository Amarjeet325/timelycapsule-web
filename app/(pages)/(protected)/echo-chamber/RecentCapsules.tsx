import { Lock } from "lucide-react";

interface RecentCapsulesProps {
  heading: string;
  daysToUnlock: number;
}

export default function RecentCapsules({
  heading,
  daysToUnlock,
}: RecentCapsulesProps) {
  return (
    <div className="flex items-center cursor-pointer  gap-4 bg-white border-[1.5px] border-[#F9F9FA] hover:border-[3px] rounded-lg px-6 py-3  w-full ">
      <div className="min-w-9 min-h-9 rounded-full bg-[#E0E7FF] flex items-center justify-center   ">
        <Lock size={20} className="text-[#625AE8] " />
      </div>

      <div>
        <h1 className="text-[#000000] font-bold text-sm md:text-base">
          {heading}
        </h1>
        <p className=" text-xs text-[#9FA3AD] ">
          Unlock in {daysToUnlock} days
        </p>
      </div>

      <p className=" ml-auto cursor-pointer text-[#6B62E9] hover:text-[#A5A0F2] transition duration-300 ease-in-out font-semibold text-xs md:text-base ">
        View Details
      </p>
    </div>
  );
}
