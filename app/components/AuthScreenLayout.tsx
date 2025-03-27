import React from "react";
import Image from "next/image";
import Logo from "../../public/images/logo-timelycapsule.svg";

type AuthScreenLayoutProps = {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  imageSrc?: string;
  imageAlt?: string;
  overlayImageSrc?: string;
  overlayImageAlt?: string;
};

const AuthScreenLayout: React.FC<AuthScreenLayoutProps> = ({
  children,
  title = "Welcome",
  subtitle = "Please sign in to your account",
  imageSrc = "/images/auth-background.jpg",
  imageAlt = "Authentication background image",
  overlayImageSrc,
  overlayImageAlt = "Overlay image",
}) => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Form Section */}
      <div className="flex-1 flex flex-col justify-center items-center px-6 py-12 md:px-12 bg-white dark:bg-slate-900">
        <div className="w-full max-w-md">
          <Image src={Logo} alt="logo" className="mb-8" />
        </div>
        {/* Mobile view image banner - shown only on small screens */}
        <div className="md:hidden w-full h-32 relative mb-8 rounded-lg overflow-hidden">
          {imageSrc && (
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              priority
              className="object-cover z-10"
            />
          )}

          {/* Mobile overlay image */}
          {overlayImageSrc && (
            <div className="absolute bottom-0 left-0 right-0 h-[15%] z-20 overflow-hidden">
              <div className="relative w-full h-full">
                <Image
                  src={overlayImageSrc}
                  alt={overlayImageAlt}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4 z-30">
            <h2 className="text-xl font-bold text-white">TimelyCapsule</h2>
          </div>
        </div>
        <div className="w-full max-w-md space-y-8">
          <div className="text-left">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h1>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              {subtitle}
            </p>
          </div>

          {children}
        </div>
      </div>

      {/* Image Section - Hidden on small screens, visible on medium and up */}
      <div className="hidden md:flex md:w-1/2 relative">
        {imageSrc && (
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            priority
            className="object-cover z-10"
          />
        )}

        {/* Overlay image positioned at the bottom with 20% overlap */}
        {overlayImageSrc && (
          <div className="absolute bottom-0 left-0 right-0 h-[15%] z-20 overflow-hidden">
            <div className="relative w-full h-full">
              <Image
                src={overlayImageSrc}
                alt={overlayImageAlt}
                fill
                className="object-cover"
              />
            </div>
          </div>
        )}

        {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-12 z-30">
          <div className="text-white space-y-2">
            <h2 className="text-3xl font-bold">TimelyCapsule</h2>
            <p className="text-lg opacity-80">
              Preserve moments for the future
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default AuthScreenLayout;
