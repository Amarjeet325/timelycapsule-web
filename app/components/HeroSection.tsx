"use client";

import Image from "next/image";
import Button from "../components/Button";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[500px] bg-white rounded-[24px] border border-blue-200 shadow-lg overflow-hidden mt-24 mx-8 px-8 py-12 flex flex-col md:flex-row items-center justify-between">
      {/* Left Content */}
      <div className="flex flex-col max-w-[600px] w-full">
        {/* Tagline */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
          <span className="inline-block w-2 h-2 bg-green-500 rounded-full"></span>
          Sealed. Timed. Unforgettable.
        </div>

        {/* Heading */}
        <h1 className="text-5xl font-bold text-black mb-6 leading-tight">
          Preserve Moments,{" "}
          <span className="text-green-500">Unlock Memories</span>
        </h1>

        {/* Subtext */}
        <p className="text-gray-600 text-lg mb-8">
          TimelyCapsule lets you create, personalize, protect and send{" "}
          <strong>time-locked messages, media</strong>, or{" "}
          <strong>crypto gifts</strong> that unlock only at a chosen moment.
        </p>

        {/* Buttons */}
        <div className="flex gap-4">
          <Button
            label="🚀 Create a Capsule"
            size="lg"
            style={{
              backgroundColor: "#10B981",
              color: "white",
              border: "none",
            }}
          />
          <Button
            label="🗂️ Explore Capsules"
            size="lg"
            outline
            style={{
              borderColor: "#10B981",
              color: "#10B981",
            }}
          />
        </div>
      </div>

      {/* Right Content */}
      <div className="relative w-full md:w-[500px] flex items-center justify-center mt-12 md:mt-0">
        {/* Image with tilted effect */}
        <div className="relative">
          <Image
            src="/phone-user.jpg" // Update with your correct image path
            alt="Person using phone"
            width={400}
            height={250}
            className="rounded-xl shadow-md transform rotate-2"
          />
          <div className="absolute top-2 left-2 w-full h-full bg-white rounded-xl -z-10 transform rotate-[-3deg]"></div>
        </div>
      </div>
    </section>
  );
}
