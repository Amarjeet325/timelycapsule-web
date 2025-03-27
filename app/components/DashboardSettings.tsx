"use client";

import { useState } from "react";
import edit from "@/public/images/edit.svg";
import Image from "next/image";
import Button from "./Button";
import { Mail } from "lucide-react";
import { Lock, Eye, EyeOff } from "lucide-react";

const DashboardSettings = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    mobileNumber: "",
    email: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [isChanged, setIsChanged] = useState(false);
  const [toggleNewPassword, setToggleNewPassword] = useState(false);
  const [toggleConfirmPassword, setToggleConfirmPassword] = useState(false);

  const handleToggleNewPassword = () => {
    setToggleNewPassword((prev) => !prev);
  };
  const handleToggleConfirmPassword = () => {
    setToggleConfirmPassword((prev) => !prev);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setIsChanged(true);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleUpdate = () => {
    setIsEditing(false);
    setIsChanged(false);
  };

  return (
    <div className="w-full md:w-4/5 p-6 rounded-lg">
      <h2 className="text-2xl font-semibold">Account Information</h2>
      <p className="text-gray-600">Update your account information</p>
      <div className="flex justify-between items-center my-4">
        <h3 className="text-lg font-medium">Personal Information</h3>
        {!isEditing && (
          <button
            onClick={handleEdit}
            className="text-green-600 hover:underline flex items-center"
          >
            <Image src={edit} alt="✏️" /> Edit
          </button>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* FirstName */}
        <div>
          <label className="text-[#78778B] text-sm">First Name</label>
          <input
            type="text"
            name="firstName"
            placeholder="Assad"
            value={formData.firstName}
            onChange={handleChange}
            disabled={!isEditing}
            className="border p-2 rounded w-full bg-transparent outline-none"
          />
        </div>

        {/* LastName */}
        <div>
          <label className="text-[#78778B] text-sm">Last Name</label>
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            disabled={!isEditing}
            className="border p-2 rounded w-full bg-transparent outline-none"
          />
        </div>

        {/* Date of Birth */}
        <div>
          <label className="text-[#78778B] text-sm">Date of Birth</label>

          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            disabled={!isEditing}
            className=" border p-2 rounded w-full bg-transparent outline-none"
          />
        </div>
        {/* Mobile Number */}
        <div>
          <label className="text-[#78778B] text-sm">Mobile Number</label>
          <input
            type="text"
            name="mobileNumber"
            placeholder="Mobile Number"
            value={formData.mobileNumber}
            onChange={handleChange}
            disabled={!isEditing}
            className="border p-2 rounded w-full bg-transparent outline-none"
          />
        </div>

        {/* Email */}
        <div className="md:col-span-2">
          <label className="text-[#78778B] text-sm">Email</label>
          <div className="flex items- gap-2 border p-2 rounded">
            <Mail />
            <input
              type="email"
              name="email"
              placeholder="user1@gmail.com"
              value={formData.email}
              disabled
              className="w-full bg-transparent outline-none"
            />
          </div>
        </div>

        {/* New Password */}
        <div>
          <label className="text-[#78778B] text-sm">New Password</label>
          <div className="flex items-center border p-2 rounded gap-2">
            <Lock />
            <input
              type={toggleNewPassword ? "text" : "password"}
              name="newPassword"
              placeholder="New Password"
              value={formData.newPassword}
              onChange={handleChange}
              disabled={!isEditing}
              className="w-full bg-transparent outline-none"
            />
            <span onClick={handleToggleNewPassword}>
              {toggleNewPassword ? <Eye /> : <EyeOff />}
            </span>
          </div>
        </div>

        {/* Confirm Password */}
        <div>
          <label className="text-[#78778B] text-sm font-semibold">
            Confirm Password
          </label>
          <div className="flex items-center border p-2 rounded gap-2">
            <Lock />
            <input
              type={toggleConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              disabled={!isEditing}
              className="w-full bg-transparent outline-none"
            />
            <span onClick={handleToggleConfirmPassword}>
              {toggleConfirmPassword ? <Eye /> : <EyeOff />}
            </span>
          </div>
        </div>
      </div>

      {isEditing && (
        <Button
          label="Update Profile"
          onClick={handleUpdate}
          disabled={!isChanged}
          className="mt-10"
          color={isChanged ? "green-600" : "gray-400"}
        />
      )}
    </div>
  );
};

export default DashboardSettings;
