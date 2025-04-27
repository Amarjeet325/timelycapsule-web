import Button from "@/app/components/Button";
import FundAttachment from "@/app/components/capsule/FundAttachment";
import { useFormContext } from "react-hook-form";

interface Props {
  onEdit: () => void;
}

export default function CapsuleCountDown({ onEdit }: Props) {
  const { getValues } = useFormContext();

  const capsuleData = getValues();

  return (
    <div>
      <div className="flex flex-row gap-8 mb-20">
        <Button label="Edit Capsule" outline onClick={onEdit} />
        <Button type="submit" label="Send Capsule" className="px-12" />
      </div>
      <FundAttachment {...capsuleData} />
    </div>
  );
}
