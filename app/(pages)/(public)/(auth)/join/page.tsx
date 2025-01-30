"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import logo from "@/public/images/logo.png";
import character from "@/public/images/character.png";
import rocket from "@/public/images/rocket.png";

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
    walletAddress: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement signup logic
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen relative flex flex-col md:flex-row">
      {/* Desktop Rocket */}
      <div
        className="hidden md:block absolute left-[45%] top-1/3 -translate-x-1/2 -translate-y-1/2"
        style={{ zIndex: 1000 }}
      >
        <Image
          src={rocket}
          alt="Rocket illustration"
          width={400}
          height={400}
          className="object-contain"
        />
      </div>

      {/* Mobile Illustration Section */}
      <div className="md:hidden bg-gradient-to-b pt-12 pb-10 from-[#10B981] to-[#8B5CF6] p-6 flex flex-col items-center justify-center relative">
        <div className="relative w-full h-[200px] flex justify-center mb-[-2rem]">
          <div
            className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
            style={{ zIndex: 1000 }}
          >
            <Image
              src={character}
              alt="Character illustration"
              width={180}
              height={180}
              className="object-contain"
            />
          </div>
          <div
            className="absolute right-[-25px] top-1/3 -translate-y-1/2"
            style={{ zIndex: 1000 }}
          >
            <Image
              src={rocket}
              alt="Rocket illustration"
              width={200}
              height={200}
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* Desktop Illustration Section */}
      <div className="hidden md:flex flex-1 bg-gradient-to-b from-[#7FE7D7] to-[#CEB0F0] p-8 flex-col justify-center items-center text-center relative">
        <div className="max-w-md relative z-10">
          <div className="relative w-full h-[400px]">
            <div className="absolute left-0 top-1/2 -translate-y-1/2">
              <Image
                src={character}
                alt="Character illustration"
                width={300}
                height={300}
                className="object-contain"
              />
            </div>
          </div>
          <h2 className="text-3xl font-extrabold text-white mb-4">
            Capture and Share Moments for the Future
          </h2>
          <p className="text-lg font-semibold text-white mb-8">
            Send messages or media that unlock at the perfect moment.
          </p>
        </div>
      </div>

      {/* Right Section with Form */}
      <div
        className="flex-1 px-6 md:px-8 py-8 md:py-12 md:border-l md:rounded-l-full rounded-[2rem] flex flex-col justify-center items-start bg-white relative -mt-8 md:mt-0"
        style={{ zIndex: 1 }}
      >
        <div className="border w-[190px] hidden md:flex border-[#10B981] rounded-full py-2 justify-center items-center mb-10">
          <Image
            src={logo}
            alt="TimelyCapsule Logo"
            width={150}
            height={150}
            className="object-contain"
          />
        </div>
        <div className="w-full max-w-md mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-2xl md:text-3xl font-extrabold mb-1">
              Join Timely<span className="text-[#10B981]">Capsule</span>
            </h1>
            <p className="text-base md:text-lg font-semibold text-gray-600">
              Unlock your capsules across time and space.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 w-full">
            <div className="space-y-4 mb-8">
              <div>
                <label
                  htmlFor="fullname"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Fullname
                </label>
                <input
                  type="text"
                  id="fullname"
                  name="fullname"
                  value={formData.fullname}
                  onChange={handleInputChange}
                  placeholder="Enter your username"
                  className="w-full px-4 py-3 border text-sm font-medium border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7FE7D7] focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 border text-sm font-medium border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7FE7D7] focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Enter your password"
                    className="w-full px-4 py-3 border text-sm font-medium border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7FE7D7] focus:border-transparent"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    placeholder="Confirm your password"
                    className="w-full px-4 py-3 border text-sm font-medium border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7FE7D7] focus:border-transparent"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2"
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={20} />
                    ) : (
                      <Eye size={20} />
                    )}
                  </button>
                </div>
              </div>

              <div>
                <label
                  htmlFor="walletAddress"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Wallet Address
                </label>
                <input
                  type="text"
                  id="walletAddress"
                  name="walletAddress"
                  value={formData.walletAddress}
                  onChange={handleInputChange}
                  placeholder="Enter your wallet address"
                  className="w-full px-4 py-3 border text-sm font-medium border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7FE7D7] focus:border-transparent"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gray-500 font-bold py-3 rounded-lg hover:bg-gray-600 transition-colors"
            >
              Sign Up
            </button>
          </form>
          <p className="text-center text-base md:text-lg font-semibold text-gray-600 mt-16">
            Already have an account?{" "}
            <Link href="/enter" className="text-[#7FE7D7] hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
