"use client";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import UserProfileForm from "../components/UserProfileForm";
import React from "react";

export default function HomePage() {
  const formState = {
    firstName: "Assad",
    lastName: "User1",
    dateOfBirth: "03/02/2025",
    mobileNumber: "090 00 00 00 0",
    email: "user1@gmail.com",
  };

  return (
    <>
      <Navbar
        currentRouteName="Users"
        toggleMobileMenu={() => console.log("Toggle mobile menu")}
      />
      <div className="flex">
        <Sidebar />
        <div className="flex-grow p-6 bg-white min-h-screen">
          <UserProfileForm formState={formState} />
        </div>
      </div>
    </>
  );
}
