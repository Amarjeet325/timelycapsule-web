"use client";

import { Timer } from "lucide-react";
import { HeaderLink } from "./components/HeaderLink";

export default function Header() {
  return (
    <div className="bg-primary h-[46px] overflow-hidden flex flex-row flex-wrap content-center justify-between text-white px-[70px]">
      <div className="flex flex-row flex-wrap font-extrabold content-center">
        <Timer color="white" className="mr-[10px]" />
        TimelyCapsule
      </div>
      <div className="flex flex-row gap-3 content-center">
        <HeaderLink icon="timer" label="Dashboard" href="/" />
        <HeaderLink icon="plus" label="Create" href="/craft" />
        <HeaderLink icon="earth" label="Public" href="/explore" />
        <HeaderLink icon="user" label="Profile" href="/profile" />
      </div>
    </div>
  );
}
