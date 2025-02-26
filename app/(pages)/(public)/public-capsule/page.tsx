"use client";
import { ChevronDown } from "lucide-react";
import CapsuleCard from "../../../components/CapsuleCard";
import CapsuleData from "./CapsuleData";
import { useEffect, useRef, useState } from "react";

export default function PublicCapsules() {
  const categories = ["Most Recents", "Most Popular", "Trending"];
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
    <div className="font-manrope w-full min-h-screen bg-white px-[6%] py-[5%] flex flex-col items-start gap-10 ">
      <div className="w-full flex flex-row items-center justify-between gap-6">
        <div>
          <h1 className="text-xl md:text-2xl font-bold">Public Capsules</h1>
          <h2 className="text-base md:text-lg text-gray-600">
            Discover and explore public time capsules from our community
          </h2>
        </div>

        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setShowOptions((prev) => !prev)}
            className="py-2 px-3 text-center border border-[#DBDEE2] text-xs md:text-sm font-bold rounded-lg text-[#000000] flex items-center justify-between gap-4 whitespace-nowrap"
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

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
        {CapsuleData.map((card) => (
          <CapsuleCard
            key={card.id}
            title={card.title}
            description={card.description}
            image={card.image}
            likes={card.likes}
            comments={card.comments}
            contributors={card.contributors}
          />
        ))}
      </div>
    </div>
  );
}
