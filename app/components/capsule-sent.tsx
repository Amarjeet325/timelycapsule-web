"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import BackButton from "@/app/components/BackButton";
import { capsuleTimeScheduler } from "@/app/utils/timeScheduledCals";
import { GradientButton } from "./Button";

interface CapsuleSentProps {
  unlockDate: Date;
  onBackClick?: () => void;
}

const CapsuleSent: React.FC<CapsuleSentProps> = ({
  unlockDate,
  onBackClick,
}) => {
  const router = useRouter();
  const isValidDate =
    unlockDate instanceof Date && !isNaN(unlockDate.getTime());
  const [timeRemaining, setTimeRemaining] = useState(() => {
    if (isValidDate) {
      try {
        return capsuleTimeScheduler(unlockDate);
      } catch (error) {
        console.error(error);
        return {
          isUnveiled: false,
          Days: 0,
          Hours: 0,
          Minutes: 0,
          Seconds: 0,
        };
      }
    }
    return {
      isUnveiled: false,
      Days: 0,
      Hours: 0,
      Minutes: 0,
      Seconds: 0,
    };
  });
  const prevSecondsRef = useRef(timeRemaining.Seconds);

  const isPastDate = new Date() > unlockDate;

  // Update the countdown timer every second
  useEffect(() => {
    if (isValidDate && !isPastDate) {
      const timer = setInterval(() => {
        try {
          setTimeRemaining(capsuleTimeScheduler(unlockDate));
        } catch (error) {
          console.error("Error updating time remaining:", error);
          // Keep the current time remaining if there's an error
        }
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [unlockDate, isPastDate, isValidDate]);

  // Validate the unlock date
  if (!isValidDate) {
    return (
      <div className="flex flex-col items-center min-h-screen px-4 py-8 bg-white">
        <div className="w-full max-w-md text-center">
          <h1 className="text-2xl font-semibold font-kumbhSans mb-4">
            Invalid Date
          </h1>
          <p className="text-red-500 mb-6">
            The unlock date for this capsule is invalid.
          </p>
          <GradientButton
            label="Return to Dashboard"
            onClick={() => router.push("/dashboard")}
          />
        </div>
      </div>
    );
  }

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

  // / Format the unlock date for display
  const formattedUnlockDate = unlockDate.toLocaleString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="flex flex-col items-center justify-center px-4 py-8 overflow-hidden bg-white">
      <div className="w-full max-w-2xl flex flex-col items-center">
        <div className="relative w-full mb-2 flex justify-center">
          <Image
            src="/images/clouds.svg"
            alt="Capsule sent illustration"
            height={150}
            width={450}
            className="object-center"
          />
        </div>

        <div className="relative w-full h-36 mb-2 flex justify-center mt-[-80px]">
          <Image
            src="/images/sent-rocket.svg"
            alt="Capsule sent illustration"
            height={100}
            width={200}
            className="object-contain"
          />
        </div>

        <div className="text-center mb-2">
          <h1 className="text-2xl font-semibold font-kumbhSans mb-4">
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
        <div className="w-full max-w-md bg-white rounded-lg p-6 mb-4 text-center">
          {isPastDate ? (
            <>
              <p className="text-gray-700 font-kumbhSans mb-4">🎉 Status:</p>
              <div className="text-xl font-medium font-kumbhSans">
                <span className="text-green-500">Ready to Open!</span>
                <p className="text-sm text-gray-500 mt-3">
                  Was available since: {formattedUnlockDate}
                </p>
              </div>
            </>
          ) : (
            <>
              <p className="text-gray-700 font-kumbhSans mb-4">
                🔒 Unlocks In:
              </p>
              <div className="text-xl font-medium font-kumbhSans">
                {timeRemaining.isUnveiled ? (
                  <span className="text-green-500">Unlocked!</span>
                ) : (
                  <div className="flex flex-col items-center">
                    <span className="text-xl">
                      {timeRemaining.Days}{" "}
                      {timeRemaining.Days === 1 ? "day" : "days"},{" "}
                      {String(timeRemaining.Hours).padStart(2, "0")}:
                      {String(timeRemaining.Minutes).padStart(2, "0")}:
                      <span
                        className={`${prevSecondsRef.current !== timeRemaining.Seconds ? "text-green-500" : ""}`}
                      >
                        {String(timeRemaining.Seconds).padStart(2, "0")}
                      </span>
                    </span>
                    <p className="text-sm text-gray-500 mt-3">
                      Unlocks on: {formattedUnlockDate}
                    </p>
                  </div>
                )}
              </div>
            </>
          )}
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
