"use client";
import React from "react";
import { svgs } from "./svgs";
import cn from "classnames";

interface BackButtonProps {
  variant: "plain" | "iconed";
  buttonAction: () => void;
  label?: string;
  goLabel?: string;
  className?: string;
}

const BackButton: React.FC<BackButtonProps> = ({
  className,
  variant,
  buttonAction,
  label = "Back",
  goLabel = "Go Back",
}) => {
  return variant === "plain" ? (
    <button
      onClick={buttonAction}
      className={cn("flex items-center justify-center w-32 gap-2", className)}
      type="button"
    >
      <svgs.BackIcon2 />
      <p className="font-kumbhSans text-base font-normal text-[#111111] text-nowrap border-b-2 border-[#111111]">
        {label}
      </p>
    </button>
  ) : (
    <button
      onClick={buttonAction}
      className={cn(
        "flex flex-col items-center justify-center w-32 pb-8",
        className,
      )}
      type="button"
    >
      <svgs.BackIcon />
      <div className="relative flex items-center justify-start">
        <p className="font-kumbhSans text-base font-medium text-[#48BB78] text-nowrap border-b-2 border-[#48BB78]">
          {goLabel}
        </p>
        <span className="absolute right-[50%] bottom-0 translate-x-[94px] translate-y-[16px]">
          <svgs.BackArrow />
        </span>
      </div>
    </button>
  );
};

export default BackButton;
