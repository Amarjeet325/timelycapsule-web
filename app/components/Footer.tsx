"use client";

import Image from "next/image";

export default function FooterSection() {
  return (
    <footer className="bg-[#f9fafb] w-full pt-20">
      {/* Testimonial Section */}
      <div className="max-w-7xl mx-auto px-6 text-center flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          What Our <span className="text-green-500">Happy Users</span> Say
        </h2>
        <p className="text-gray-600 mb-10 text-lg">
          Real Capsules, Real Stories
        </p>

        {/* Testimonial Content */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          {/* User Image */}
          <div className="relative w-40 h-40 overflow-hidden rounded-full">
            <Image
              src="/emily-photo.png" // <- make sure to update this image in your public folder
              alt="Dr. Emily"
              fill
              className="object-cover"
            />
          </div>

          {/* Testimonial Text */}
          <div className="max-w-2xl text-left">
            <p className="text-gray-700 mb-6 text-md leading-relaxed">
              I teach history; my students unlock WWII primary sources as if
              it&apos;s 1945! Each capsule was set to unlock on the exact date
              of the historical event it represented. When my students opened
              them, it felt like they were experiencing history in real time.
              One student said, &quot;It&apos;s like we&apos;re time
              travelers.&quot; TimelyCapsule has transformed the way I teach,
              and my students are more engaged than ever.
            </p>

            {/* Pagination Dots */}
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-2 bg-green-500 rounded-full"></div>
              <div className="w-2 h-2 bg-green-200 rounded-full"></div>
              <div className="w-2 h-2 bg-green-200 rounded-full"></div>
              <div className="w-2 h-2 bg-green-200 rounded-full"></div>
              <div className="w-2 h-2 bg-green-200 rounded-full"></div>
            </div>

            {/* User Info */}
            <p className="font-semibold text-gray-800">Dr. Emily, Educator</p>
          </div>
        </div>
      </div>

      {/* Decorative background (optional) */}
      <div className="hidden md:block absolute top-[1200px] right-0">
        <div className="w-80 h-80 bg-gradient-to-br from-green-100 to-white rounded-full opacity-50"></div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 mt-20"></div>

      {/* Footer Links */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8 text-gray-700">
        {/* Company Description */}
        <div className="flex flex-col space-y-4">
          <h4 className="text-xl font-bold text-gray-900">
            Timely<span className="text-green-500">Capsule</span>
          </h4>
          <p className="text-sm leading-relaxed">
            TimelyCapsule is a web-based platform that lets you create, seal,
            and send time-locked messages, media, or crypto gifts. Whether
            it&apos;s a heartfelt note, a surprise video, or a crypto
            inheritance, we make every moment unforgettable.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <Image
              src="/facebook-icon.svg"
              alt="Facebook"
              width={24}
              height={24}
            />
            <Image src="/x-icon.svg" alt="X Twitter" width={24} height={24} />
            <Image
              src="/linkedin-icon.svg"
              alt="LinkedIn"
              width={24}
              height={24}
            />
          </div>
        </div>

        {/* What We Offer */}
        <div className="flex flex-col space-y-2">
          <h5 className="text-lg font-semibold mb-4">What We Offer</h5>
          <p>Time-Locked Messages</p>
          <p>Crypto Gifting</p>
          <p>Guest-Friendly Access</p>
          <p>Hybrid Security</p>
        </div>

        {/* Company */}
        <div className="flex flex-col space-y-2">
          <h5 className="text-lg font-semibold mb-4">Company</h5>
          <p>About Us</p>
          <p>Careers</p>
          <p>Become an Investor</p>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col space-y-2">
          <h5 className="text-lg font-semibold mb-4">Contact Information</h5>
          <div className="flex items-center gap-2">
            <Image src="/email-icon.svg" alt="Email" width={20} height={20} />
            <p>support@timelycapsule.com</p>
          </div>
          <div className="flex items-center gap-2">
            <Image
              src="/whatsapp-icon.svg"
              alt="Whatsapp"
              width={20}
              height={20}
            />
            <p>Whatsapp</p>
          </div>
          <div className="flex items-center gap-2">
            <Image
              src="/supportchat-icon.svg"
              alt="Support"
              width={20}
              height={20}
            />
            <p>24/7 Support Chat</p>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="text-center text-sm text-gray-500 py-6">
        Copyright © 2023 TimelyCapsule. All rights reserved.
      </div>
    </footer>
  );
}
