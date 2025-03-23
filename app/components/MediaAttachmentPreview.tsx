"use client";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";

type MediaType = "image" | "video" | "audio" | "unknown";

interface MediaAttachmentPreviewProps {
  src: string;
  type?: MediaType;
  alt: string;
  className?: string;
  autoPlay?: boolean;
  controls?: boolean;
  loop?: boolean;
  muted?: boolean;
  duration?: number;
}

const formatDuration = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes}:${remainingSeconds.toString().padStart(2, "0")} M`;
};

const getMediaTypeFromUrl = (url: string): MediaType => {
  if (!url) return "unknown";

  const extension = url.split(".").pop()?.toLowerCase();

  if (["jpg", "jpeg", "png", "gif", "webp", "svg"].includes(extension || "")) {
    return "image";
  } else if (["mp4", "webm", "ogg", "mov"].includes(extension || "")) {
    return "video";
  } else if (["mp3", "wav", "ogg", "aac"].includes(extension || "")) {
    return "audio";
  }

  return "unknown";
};

const MediaAttachmentPreview: React.FC<MediaAttachmentPreviewProps> = ({
  src,
  type,
  alt = "Media preview",
  className = "",
  autoPlay = false,
  controls = false,
  loop = false,
  muted = true,
  duration = 60,
}) => {
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [actualDuration, setActualDuration] = useState<number>(duration);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [showImageModal, setShowImageModal] = useState<boolean>(false);

  const mediaRef = useRef<HTMLVideoElement | HTMLAudioElement | null>(null);
  const uniqueVidId = useRef<string>(
    `media-${Math.random().toString(36).substring(2, 9)}`,
  );

  const mediaType = type || getMediaTypeFromUrl(src);

  const handleError = () => {
    setError(true);
    setLoading(false);
  };

  // Toggle play/pause
  const togglePlay = () => {
    if (mediaRef.current) {
      if (isPlaying) {
        mediaRef.current.pause();
      } else {
        mediaRef.current.play().catch((err) => {
          console.error("Error playing media:", err);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleImageModal = () => {
    setShowImageModal(!showImageModal);
  };

  // Close modal when pressing escape key
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && showImageModal) {
        setShowImageModal(false);
      }
    };

    window.addEventListener("keydown", handleEscKey);
    return () => {
      window.removeEventListener("keydown", handleEscKey);
    };
  }, [showImageModal]);

  useEffect(() => {
    const mediaElement = mediaRef.current;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => setIsPlaying(false);

    if (mediaElement) {
      mediaElement.addEventListener("play", handlePlay);
      mediaElement.addEventListener("pause", handlePause);
      mediaElement.addEventListener("ended", handleEnded);
    }

    return () => {
      if (mediaElement) {
        mediaElement.removeEventListener("play", handlePlay);
        mediaElement.removeEventListener("pause", handlePause);
        mediaElement.removeEventListener("ended", handleEnded);
      }
    };
  }, []);

  // Reset states if source changes
  useEffect(() => {
    setError(false);
    setLoading(false);
    setIsPlaying(false);
    setShowImageModal(false);
  }, [src]);

  const handleLoad = () => {
    setLoading(false);
    // If it's a video or audio and we have a ref, get the actual duration
    if ((mediaType === "video" || mediaType === "audio") && mediaRef.current) {
      setActualDuration(mediaRef.current.duration || duration);
    }
  };

  useEffect(() => {
    if (mediaType === "video") {
      setLoading(false);
    }
  }, [mediaType, alt, src]);

  // Handle body scroll locking when modal is open
  useEffect(() => {
    if (showImageModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [showImageModal]);

  if (mediaType === "unknown" || error) {
    return (
      <div
        className={`flex items-center justify-center bg-gray-100 w-[342px] h-[210px] rounded-lg p-4 ${className}`}
      >
        <div className="text-center">
          <div className="text-gray-400 mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              />
            </svg>
          </div>
          <p className="text-sm text-gray-500">
            {error ? "Failed to load media" : "Unsupported media format"}
          </p>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div
        className={`flex items-center justify-center bg-gray-100 rounded-lg p-4 w-[342px] h-[210px] ${className}`}
      >
        <div className="animate-pulse flex space-x-4">
          <div className="rounded-full bg-gray-300 h-10 w-10"></div>
          <div className="flex-1 space-y-2 py-1">
            <div className="h-2 bg-gray-300 rounded"></div>
            <div className="h-2 bg-gray-300 rounded w-5/6"></div>
          </div>
        </div>
      </div>
    );
  }

  if (mediaType === "image") {
    return (
      <>
        <div
          className={`relative overflow-hidden rounded-lg w-[342px] h-[210px] cursor-pointer ${className}`}
          onClick={toggleImageModal}
        >
          <Image
            src={src}
            alt={alt}
            fill
            className="w-full h-full object-cover"
            onLoad={handleLoad}
            onError={handleError}
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-opacity flex items-center justify-center">
            <div className="opacity-0 hover:opacity-100 text-white text-sm bg-black bg-opacity-50 py-1 px-3 rounded">
              Click to view full image
            </div>
          </div>
        </div>

        {/* Full-screen Image Modal */}
        {showImageModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
            <div className="relative w-full h-full flex flex-col items-center justify-center">
              {/* Close button */}
              <button
                className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70"
                onClick={toggleImageModal}
                aria-label="Close fullscreen view"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Image container with max height/width constraints */}
              <div className="relative max-w-screen-lg max-h-screen p-4">
                <Image
                  src={src}
                  alt={alt}
                  width={1200}
                  height={900}
                  className="object-contain max-h-screen"
                />
              </div>

              {/* Image caption/alt text */}
              <div className="text-white mt-2 text-center max-w-lg">{alt}</div>
            </div>
          </div>
        )}
      </>
    );
  }

  if (mediaType === "video") {
    return (
      <div
        className={`relative overflow-hidden rounded-lg w-[342px] h-[210px] ${className}`}
      >
        <video
          ref={mediaRef as React.RefObject<HTMLVideoElement>}
          id={uniqueVidId.current}
          className={`w-full h-full object-cover`}
          src={src}
          controls={controls || isPlaying}
          autoPlay={autoPlay}
          loop={loop}
          muted={muted}
          onLoadedData={handleLoad}
          onError={handleError}
        />

        {!controls && !isPlaying && (
          <div
            className="absolute inset-0 bg-black bg-opacity-20 z-10 flex flex-col justify-between"
            onClick={togglePlay}
          >
            <div className="mt-[17.33px] mr-[12px] text-white text-[11.56px] font-medium text-sm ml-auto">
              {formatDuration(actualDuration)}
            </div>
            <div className="m-auto">
              <div className="flex items-center justify-center w-8 h-8 bg-white bg-opacity-90 rounded-full cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-[19.37px] h-[19.37px] text-[#3C4242]"
                  style={{ marginLeft: isPlaying ? 0 : "2px" }}
                >
                  {isPlaying ? (
                    <path
                      fillRule="evenodd"
                      d="M6.75 5.25a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V5.25zm7.5 0A.75.75 0 0115 4.5h1.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H15a.75.75 0 01-.75-.75V5.25z"
                      clipRule="evenodd"
                    />
                  ) : (
                    <path
                      fillRule="evenodd"
                      d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                      clipRule="evenodd"
                    />
                  )}
                </svg>
              </div>
            </div>
            <div className="w-full text-center pb-4 text-white mb-[29.59px] font-medium font-ibmPlexSans text-[11.71px] leading-[100%]">
              Click to Play Video attachment
            </div>
          </div>
        )}
      </div>
    );
  }

  if (mediaType === "audio") {
    return (
      <div
        className={`bg-gray-100 p-4 w-[342px] h-[210px] flex justify-center rounded-lg ${className}`}
      >
        <div className="flex flex-col items-center">
          <div className="w-full h-1/2 my-auto">
            <div
              className="bg-gray-200 p-4 rounded-full mb-2 cursor-pointer mx-auto w-16 h-16 flex items-center justify-center"
              onClick={togglePlay}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isPlaying ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  />
                )}
              </svg>
            </div>
            <p className="text-center text-sm text-gray-600 truncate">
              {alt} • {formatDuration(actualDuration)}
            </p>
          </div>

          <audio
            ref={mediaRef as React.RefObject<HTMLAudioElement>}
            className="hidden"
            src={src}
            controls={controls}
            autoPlay={autoPlay}
            loop={loop}
            onLoadedData={handleLoad}
            onError={handleError}
          />

          {controls && (
            <div className="w-full">
              <audio className="w-full" src={src} controls />
            </div>
          )}
        </div>
      </div>
    );
  }

  // This should never be reached due to the previous checks
  return null;
};

export default MediaAttachmentPreview;
