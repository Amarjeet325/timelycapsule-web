"use client";

import Image from "next/image";
import NotfounfImage from "../../public/images/notfoundIllustration.png";
import BackButton from "./BackButton";

const CapsuleNotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-full max-w-[647px] text-center px-4">
        <div className="mb-6">
          <Image
            src={NotfounfImage}
            alt="Capsule Not Found Illustration"
            width={320}
            height={240}
            className="mx-auto"
          />
        </div>

        <h1 className="text-2xl font-semibold text-gray-800 mb-3">
          Oops! This Capsule Doesn&apos;t Exist 🚫
        </h1>

        <p className="text-gray-600 mb-6 px-4">
          The link you followed is either incorrect, broken, or the capsule was
          never created. Maybe double-check the link, or better yet—why not
          create a new one?
        </p>

        <div className="flex items-center justify-center mx-auto">
          <BackButton
            variant="iconed"
            buttonAction={() => window.history.back()}
          />
        </div>
      </div>
    </div>
  );
};

export default CapsuleNotFound;
