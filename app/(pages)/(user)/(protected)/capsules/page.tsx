"use client";
import BackButton from "@/app/components/BackButton";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex gap-4 items-center justify-center">
        <BackButton
          buttonAction={() => {
            console.log("hello");
          }}
          variant="plain"
        />
        <BackButton
          buttonAction={() => {
            console.log("hello");
          }}
          variant="iconed"
        />
      </div>
    </div>
  );
};

export default page;
