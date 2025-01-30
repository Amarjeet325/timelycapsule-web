import { Eye, EyeOff } from "lucide-react";
import React, { forwardRef, InputHTMLAttributes, useState } from "react";

interface InputFormProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const InputForm = forwardRef<HTMLInputElement, InputFormProps>(
  ({ label, error, ...rest }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
      setShowPassword((prev) => !prev);
    };

    return (
      <div className="w-full">
        <label
          htmlFor={rest.id}
          className="block text-sm font-medium text-gray-700"
        >
          {label}
        </label>
        <div className="relative w-full">
          <input
            ref={ref}
            {...rest}
            type={
              rest.type === "password" && !showPassword ? "password" : "text"
            }
            className={`mt-1 block w-full ${rest.type === "password" ? "pl-3 pr-10" : "px-3"} py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 ${error ? "border-red-500" : ""} `}
          />
          {rest.type === "password" && (
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          )}
        </div>
        {error && <p className="text-red-500 text-sm">{error}</p>}
      </div>
    );
  },
);

InputForm.displayName = "InputForm";
