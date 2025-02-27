import { LucideIcon } from "lucide-react";

interface CapsuleStatCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  bgColor: string;
  iconColor: string;
}

export default function CapsuleStatCard({
  title,
  value,
  icon: Icon,
  bgColor,
  iconColor,
}: CapsuleStatCardProps) {
  return (
    <div className="flex justify-start items-center space-x-4 p-4 w-72 shadow-lg rounded-lg bg-white">
      <p className={`${bgColor} rounded-full p-2`}>
        <Icon className={`${iconColor}`} />
      </p>
      <p className="flex flex-col">
        <span className="text-sm text-gray-600">{title}</span>
        <span className="text-2xl font-bold">{value}</span>
      </p>
    </div>
  );
}
