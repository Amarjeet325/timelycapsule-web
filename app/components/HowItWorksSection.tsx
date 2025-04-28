"use client";

import Image from "next/image";
import Link from "next/link";

export default function HowItWorksSection() {
  return (
    <section className="w-full py-20 bg-white flex flex-col items-center">
      <div className="max-w-[1140px] mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
        <p className="text-lg text-gray-600 mb-16">
          Create a Capsule in 3 Steps. Simple. Powerful. Magical.
        </p>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[60px] mb-12">
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-full h-48 relative mb-6">
              <Image
                src=" /create-capsule-image.svg"
                alt="Create Capsule"
                fill
                className="object-contain"
              />
            </div>
            <h4 className="text-xl font-semibold text-gray-800 mb-2">
              Create a Capsule
            </h4>
            <p className="text-gray-600 text-sm max-w-xs">
              Write a message, add photos, videos, audio—even crypto funds.
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-full h-48 relative mb-6">
              <Image
                src="/ set-unlock-time-image.svg"
                alt="Set Unlock Time"
                fill
                className="object-contain"
              />
            </div>
            <h4 className="text-xl font-semibold text-gray-800 mb-2">
              Set Unlock Time
            </h4>
            <p className="text-gray-600 text-sm max-w-xs">
              Pick a future date and time when the capsule will unlock.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-full h-48 relative mb-6">
              <Image
                src=" / send-and-seal-image.svg"
                alt="Send and Seal"
                fill
                className="object-contain"
              />
            </div>
            <h4 className="text-xl font-semibold text-gray-800 mb-2">
              Send & Seal
            </h4>
            <p className="text-gray-600 text-sm max-w-xs">
              Send it via email, link, or share it publicly. Password-protect it
              if you like.
            </p>
          </div>
        </div>

        {/* Call-to-Action Button */}
        <Link href="/signup">
          <button className="bg-green-500 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-green-600 transition">
            Try for Free Now →
          </button>
        </Link>
      </div>
    </section>
  );
}
