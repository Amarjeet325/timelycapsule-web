import Image from "next/image";

export type CapsuleStatus = "sent" | "received";

export interface CapsuleCardProps {
  name: string;
  description: string;
  timeCreated: string;
  unveilTime: string;
  capsuleLink: string;
  status: CapsuleStatus;
  imageSrc?: string;
}

const CapsuleCard = ({
  name,
  description,
  timeCreated,
  unveilTime,
  capsuleLink,
  status,
  imageSrc = "/images/capsuleCardImg.jpeg",
}: CapsuleCardProps) => {
  const statusConfig: Record<CapsuleStatus, { color: string; label: string }> =
    {
      sent: {
        color: "#246038",
        label: "Sent",
      },
      received: {
        color: "#E98000",
        label: "Received",
      },
    };

  const config = statusConfig[status];

  return (
    <div className="flex flex-col border-[0.71px] border-[#EEEEEEEE] w-full max-w-[250px] rounded-[9.41px]">
      <div className="border-[0.71px] border-[#EEEEEEEE] overflow-hidden rounded-t-[9.41px]">
        <Image
          src={imageSrc}
          alt={`${name} Capsule`}
          width={500}
          height={500}
          className="w-full h-full max-h-[159px] object-cover"
        />
      </div>
      <div className="flex flex-col gap-3 rounded-[9.41px] border-[0.71px] border-[#EEEEEEEE] p-3">
        <div className="flex justify-between flex-col gap-3">
          <p
            className="flex items-center gap-1.5 text-[10px]"
            style={{ color: config.color }}
          >
            <span
              className="h-2.5 w-2.5 rounded-full"
              style={{ backgroundColor: config.color }}
            ></span>
            <span className="font-semibold">{config.label}</span>
          </p>
          <div className="flex flex-col gap-3 text-[#212121]">
            <div className="gap-1.5 flex flex-col">
              <p className="font-bold text-[10px]">{name}</p>
              <p className="text-[8px] font-light">{description}</p>
            </div>
            <p className="font-mono text-[8px]">
              <span>Created </span>
              <span>{timeCreated}</span>
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-[8px] font-bold">{unveilTime}</span>
          <a
            href={capsuleLink}
            className="inline-flex shadow-md p-2 rounded w-full max-w-[88px] items-center justify-center gap-2 whitespace-nowrap text-[10px] font-bold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-gradient-to-r from-[#37945E] to-[#34D399] text-white hover:bg-gradient-to-br hover:from-[#37945E] hover:to-[#34D399]"
          >
            Open Capsule
          </a>
        </div>
      </div>
    </div>
  );
};

export default CapsuleCard;
