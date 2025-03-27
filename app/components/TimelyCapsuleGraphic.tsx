"use client";
import Image from "next/image";

export default function TimedMessaging() {
  return (
    <div className="w-full max-w-[600px] mx-auto h-screen flex flex-col">
      <div className="flex-1 w-full relative">
        <Image
          src="/images/timely_capsule_img.png"
          alt="Timed Messaging"
          fill={true}
          className="object-cover"
          sizes="(max-width: 600px) 100vw, 600px"
        />
      </div>

      <div className="w-full h-1/5 bg-green-900 flex items-center justify-center text-white text-center p-6">
        <h2 className="text-xl font-bold m-3">
          Unleash the Power of Timed Messaging
        </h2>
      </div>
    </div>
  );
}
