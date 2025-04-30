"use client";
import Image from "next/image";

import {
  Capsule,
  useCapsuleStore,
  useCurrentCapsule,
} from "@/app/_store/capsuleStore";
import BackButton from "@/app/components/BackButton";
import CountDown, { RemainingTime } from "@/app/components/CountDown";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/app/components/Button";
import ShareCapsuleModal from "@/app/components/modals/ShareCapsule";

export default function CapsuleSent({
  params,
}: {
  params: { id: Capsule["id"] };
}) {
  const router = useRouter();
  const [openedShareCapsule, setOpenedShareCapsule] = useState(true);

  const { loadCapsule } = useCapsuleStore();

  useEffect(() => {
    loadCapsule(params.id);
  }, [loadCapsule, params]);

  const capsule = useCurrentCapsule();

  if (!capsule) {
    return <div>404 not found</div>;
  }

  const isPastDate = new Date() > capsule.openDate;

  // / Format the unlock date for display
  const formattedUnlockDate = capsule.openDate.toLocaleString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <>
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
                  {isPastDate ? (
                    <span className="text-green-500">Unlocked!</span>
                  ) : (
                    <CountDown
                      targetDate={capsule?.openDate}
                      renderCountDown={renderCountDown}
                    />
                  )}
                </div>
              </>
            )}
          </div>

          {/* Navigation buttons */}
          <div className="flex flex-col items-center gap-4 w-full max-w-xs">
            <BackButton
              className="mt-4 mb-4"
              variant="iconed"
              buttonAction={handleDashboardClick}
              goLabel="Go to Dahsboard"
            />
            <Button
              outline
              label="Share Capsule"
              onClick={toggleShareCapsule}
            />
          </div>
        </div>
      </div>
      {openedShareCapsule && (
        <ShareCapsuleModal
          capsule={capsule}
          onCloseClick={toggleShareCapsule}
        />
      )}
    </>
  );

  function handleDashboardClick() {
    router.push("/dashboard");
  }

  function renderCountDown(remaningTime: RemainingTime) {
    return (
      <div className="flex flex-col items-center">
        <span className="text-xl">
          {remaningTime.days} {remaningTime.days === 1 ? "day" : "days"},{" "}
          {String(remaningTime.hours).padStart(2, "0")}:
          {String(remaningTime.minutes).padStart(2, "0")}:
          {String(remaningTime.seconds).padStart(2, "0")}
        </span>
      </div>
    );
  }

  function toggleShareCapsule() {
    setOpenedShareCapsule((isOpened) => !isOpened);
  }
}
