"use client";

import Image from "next/image";
import { useState } from "react";
import EmailForm from "./components/EmailForm";
import NewPasswordForm from "./components/NewPasswordForm";

export default function Page() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [isEmailSubmitted, setIsEmailSubmitted] = useState(false);

  const handleEmailSubmit = (email: string) => {
    setFormData((prev) => ({ ...prev, email }));
    setIsEmailSubmitted(true);
  };

  const handlePasswordSubmit = (password: string, confirmPassword: string) => {
    setFormData((prev) => ({ ...prev, password, confirmPassword }));
    console.log("Final Form Data:", formData);
  };

  return (
    <div className="w-full h-screen flex items-stretch justify-between">
      {/* Left Section - Form */}
      <section className="w-full bg-[#FFFFFF] flex flex-col items-center justify-center h-full relative p-4">
        <div className="absolute top-[4%] lg:left-[16%] left-[5%]">
          <Image
            src={"/images/timelyCapsule-logo.svg"}
            alt="logo"
            height={49}
            width={73.97}
          />
        </div>

        {!isEmailSubmitted ? (
          <EmailForm onSubmit={handleEmailSubmit} />
        ) : (
          <NewPasswordForm onSubmit={handlePasswordSubmit} />
        )}
      </section>

      {/* Right Section - Image & Text */}
      <section className="hidden md:flex flex-col justify-between items-stretch w-full max-w-[675px] h-full bg-black">
        <div className="h-[75vh] w-full flex items-center justify-center">
          <Image
            src={"/images/hand-image.svg"}
            alt={"image"}
            width={100}
            height={100}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex items-center justify-center bg-[#044921] p-[3%] text-center w-full h-[25vh] relative ">
          <div className=" flex items-end gap-1 justify-center  ">
            <h1 className="max-w-[322px] text-[#FFFFFF] font-bold text-[31px] leading-[33px]">
              Unleash the Power of Timed Messaging
            </h1>

            <div className="w-[132.58px] h-[50.69px]  flex items-center justify-center transform rotate-[10deg] mb-[-4%] ">
              <Image
                src={"/images/sidetext.svg"}
                alt="logo"
                height={49}
                width={73.97}
                className=" w-full h-full  "
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
