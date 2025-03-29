"use client";

import { useState } from "react";

interface FormData {
  capsuleId: string;
  reporterName: string;
  reporterEmail: string;
}

interface BasicInfoProps {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
}

export default function BasicInfo({
  formData,
  updateFormData,
}: BasicInfoProps) {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateField = (name: string, value: string) => {
    if (!value.trim()) {
      return `${name.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())} is required.`;
    }

    if (name === "reporterEmail" && !/^\S+@\S+\.\S+$/.test(value)) {
      return "Please enter a valid email address.";
    }

    return "";
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    updateFormData({ [name]: value });

    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  return (
    <div className="space-y-6">
      <p className="text-gray-600">
        Please provide basic information about the capsule you&apos;re reporting
        and your contact details.
      </p>

      <div className="space-y-4">
        <div>
          <label
            htmlFor="capsuleId"
            className="mb-1 block text-sm font-medium text-gray-700"
          >
            Capsule ID <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="capsuleId"
            name="capsuleId"
            value={formData.capsuleId}
            onChange={handleChange}
            placeholder="Enter the capsule ID (e.g., CAP-12345)"
            className={`w-full rounded-lg border ${errors.capsuleId ? "border-red-300" : "border-gray-300"} 
                        px-4 py-2 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200`}
            required
          />
          {errors.capsuleId && (
            <p className="mt-1 text-sm text-red-600">{errors.capsuleId}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="reporterName"
            className="mb-1 block text-sm font-medium text-gray-700"
          >
            Your Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="reporterName"
            name="reporterName"
            value={formData.reporterName}
            onChange={handleChange}
            placeholder="Enter your full name"
            className={`w-full rounded-lg border ${errors.reporterName ? "border-red-300" : "border-gray-300"} 
                        px-4 py-2 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200`}
            required
          />
          {errors.reporterName && (
            <p className="mt-1 text-sm text-red-600">{errors.reporterName}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="reporterEmail"
            className="mb-1 block text-sm font-medium text-gray-700"
          >
            Your Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="reporterEmail"
            name="reporterEmail"
            value={formData.reporterEmail}
            onChange={handleChange}
            placeholder="Enter your email address"
            className={`w-full rounded-lg border ${errors.reporterEmail ? "border-red-300" : "border-gray-300"} 
                        px-4 py-2 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200`}
            required
          />
          {errors.reporterEmail && (
            <p className="mt-1 text-sm text-red-600">{errors.reporterEmail}</p>
          )}
        </div>
      </div>

      <div className="rounded-lg bg-blue-50 p-4">
        <p className="text-sm text-blue-800">
          <strong>Note:</strong> All fields marked with{" "}
          <span className="text-red-500">*</span> are required. Your contact
          information will only be used to follow up on this report.
        </p>
      </div>
    </div>
  );
}
