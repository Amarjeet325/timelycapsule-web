"use client";

interface GradientButtonProps {
  label: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  color?: string;
}

export function GradientButton({
  label,
  onClick,
  className = "",
  disabled = false,
  type = "button",
  color,
}: GradientButtonProps) {
  // Determine the background style based on whether a single color is provided
  const backgroundStyle = color
    ? { background: color }
    : { background: "linear-gradient(to right, #48BB78, #215537)" };

  return (
    <button
      className={`w-full py-3 px-4 rounded-full font-medium text-center text-white transition-all 
      ${disabled ? "opacity-60 cursor-not-allowed" : "cursor-pointer hover:opacity-95 active:scale-[0.98]"}
      ${className}`}
      style={{
        ...backgroundStyle,
        boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",
      }}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {label}
    </button>
  );
}
