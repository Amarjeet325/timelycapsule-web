import React from "react";
import { useRouter } from "next/navigation";
export interface Capsule {
  id: string;
  name: string;
  description: string;
  type: "Received" | "Send";
  date: string;
  reveals: string;
}

interface CapsuleTableProps {
  data: Capsule[];
  rowCount?: number;
  component: string;
}

const CapsuleTable: React.FC<CapsuleTableProps> = ({
  data,
  rowCount = 5,
  component,
}) => {
  const router = useRouter();
  const getTypeStyle = (type: string) => {
    return type === "Received"
      ? "bg-[#F59E0B33] text-[#F59E0B]"
      : "bg-[#10B98133] text-[#10B943]";
  };

  return (
    <div className="w-full mr-auto ml-5 bg-white border border-[#F5F5F5] rounded-lg p-4">
      {/* Table Header */}
      <div className="flex justify-between items-center px-4 pb-2">
        <h2 className="text-lg font-semibold text-[#1B212D] size-[18px] font-semibold font-kumbhSans">
          {component}
        </h2>
        {data.length > rowCount && (
          <button
            onClick={() => router.push("/capsules")}
            className="text-[#29A073] font-semibold text-[14px] font-kumbhSans hover:scale-105 transition-all"
          >
            View All
          </button>
        )}
      </div>

      {/* Table */}
      <table className="min-w-full rounded-sm">
        <thead>
          <tr className=" text-[#1B212D] text-[12px] font-semibold">
            <th className="px-4 py-2 text-left font-semibold font-kumbhSans uppercase">
              Capsule Name
            </th>
            <th className="px-4 py-2 text-left font-semibold font-kumbhSans uppercase">
              Type
            </th>
            <th className="px-4 py-2 text-left font-semibold font-kumbhSans uppercase">
              Date
            </th>
            <th className="px-4 py-2 text-left font-semibold font-kumbhSans uppercase">
              Reveals In
            </th>
          </tr>
        </thead>
        <tbody>
          {data.slice(0, rowCount).map((capsule) => (
            <tr
              key={capsule.id}
              className="border-b border-gray-100 text-[#1B212D] text-xs"
            >
              {/* Capsule Name + Description */}
              <td className="px-4 py-3 flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-200 rounded-lg"></div>{" "}
                {/* Placeholder for icon */}
                <div>
                  <p className="font-kumbhSans font-medium text-sm">
                    {capsule.name}
                  </p>
                  <p className="text-[#6A6A6A] text-[11px] font-kumbhSans font-normal">
                    {capsule.description}
                  </p>
                </div>
              </td>

              {/* Type (Styled Badge) */}
              <td className="px-4 py-3">
                <span
                  className={`px-2 py-1 text-xs font-medium font-kumbhSans text-[12px] rounded-md ${getTypeStyle(
                    capsule.type,
                  )}`}
                >
                  {capsule.type}
                </span>
              </td>

              {/* Date */}
              <td className="px-4 py-3 font-kumbhSans font-normal text-[12px] text-[#1B212D]">
                {capsule.date}
              </td>

              {/* Reveals In */}
              <td className="px-4 py-3 font-kumbhSans font-normal text-[12px] text-[#1B212D]">
                {capsule.reveals}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CapsuleTable;
