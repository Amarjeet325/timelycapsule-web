import clsx from "clsx";

interface ButtonProps {
  children: React.ReactNode | string;
  onClick?: () => void;
  variant: "primary" | "secondary" | "outline" | "gradient";
  type?: "button" | "submit" | "reset";
  size?: "sm" | "md" | "lg";
  className?: string;
}

const Button = ({
  children,
  onClick,
  variant,
  size,
  type = "button",
  className,
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={clsx(
        "cursor-pointer px-6 rounded-[8px] w-[101px] h-[46px] font-semibold",
        className,
        {
          // size variation
          "w-[101px] h-[46px] text-[14px]": size === "sm",
          "w-[115px] h-[46px] text-[16px]": size === "md",
          "w-[130px] h-[52px] text-[18px]": size === "lg",
          // type variation
          "bg-[#8D9094] text-black font-[700] text-[16px]":
            variant === "primary",
          "bg-[#059669] text-white font-[700] text-[16px]":
            variant === "secondary",
          "bg-transparent border-[#10B981] border-[1px] border-solid w-[101px] h-[46px] text-white font-[700] text-[16px]":
            variant === "outline",
          "bg-gradient-to-l from-[#10B981] to-[#0C191FC9] w-[101px] h-[46px] text-white font-[700] text-[16px]":
            variant === "gradient",
        },
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
