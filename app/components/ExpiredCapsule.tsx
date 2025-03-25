"use client";

import Image from "next/image";
import BackButton from "./BackButton";

const ExpiredCapsule = () => {
  return (
    <div className="flex items-center justify-center h-full bg-white">
      <div className="w-full flex flex-col max-w-[647px] text-center px-4">
        <div className="mb-6">
          <Image
            src="/images/expired-capsule.png"
            alt="Capsule Expired Illustration"
            width={320}
            height={240}
            className="mx-auto"
          />
        </div>

        <h1 className="text-2xl font-semibold text-gray-800 mb-3">
          This Capsule Has Faded Away... ⏳
        </h1>

        <p className="text-gray-600 mb-6 px-4">
          Looks like this time capsule has reached its expiration date and is no
          longer accessible. Some moments are fleeting, but new ones are always
          waiting to be created
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

export default ExpiredCapsule;
