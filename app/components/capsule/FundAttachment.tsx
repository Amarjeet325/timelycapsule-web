import { Capsule } from "@/app/_store/capsuleStore";
import { X } from "lucide-react";

type Props = Pick<Capsule, "funds" | "currency"> & {
  onClose?: () => void;
};

export default function FundAttachment({ funds, currency, onClose }: Props) {
  const hasAttachedFunds = funds && currency;

  return (
    <div className="mb-6 border rounded-lg p-4">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-medium">Fund Attachment</h3>
        {onClose && (
          <div onClick={onClose}>
            <X className="w-5 h-5 text-gray-400" />
          </div>
        )}
      </div>
      <div className="border rounded-lg p-4">
        {hasAttachedFunds && (
          <div className="flex items-center justify-between mt-3">
            <span className="text-2xl font-bold">{funds}</span>
            <span className="text-gray-500">{currency}</span>
          </div>
        )}
        {!hasAttachedFunds && (
          <div className="text-sm font-semibold">No attached funds</div>
        )}
      </div>
    </div>
  );
}
