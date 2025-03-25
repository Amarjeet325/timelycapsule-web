"use client";

import cn from "classnames";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  color?: string;
  gradient?: "t" | "tr" | "r" | "br" | "b" | "bl" | "l" | "tl";
  outline?: boolean;
}

export default function Button({
  label,
  onClick,
  className = "",
  disabled = false,
  type = "button",
  color = "primary",
  outline = false,
  gradient,
}: ButtonProps) {
  return (
    <button
      className={cn(
        "w-full px-4 rounded-xl font-semibold text-center  transition-all shadow-[0_1px_2px_rgba(0,0,0,0.05)] h-[40px]",
        { [`border border-${color}`]: outline || !gradient },
        {
          [generateBackgroundColorClassname()]: !outline,
          "text-white": !outline,
          "text-black": outline,
          "opacity-60 cursor-not-allowed": disabled,
          "cursor-pointer hover:opacity-95 active:scale-[0.98]": !disabled,
        },
        className,
      )}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {label}
    </button>
  );

  function generateBackgroundColorClassname() {
    const parts: string[] = ["bg"];

    if (gradient) {
      parts.push(`gradient-to-${gradient}`);
    }

    parts.push(color);

    return parts.join("-");
  }
}
