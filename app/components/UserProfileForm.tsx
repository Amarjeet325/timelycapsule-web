"use client";

import React, { useState, useRef } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import InputMask from "react-input-mask";
import {
  SquarePen,
  Trash2,
  AlertCircle,
  Mail,
  CalendarDays,
} from "lucide-react";

// Define interface for form validation errors
interface FormErrors {
  firstName?: string;
  lastName?: string;
  dateOfBirth?: string;
  mobileNumber?: string;
  email?: string;
}

// Define props interface
interface UserProfileFormProps {
  formState: {
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    mobileNumber: string;
    email: string;
  };
}

export default function UserProfileForm({ formState }: UserProfileFormProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(formState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [selectedDate, setSelectedDate] = useState<Date | null>(
    new Date(formState.dateOfBirth),
  );
  const datePickerRef = useRef<ReactDatePicker | null>(null);

  // Validation functions
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateMobileNumber = (number: string) => {
    const numberRegex = /^[0-9\s]+$/;
    return numberRegex.test(number) && number.replace(/\s/g, "").length >= 10;
  };

  const validateDate = (date: Date | null) => {
    return date !== null && date <= new Date();
  };

  // Validation helper function
  const validateDateInput = (value: string) => {
    // Regex to match dd/mm/yy, e.g., "31/12/99"
    const regex = /^(0[1-9]|[12]\d|3[01])\/(0[1-9]|1[0-2])\/\d{2}$/;
    if (!regex.test(value)) return false;

    const [dayStr, monthStr, yearStr] = value.split("/");
    const day = parseInt(dayStr, 10);
    const month = parseInt(monthStr, 10) - 1;
    const year = parseInt(yearStr, 10) + 2000; // Assumes 20xx for two-digit years
    const date = new Date(year, month, day);

    return (
      date.getFullYear() === year &&
      date.getMonth() === month &&
      date.getDate() === day
    );
  };

  const validateForm = () => {
    const newErrors: FormErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!validateDate(selectedDate)) {
      newErrors.dateOfBirth = "Invalid date or future date";
    }

    if (!validateMobileNumber(formData.mobileNumber)) {
      newErrors.mobileNumber = "Invalid mobile number";
    }

    if (!validateEmail(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear specific error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name as keyof FormErrors];
        return newErrors;
      });
    }
  };

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    if (date) {
      setFormData((prev) => ({
        ...prev,
        dateOfBirth: date.toLocaleDateString("en-US", {
          month: "2-digit",
          day: "2-digit",
          year: "numeric",
        }),
      }));

      // Clear date of birth error
      if (errors.dateOfBirth) {
        setErrors((prev) => {
          const newErrors = { ...prev };
          delete newErrors.dateOfBirth;
          return newErrors;
        });
      }
    }
  };

  const handleSaveChanges = () => {
    if (validateForm()) {
      setIsEditing(false);
    }
  };

  return (
    <div
      className={`${
        isEditing ? "max-w-4xl" : "max-w-2xl"
      } w-full mx-0 bg-white border rounded-lg`}
    >
      {/* Header */}
      <div className="p-6 flex justify-between items-center">
        <div>
          <h2 className="text-xl font-semibold">
            {isEditing ? "User Information" : "User Details"}
          </h2>
          {isEditing && (
            <p className="text-gray-400 text-sm mt-1">
              Edit and Update user account information.
            </p>
          )}
        </div>
      </div>

      {/* Content Section */}
      {isEditing ? (
        // Edit Mode
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-8">Personal Information</h2>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* First Name */}
              <div>
                <label className="block text-sm font-medium text-gray-500">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className={`mt-1 block w-full rounded-md border border-gray-100 shadow-sm px-3 py-2 ${
                    errors.firstName ? "border-red-500" : ""
                  }`}
                />
                {errors.firstName && (
                  <p className="mt-1 text-red-500 text-sm flex items-center">
                    <AlertCircle className="mr-1 h-4 w-4" /> {errors.firstName}
                  </p>
                )}
              </div>

              {/* Last Name */}
              <div>
                <label className="block text-sm font-medium text-gray-500">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className={`mt-1 block w-full rounded-md border border-gray-100 shadow-sm px-3 py-2 ${
                    errors.lastName ? "border-red-500" : ""
                  }`}
                />
                {errors.lastName && (
                  <p className="mt-1 text-red-500 text-sm flex items-center">
                    <AlertCircle className="mr-1 h-4 w-4" /> {errors.lastName}
                  </p>
                )}
              </div>

              {/* Date of Birth */}
              <div className="relative">
                <label className="block text-sm font-medium text-gray-500">
                  Date of Birth
                </label>
                <div className="relative flex items-center">
                  <InputMask
                    mask="99/99/99"
                    value={formData.dateOfBirth}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setFormData((prev) => ({
                        ...prev,
                        dateOfBirth: e.target.value,
                      }))
                    }
                    onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
                      const value = e.target.value.trim();
                      if (value && !validateDateInput(value)) {
                        setErrors((prev) => ({
                          ...prev,
                          dateOfBirth: "Invalid date format. Use dd/mm/yy",
                        }));
                      } else {
                        setErrors((prev) => {
                          const newErrors = { ...prev };
                          delete newErrors.dateOfBirth;
                          return newErrors;
                        });
                        if (value) {
                          // Convert the two-digit year to a full year (assuming 20xx)
                          const [dayStr, monthStr, yearStr] = value.split("/");
                          const day = parseInt(dayStr, 10);
                          const month = parseInt(monthStr, 10) - 1;
                          const year = parseInt(yearStr, 10) + 2000;
                          const parsedDate = new Date(year, month, day);
                          setSelectedDate(parsedDate);
                        }
                      }
                    }}
                    placeholder="dd/mm/yy"
                    className={`mt-1 block w-full rounded-md border border-gray-100 shadow-sm px-3 py-2 pr-10 ${
                      errors.dateOfBirth ? "border-red-500" : ""
                    }`}
                    inputMode="numeric"
                  >
                    {(
                      inputProps: React.InputHTMLAttributes<HTMLInputElement>,
                    ) => <input type="text" {...inputProps} />}
                  </InputMask>
                  <CalendarDays
                    onClick={() => datePickerRef.current?.setOpen(true)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 cursor-pointer"
                  />
                  <ReactDatePicker
                    ref={datePickerRef}
                    selected={selectedDate}
                    onChange={handleDateChange}
                    maxDate={new Date()}
                    dateFormat="dd/MM/yy"
                    className="absolute left-0 top-0 w-full h-full opacity-0"
                  />
                </div>
                {errors.dateOfBirth && (
                  <p className="mt-1 text-red-500 text-sm flex items-center">
                    <AlertCircle className="mr-1 h-4 w-4" />{" "}
                    {errors.dateOfBirth}
                  </p>
                )}
              </div>

              {/* Mobile Number */}
              <div>
                <label className="block text-sm font-medium text-gray-500">
                  Mobile Number
                </label>
                <input
                  type="text"
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleInputChange}
                  className={`mt-1 block w-full rounded-md border border-gray-100 shadow-sm px-3 py-2 ${
                    errors.mobileNumber ? "border-red-500" : ""
                  }`}
                />
                {errors.mobileNumber && (
                  <p className="mt-1 text-red-500 text-sm flex items-center">
                    <AlertCircle className="mr-1 h-4 w-4" />{" "}
                    {errors.mobileNumber}
                  </p>
                )}
              </div>

              {/* Email with Envelope Icon */}
              <div className="relative">
                <label className="block text-sm font-medium text-gray-500">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`mt-1 block w-full rounded-md border border-gray-100 shadow-sm px-10 py-2 ${
                      errors.email ? "border-red-500" : ""
                    }`}
                  />
                </div>
                {errors.email && (
                  <p className="mt-1 text-red-500 text-sm flex items-center">
                    <AlertCircle className="mr-1 h-4 w-4" /> {errors.email}
                  </p>
                )}
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-6 flex space-x-2">
              <button
                onClick={handleSaveChanges}
                className="bg-green-600 text-white font-semibold px-14 py-4 mt-4 rounded hover:bg-green-700 transition-colors"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      ) : (
        // View Mode
        <div className="p-6">
          <div className="flex justify-start mb-4">
            <div className="w-32 h-32 bg-gray-200 rounded-full"></div>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between border-b border-gray-200 pb-6">
              <span className="text-gray-600">Full Name</span>
              <span className="font-medium">
                {formData.firstName} {formData.lastName}
              </span>
            </div>
            <div className="flex justify-between border-b border-gray-200 pb-6">
              <span className="text-gray-600">Email Address</span>
              <span className="font-medium">{formData.email}</span>
            </div>
            <div className="flex justify-between border-b border-gray-200 pb-6">
              <span className="text-gray-600">Phone Number</span>
              <span className="font-medium">{formData.mobileNumber}</span>
            </div>
            <div className="flex justify-between border-b border-gray-200 pb-6">
              <span className="text-gray-600">Date of Birth</span>
              <span className="font-medium">{formData.dateOfBirth}</span>
            </div>
            <div className="flex justify-between border-b border-gray-200 pb-6">
              <span className="text-gray-600">Status</span>
              <span className="text-green-600 text-s bg-green-200 border rounded-lg px-2">
                Active
              </span>
            </div>
            <div className="flex justify-between pb-6">
              <span className="text-gray-600">Date Joined</span>
              <span className="font-medium">Fri Mar 22 2025 15:09:14</span>
            </div>
          </div>

          <div className="flex mt-6 space-x-2">
            <button
              onClick={() => setIsEditing(true)}
              className="bg-green-700 text-white px-6 py-4 rounded hover:bg-green-800 transition-colors"
            >
              <SquarePen />
            </button>
            <button className="bg-red-600 text-white px-6 py-4 rounded hover:bg-red-700 transition-colors">
              <Trash2 />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
