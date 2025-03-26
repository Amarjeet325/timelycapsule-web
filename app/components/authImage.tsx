"use client";

import React from "react";
import Image from "next/image";

interface AuthImageProps {
  title: string;
  backgroundClass?: string;
  className?: string |number;
  mainImage: {
    src: string;
    alt: string;
  };
  capsuleImage?: {
    src: string;
    alt: string;
  };
}

const AuthImage: React.FC<AuthImageProps> = ({
  title,
  backgroundClass = "bg-[#48BB78]",
  mainImage,
  capsuleImage,
}) => {
  return (
    <div className={`w-[45%] ${backgroundClass} relative hidden md:block`}>
      <Image
        src={mainImage.src}
        alt={mainImage.alt}
        fill
        className="mb-12 pb-14 object-cover"
        priority
      />
      <div className="absolute bottom-0  left-0 right-0 p-8 text-white bg-[#1A3C34] text-center z-10">
        <h3 className="text-[20px] pb-3 font-bold font-kumbhSans">
          {title.split('\\n').map((line, i) => (
            <React.Fragment key={i}>
              {line}
              {i < title.split('\\n').length - 1 && <br />}
            </React.Fragment>
          ))}
        </h3>
      </div>

      {capsuleImage && (
        <div className="absolute bottom-12 right-4 z-20">
          <Image
            src={capsuleImage.src}
            alt={capsuleImage.alt}
            width={100}
            height={100}
            className="object-contain"
          />
        </div>
      )}
    </div>
  );
};

export default AuthImage;
