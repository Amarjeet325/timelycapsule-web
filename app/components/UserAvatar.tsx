import React from "react";
import Image from "next/image";
import { User } from "lucide-react";

interface UserAvatarProps {
  imageUrl?: string;
  name?: string;
}

const UserAvatar: React.FC<UserAvatarProps> = ({ imageUrl, name = "User" }) => {
  return (
    <div className="flex items-center space-x-3">
      <div className="relative h-9 w-9 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center border border-gray-200">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={`${name}'s profile`}
            fill
            className="object-cover"
          />
        ) : (
          <User className="h-5 w-5 text-gray-500" />
        )}
      </div>
      {name && (
        <span className="hidden lg:block text-sm font-semibold text-[#1B212D]">
          {name}
        </span>
      )}
    </div>
  );
};

export default UserAvatar;
