"use client";
import React from "react";
import { svgs } from "./svgs";

interface BackButtonProps {
  variant: "plain" | "iconed";
  buttonAction: () => void;
}

const BackButton: React.FC<BackButtonProps> = ({ variant, buttonAction }) => {
  return variant === "plain" ? (
    <button
      onClick={buttonAction}
      className="flex items-center justify-center w-32 gap-2"
      type="button"
    >
      <svgs.BackIcon2 />
      <p className="font-kumbhSans text-base font-normal text-[#111111] text-nowrap border-b-2 border-[#111111]">
        Back
      </p>
    </button>
  ) : (
    <button
      onClick={buttonAction}
      className="flex flex-col items-start justify-center w-32"
      type="button"
    >
      <svgs.BackIcon />
      <div className="flex items-center justify-start ml-4">
        <p className="font-kumbhSans text-base font-medium text-[#48BB78] text-nowrap border-b-2 border-[#48BB78]">
          Go Back
        </p>
        <span className="translate-x-[20px] translate-y-[30px]">
          <svgs.BackArrow />
        </span>
      </div>
    </button>
  );
};

export default BackButton;
