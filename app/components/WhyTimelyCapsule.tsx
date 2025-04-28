"use client";

import Image from "next/image";
import Button from "../components/Button";

export default function WhyTimelyCapsule() {
  return (
    <section className="w-full py-20 px-8 max-w-7xl mx-auto flex flex-col items-center">
      {/* Why TimelyCapsule Section */}
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold mb-4">
          Why Timely<span className="text-green-500">Capsule</span>?
        </h2>
        <p className="text-gray-600 text-lg">
          More than just messages — it is moments, memories, and money secured
          for the future.
        </p>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
        {/* Feature 1 */}
        <div className="flex flex-col items-center text-center px-6">
          <div className="bg-green-100 p-5 rounded-full mb-6">
            <Image
              src="/time-icon.svg"
              alt="Time-Locked Delivery"
              width={50}
              height={50}
            />
          </div>
          <h3 className="font-semibold text-xl mb-3">Time-Locked Delivery</h3>
          <p className="text-gray-600 text-base">
            Schedule a message to unlock on a first birthday, graduation, or
            milestone—even decades from now.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col items-center text-center px-6">
          <div className="bg-green-100 p-5 rounded-full mb-6">
            <Image
              src="/crypto-icon.svg"
              alt="Crypto & Cash Gifting"
              width={50}
              height={50}
            />
          </div>
          <h3 className="font-semibold text-xl mb-3">Crypto & Cash Gifting</h3>
          <p className="text-gray-600 text-base">
            Attach ETH, BTC, or fiat. Recipients claim funds only when the
            capsule opens—no wallet needed upfront!
          </p>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col items-center text-center px-6">
          <div className="bg-purple-100 p-5 rounded-full mb-6">
            <Image
              src="/security-icon.svg"
              alt="Hybrid Security"
              width={50}
              height={50}
            />
          </div>
          <h3 className="font-semibold text-xl mb-3">Hybrid Security</h3>
          <p className="text-gray-600 text-base">
            Web2 simplicity meets Web3 encryption. Your data stays private;
            payments stay decentralized.
          </p>
        </div>
      </div>

      {/* How It Works Section */}
      <section className="w-full bg-gray-50 py-20 px-8">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-green-500 text-4xl font-bold mb-4">
            How It Works
          </h2>
          <p className="text-gray-600 text-lg">Create a Capsule in 3 Steps</p>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16">
          {/* Left Steps */}
          <div className="flex flex-col gap-8 w-full md:w-1/2">
            {/* Step 1 */}
            <div className="flex items-start gap-4 p-6 border-2 border-blue-300 rounded-xl bg-white shadow-sm">
              <div className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center font-bold">
                1
              </div>
              <div className="text-left">
                <h4 className="font-bold text-lg mb-2">
                  Create & Customize Your Capsule
                </h4>
                <p className="text-gray-600 text-base">
                  Upload text, videos, or crypto. Add themes like &quot;Vintage
                  1990s&quot; or &quot;Space Adventure&quot;.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start gap-4 p-6">
              <div className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center font-bold">
                2
              </div>
              <div className="text-left">
                <h4 className="font-bold text-lg mb-2">
                  Set the Perfect Unlock Date
                </h4>
                <p className="text-gray-600 text-base">
                  Choose the exact date and time your capsule unlocks. Confirm
                  with email or wallet.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start gap-4 p-6">
              <div className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center font-bold">
                3
              </div>
              <div className="text-left">
                <h4 className="font-bold text-lg mb-2">
                  Share Your Capsule with Ease
                </h4>
                <p className="text-gray-600 text-base">
                  Share via link, email, or QR code. Recipients can view without
                  signing up.
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative w-[400px] h-[400px]">
            <Image
              src="/steps-image.png"
              alt="Steps Illustration"
              width={400}
              height={400}
              className="rounded-3xl object-cover shadow-lg"
            />
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-16 text-center">
          <Button label="Sign Up Now" color="green-500" size="lg" />
        </div>
      </section>
    </section>
  );
}
