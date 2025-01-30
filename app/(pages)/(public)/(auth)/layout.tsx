"use client";

import Image from "next/image";
import Link from "next/link";

import logo from "@/public/img/logo.png";
import character from "@/public/img/character.png";
import rocket from "@/public/img/rocket.png";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col md:flex-row h-screen relative">
      <div className="flex-1 bg-gradient-to-b from-teal-300 via-blue-300 to-purple-300 p-8 flex flex-col justify-center items-center">
        <div className="relative w-64 h-64 md:w-96 md:h-96">
          <Image
            src={character}
            alt="Character illustration"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <h1 className="text-2xl md:text-4xl font-bold text-white mt-4">
          Capture and Share Moments for the Future
        </h1>
        <p className="text-white/80 mt-2 text-center">
          Send messages or media that unlock at the perfect moment.
        </p>
      </div>

      <div className="flex-1 flex flex-col justify-between p-8 bg-white rounded-tl-[50px] rounded-bl-[50px] md:rounded-none">
        <div className="flex flex-col justify-start items-start max-w-md w-full">
          <div className="text-left mb-8">
            <Image
              src={logo}
              alt="TimelyCapsule Logo"
              width={242}
              height={71}
              className="mx-auto"
            />
          </div>
        </div>
        <div className="max-w-[581px] w-full mx-auto">
          <h2 className="text-2xl font-semibold text-center mb-2">
            Join Timely<span className="text-teal-600">Capsule</span>
          </h2>
          <p className="text-gray-600 mb-8 text-center">
            Unlock your capsules across time and space.
          </p>
        </div>
        <div className="max-w-[581px] w-full mx-auto">{children}</div>
        <div className="max-w-md w-full mx-auto">
          <p className="mt-6 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link href="/login" className="text-teal-600 hover:text-teal-500">
              Sign in
            </Link>
          </p>
        </div>
      </div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-[calc(50%+70px)] -translate-y-1/2 w-24 h-24 sm:w-32 sm:h-32 md:w-[533px] md:h-[533px]">
        <Image
          src={rocket}
          alt="Rocket illustration"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </div>
  );
}
