"use client";

import React from "react";
import MediaCarousel from "./MediaCarousel";

const ExampleUsage: React.FC = () => {
  // Example media items
  const mediaItems = [
    {
      src: "/images/capsuleCardImg.jpeg",
      alt: "Example image 1",
      type: "image" as const,
    },
    {
      src: "/videos/example.mp4",
      alt: "Example video",
      type: "video" as const,
      muted: true,
      duration: 120,
    },
    {
      src: "/audio/example.mp3",
      alt: "Example audio",
      type: "audio" as const,
      duration: 180,
    },
    {
      src: "/images/party.jpeg",
      alt: "Example image 2",
      type: "image" as const,
    },
  ];

  return (
    <div className="max-w-lg mx-auto my-8">
      <h2 className="text-2xl font-bold mb-4">Media Attachments</h2>
      <MediaCarousel mediaItems={mediaItems} />
    </div>
  );
};

export default ExampleUsage;
