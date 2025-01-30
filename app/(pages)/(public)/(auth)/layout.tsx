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
    <div className="flex flex-col md:flex-row h-screen relative font-manrope">
      <div className="flex-1 bg-auth-background p-8 flex flex-col justify-center items-center -mt-[10rem]">
        <div className="relative w-full h-full max-w-[550px] max-h-[926px]">
          <Image
            src={character}
            alt="Character illustration"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <h1 className="text-[32px] font-extrabold text-Heading/H1-mainThree text-center -mt-28">
          Capture and Share Moments for the Future
        </h1>
        <p className="text-Heading/H1-mainThree text-center text-base font-semibold mt-2">
          Send messages or media that unlock at the perfect moment.
        </p>
      </div>

      <div className="flex flex-1 bg-auth-background">
        <div className="flex flex-1 p-8 flex-col justify-between bg-Button/Primary-backgroundTwo rounded-tl-[50px] rounded-bl-[50px]">
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
            <h2 className="text-[32px] text-Heading/H1-mainTwo font-extrabold text-center mb-2 -mt-[5rem]">
              Join Timely
              <span className="text-Heading/H1-main font-extrabold">
                Capsule
              </span>
            </h2>
            <p className="text-Subheading/H4 text-center text-lg">
              Unlock your capsules across time and space.
            </p>
          </div>
          <div className="max-w-[581px] w-full mx-auto mt-[4rem]">
            {children}
          </div>
          <div className="max-w-md w-full mx-auto">
            <p className="mt-6 text-center text-lg text-Subheading/H4 font-semibold">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-Heading/H1-main hover:text-Heading/H1-main/40 text-lg font-bold"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>

      <div
        className="absolute top-1/2 left-1/2 transform 
      lg:-translate-x-[calc(50%+0px)] 
      xl:-translate-x-[calc(50%+40px)] 
      md:-translate-x-[calc(50%-00px)] 
      md:-translate-y-[calc(50%+130px)] 
      xl:-translate-y-[calc(50%+100px)] w-24 h-24 sm:w-32 sm:h-32 md:w-[480px] md:h-[480px] lg:w-[500px] lg:h-[500px] xl:w-[533px] xl:h-[533px]"
      >
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
