import { Earth, Heart, MessageCircle } from "lucide-react";
import Image from "next/image";

interface CapsuleCardProps {
  title: string;
  description: string;
  image: string;
  likes: number;
  comments: number;
  contributors: number;
}

export default function CapsuleCard({
  title,
  description,
  image,
  likes,
  comments,
  contributors,
}: CapsuleCardProps) {
  return (
    <div className=" w-[320px] md:w-[370px] h-[300px] rounded-lg bg-white flex items-stretch flex-col gap-1 shadow-lg cursor-pointer transform  hover:scale-105 transition duration-300  ">
      <div className=" w-full h-[55%] flex items-center justify-center rounded-t-lg overflow-hidden ">
        <Image
          src={image}
          alt={title}
          width={100}
          height={100}
          className="  w-full h-full object-cover "
        />
      </div>

      <div className=" h-[45%] w-full flex flex-col gap-1 items-start justify-center p-4 ">
        <small className="text-xs text-[#8D929E] font-semibold flex flex-row items-center gap-1 ">
          <Earth size={12} /> <span>Public challenge</span>
        </small>
        <h3 className="text-[000000] font-bold text-lg ">{title} </h3>
        <p className="text-xs text-[#354151] font-semibold mb-2 ">
          {description}{" "}
        </p>
        <div className="w-full flex items-center justify-start gap-3">
          <p className=" text-[#000000] font-medium text-sm  flex items-center gap-1 ">
            {" "}
            <Heart size={14} className="text-red-500 " /> {likes}k
          </p>
          <p className=" text-[#000000] font-medium text-sm  flex items-center gap-1">
            {" "}
            <MessageCircle size={14} /> {comments}{" "}
          </p>
          <p className="ml-auto text-[#000000] font-medium text-sm">
            {" "}
            {contributors} contributors
          </p>
        </div>
      </div>
    </div>
  );
}
