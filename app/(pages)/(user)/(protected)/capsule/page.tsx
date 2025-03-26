"use client";

import CapsuleSent from "@/app/components/capsule-sent";
import React from "react";

const CapsuleSentPage = () => {
  // Example: Capsule unlocks in 5 days from now
  const unlockDate = new Date();
  unlockDate.setDate(unlockDate.getDate() + 5);
  unlockDate.setHours(unlockDate.getHours() + 2);
  unlockDate.setMinutes(unlockDate.getMinutes() + 30);

  return <CapsuleSent unlockDate={unlockDate} />;
};

export default CapsuleSentPage;
