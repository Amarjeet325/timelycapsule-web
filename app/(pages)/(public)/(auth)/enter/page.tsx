"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { loginSchema } from "@/app/utils/validators";
import { InputForm } from "@/app/components/InputForm";

interface LoginFormProps {
  email: string;
  password: string;
}

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormProps>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormProps) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <InputForm
        {...register("email")}
        label="Email"
        error={errors.email?.message}
        placeholder="Enter your email"
      />

      <InputForm
        {...register("password")}
        label="Password"
        type="password"
        error={errors.password?.message}
        placeholder="Enter your password"
      />

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            type="checkbox"
            id="remember"
            className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
          />
          <label
            htmlFor="remember"
            className="ml-2 block text-sm text-gray-700"
          >
            Remember me
          </label>
        </div>
        <Link
          href="/forgot-password"
          className="text-sm text-teal-600 hover:text-teal-500"
        >
          Forgot password?
        </Link>
      </div>

      <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
      >
        Sign In
      </button>
    </form>
  );
}
