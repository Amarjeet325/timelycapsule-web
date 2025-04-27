"use client";

import { Capsule } from "@/app/_store/capsuleStore";
import FundAttachment from "./FundAttachment";
import CapsuleMessage from "./Message";
import CapsuleAttachments from "./Attachments";

interface Props {
  capsule: Omit<Capsule, "id">;
  hideFunds?: boolean;
}

export default function CapsulesPreview({ capsule, hideFunds = false }: Props) {
  return (
    <div className="w-full">
      <div className="mb-8 mt-8">
        <div className="w-full h-48 bg-gradient-to-r from-pink-200 via-red-300 to-purple-200 rounded-lg mb-6"></div>
        <CapsuleMessage {...capsule} />
        {!hideFunds && <FundAttachment {...capsule} />}
        <CapsuleAttachments {...capsule} />
      </div>
    </div>
  );
}
