/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, { useState, useEffect } from "react";
import MediaAttachmentPreview from "./MediaAttachmentPreview";

// Define the media item type
interface MediaItem {
  src: string;
  type?: "image" | "video" | "audio" | "unknown";
  alt: string;
  autoPlay?: boolean;
  controls?: boolean;
  loop?: boolean;
  muted?: boolean;
  duration?: number;
}

interface MediaCarouselProps {
  mediaItems: MediaItem[];
  className?: string;
}

const MediaCarousel: React.FC<MediaCarouselProps> = ({
  mediaItems,
  className = "",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // No need for carousel functionality if there's only 0 or 1 item
  const shouldShowControls = mediaItems.length > 1;

  // Navigate to next media item
  const goToNext = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === mediaItems.length - 1 ? 0 : prevIndex + 1,
    );
  };

  // Navigate to previous media item
  const goToPrevious = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? mediaItems.length - 1 : prevIndex - 1,
    );
  };

  // Go to a specific index
  const goToIndex = (index: number) => {
    if (isTransitioning || index === currentIndex) return;

    setIsTransitioning(true);
    setCurrentIndex(index);
  };

  // Reset transition state after animation completes
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  // Enable keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!shouldShowControls) return;

      if (e.key === "ArrowRight") {
        goToNext();
      } else if (e.key === "ArrowLeft") {
        goToPrevious();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [shouldShowControls, isTransitioning]);

  // Handle case when no media items are provided
  if (mediaItems.length === 0) {
    return null;
  }

  // Current media item
  const currentMedia = mediaItems[currentIndex];

  return (
    <div className={`relative ${className}`}>
      {/* Main content area */}
      <div
        className={`transition-opacity duration-300 ${
          isTransitioning ? "opacity-80" : "opacity-100"
        }`}
      >
        <MediaAttachmentPreview
          src={currentMedia.src}
          type={currentMedia.type}
          alt={currentMedia.alt}
          autoPlay={currentMedia.autoPlay}
          controls={currentMedia.controls}
          loop={currentMedia.loop}
          muted={currentMedia.muted}
          duration={currentMedia.duration}
        />
      </div>

      {/* Navigation controls - only show if we have multiple items */}
      {shouldShowControls && (
        <>
          {/* Left/Previous arrow */}
          <button
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 z-10 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            aria-label="Previous media"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Right/Next arrow */}
          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 z-10 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            aria-label="Next media"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Dots indicator */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
            {mediaItems.map((_, index) => (
              <button
                key={index}
                onClick={() => goToIndex(index)}
                className={`w-2 h-2 rounded-full transition-all focus:outline-none ${
                  currentIndex === index
                    ? "bg-white w-4"
                    : "bg-white/50 hover:bg-white/80"
                }`}
                aria-label={`Go to media ${index + 1}`}
              />
            ))}
          </div>

          {/* Media counter */}
          <div className="absolute top-4 right-4 bg-black/40 text-white text-xs px-2 py-1 rounded-md z-10">
            {currentIndex + 1} / {mediaItems.length}
          </div>
        </>
      )}
    </div>
  );
};

export default MediaCarousel;
