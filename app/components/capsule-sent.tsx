"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import BackButton from "@/app/components/BackButton";
import { capsuleTimeScheduler } from "@/app/utils/timeScheduledCals";

interface CapsuleSentProps {
  unlockDate: Date;
  onBackClick?: () => void;
}

const CapsuleSent: React.FC<CapsuleSentProps> = ({
  unlockDate,
  onBackClick,
}) => {
  const router = useRouter();
  const [timeRemaining, setTimeRemaining] = useState(
    capsuleTimeScheduler(unlockDate),
  );

  // Update the countdown timer every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(capsuleTimeScheduler(unlockDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [unlockDate]);

  const handleBackClick = () => {
    if (onBackClick) {
      onBackClick();
    } else {
      router.push("/dashboard");
    }
  };

  const handleDashboardClick = () => {
    router.push("/dashboard");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8 bg-white">
      <div className="w-full max-w-2xl flex flex-col items-center">
        {/* Cloud illustration */}
        <div className="relative w-full h-48 mb-6">
          <Image
            src="/images/capsule-sent-cloud.png"
            alt="Capsule sent illustration"
            fill
            className="object-contain"
          />
        </div>

        {/* Success message */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold font-kumbhSans mb-4">
            🎉 Your Capsule is on Its Way!
          </h1>
          <p className="text-gray-700 font-kumbhSans mb-2">
            Your time capsule has been successfully sealed and sent.
          </p>
          <p className="text-gray-700 font-kumbhSans">
            The recipient will unlock it at the perfect moment. ⌛✨
          </p>
        </div>

        {/* Countdown timer */}
        <div className="w-full max-w-md bg-white rounded-lg p-6 mb-8 text-center">
          <p className="text-gray-700 font-kumbhSans mb-4">🔒 Unlocks In:</p>
          <div className="text-xl font-bold font-kumbhSans">
            {timeRemaining.isUnveiled ? (
              <span className="text-green-500">Unlocked!</span>
            ) : (
              <span>
                {timeRemaining.Days} days, {timeRemaining.Hours} hr :{" "}
                {timeRemaining.Minutes} min : {timeRemaining.Seconds} sec
              </span>
            )}
          </div>
        </div>

        {/* Navigation buttons */}
        <div className="flex flex-col items-center gap-4 w-full max-w-xs">
          <button
            onClick={handleDashboardClick}
            className="w-full py-3 px-4 rounded-full font-medium text-center text-white transition-all bg-gradient-to-r from-[#48BB78] to-[#215537] hover:opacity-95 active:scale-[0.98]"
          >
            Go to Dashboard
          </button>

          <div className="mt-4">
            <BackButton variant="iconed" buttonAction={handleBackClick} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CapsuleSent;
