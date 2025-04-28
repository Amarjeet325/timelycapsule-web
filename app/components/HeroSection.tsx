"use client";

import Image from "next/image";
import Button from "../components/Button";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[525px] bg-white rounded-[24px] border border-blue-200 shadow-lg overflow-hidden mt-24 mx-8 px-8 py-12 flex flex-col md:flex-row items-center justify-between">
      {/* Left Content */}
      <div className="flex flex-col max-w-[600px] w-full">
        <h1 className="text-5xl font-bold text-black mb-6 leading-tight">
          Preserve Moments,{" "}
          <span className="text-green-500">Unlock Memories</span>
        </h1>
        <p className="text-gray-600 text-lg mb-8">
          Create time-locked messages, media, or crypto gifts that unlock on the
          perfect date—no account needed to receive. Whether it’s a heartfelt
          note, a surprise video, or a crypto inheritance, TimelyCapsule makes
          every moment unforgettable.
        </p>

        {/* Metrics */}
        <div className="flex flex-wrap gap-8 mb-8">
          {/* Users Trust */}
          <div className="flex items-center gap-2">
            <Image
              src="/user-icon.svg"
              alt="Users Trust"
              width={24}
              height={24}
            />
            <div>
              <p className="font-bold text-lg text-black">500k+</p>
              <p className="text-gray-600 text-sm">Users Trust</p>
            </div>
          </div>

          {/* Capsules Created */}
          <div className="flex items-center gap-2">
            <Image
              src="/capsule-icon.svg"
              alt="Capsules Created"
              width={24}
              height={24}
            />
            <div>
              <p className="font-bold text-lg text-black">1M+</p>
              <p className="text-gray-600 text-sm">Capsules Created</p>
            </div>
          </div>

          {/* Crypto Sent */}
          <div className="flex items-center gap-2">
            <Image
              src="/crypto-icon.svg"
              alt="Crypto Sent"
              width={24}
              height={24}
            />
            <div>
              <p className="font-bold text-lg text-black">$10M+</p>
              <p className="text-gray-600 text-sm">Crypto Sent</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <Button
            label="Learn more"
            size="lg"
            style={{
              background:
                "linear-gradient(262.15deg, #10B981 3.16%, rgba(12, 25, 31, 0.79) 86.28%)",
              color: "white", // optional, to make text visible
              border: "none",
            }}
          />

          <Button label="Sign Up" color="green-500" outline size="lg" />
        </div>
      </div>

      {/* Right Content */}
      <div className="relative w-full md:w-[500px] flex items-center justify-center mt-12 md:mt-0">
        <div className="relative w-[400px] h-[400px] bg-gradient-to-br from-green-100 to-white rounded-full flex items-center justify-center">
          <Image
            src="/hero-girl.png"
            alt="Hero Image"
            width={320}
            height={320}
            className="object-contain z-10"
          />

          {/* Circular Line Decoration */}
          <div className="absolute w-[360px] h-[360px] border border-green-300 rounded-full z-0"></div>
        </div>

        {/* Testimonial Pop-up */}
        <div className="absolute bottom-4 right-4 bg-white rounded-xl shadow-md p-3 flex items-center gap-2 w-[220px]">
          <Image
            src="/ronald-profile.png"
            alt="Ronald Richards"
            width={36}
            height={36}
            className="rounded-full"
          />
          <div className="flex flex-col">
            <p className="font-semibold text-sm">Ronald Richards</p>
            <p className="text-gray-500 text-xs">
              One of the best chatting app I have ever used.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
