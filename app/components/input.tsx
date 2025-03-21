"use client";

import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

interface InputProps {
  label: string;
  type: "email" | "password";
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  width?: string | number;
  variant?: "user" | "admin"; // Supports different authentication sections
}

export default function Input({
  label,
  type,
  placeholder,
  value,
  onChange,
  error,
  width,
  variant = "user",
}: InputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";

  // Define styling for user and admin authentication variants
  const variantStyles = {
    user: "border-[#F2F2F2] text-[#78778B] focus:ring-blue-500",
    admin: "border-gray-400 text-gray-700 focus:ring-gray-600",
  };

  return (
    <div
      className={`flex flex-col ${variant == "admin" ? "border" : ""}`}
      style={{
        width: width
          ? typeof width === "string"
            ? width
            : `${width}px`
          : "100%",
      }}
    >
      <label
        className={`text-[14px] font-[500] font-["Kumbh_Sans"] ${variant == "user" ? "p-[10px]" : "p-[4px_10px]"}`}
      >
        {label}
      </label>
      <div className="relative w-full">
        <input
          type={isPassword && showPassword ? "text" : type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`p-[10px] ${variant == "user" ? "border" : ""} placeholder:text-[14px] focus:outline-none focus:ring-2 w-full ${variantStyles[variant]}`}
        />
        {isPassword && (
          <button
            type="button"
            className="absolute inset-y-0 right-3 flex items-center"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        )}
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}
