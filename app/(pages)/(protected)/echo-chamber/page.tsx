"use client";

import { useEffect, useRef, useState } from "react";
import CapsuleStatusCard from "../../../components/CapsuleStatusCard";
import RecentCapsules from "./RecentCapsules";
import { Archive, ChevronDown, Clock, LockOpen } from "lucide-react";

const status = [
  {
    title: "Scheduled",
    figure: 12,
    colour: "#DBE9FE",
    textColor: "#2463EB",
    icon: <Clock size={20} />,
  },
  {
    title: "Unlocked",
    figure: 8,
    colour: "#DCFCE7",
    textColor: "#54B97A",
    icon: <LockOpen size={20} />,
  },
  {
    title: "Archived",
    figure: 15,
    colour: "#F3E8FF",
    textColor: "#9334E9",
    icon: <Archive size={20} />,
  },
];

const recentData = [
  {
    heading: "Birthday Memories 2024",
    daysToUnlock: 3,
  },
  {
    heading: "Birthday Memories 2024",
    daysToUnlock: 3,
  },
  {
    heading: "Birthday Memories 2024",
    daysToUnlock: 3,
  },
];

export default function Page() {
  const categories = ["All Capsules", "Capsules", "Capsules"];
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string>(categories[0]);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const handleOptionClick = (category: string) => {
    setSelectedOption(category);
    setShowOptions(false);
  };

  useEffect(() => {
    const handler = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowOptions(false);
      }
    };

    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);
  return (
    <div className="w-full min-h-screen font-manrope bg-white px-[6%] py-[5%] flex flex-col items-start gap-10">
      <div className="w-full flex flex-row items-center justify-between gap-6">
        <h1 className="text-xl md:text-2xl font-bold">My Time Capsules</h1>

        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setShowOptions((prev) => !prev)}
            className="py-2 px-3 text-center border border-[#DBDEE2] text-xs md:text-sm font-bold rounded-lg text-[#000000] flex items-center justify-center gap-4 whitespace-nowrap"
            aria-expanded={showOptions}
            aria-haspopup="true"
          >
            <span>{selectedOption}</span>
            <span>
              {" "}
              <ChevronDown />{" "}
            </span>
          </button>

          {showOptions && (
            <ul
              className="bg-[#636364] px-1 py-3 rounded-lg w-[160px] text-white text-base font-medium absolute right-0 top-[110%] shadow-lg z-10"
              role="menu"
            >
              {categories.map((category, index) => (
                <li
                  key={index}
                  onClick={() => handleOptionClick(category)}
                  className="my-1 cursor-pointer hover:bg-white hover:text-[#636364] py-1 px-2 rounded-sm transition duration-300 ease-in-out"
                  role="menuitem"
                >
                  {category}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className=" w-full flex flex-col md:flex-row items-center gap-6 justify-between">
        {status.map((stat, index) => (
          <CapsuleStatusCard
            key={index}
            title={stat.title}
            figure={stat.figure}
            colour={stat.colour}
            textColour={stat.textColor}
            icon={stat.icon}
          />
        ))}
      </div>

      <div className="w-full flex flex-col items-start gap-3 p-6 bg-white rounded-xl shadow-md ">
        <h3 className=" font-bold text-lg text-[#000000] ">Recent Capsules</h3>
        {recentData.map((data, index) => (
          <RecentCapsules
            key={index}
            heading={data.heading}
            daysToUnlock={data.daysToUnlock}
          />
        ))}
      </div>
    </div>
  );
}
