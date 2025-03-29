"use client";

import type React from "react";

import { useState } from "react";

interface IssueDetailsProps {
  formData: {
    issueType: string;
    severity: string;
  };
  updateFormData: (data: Partial<IssueDetailsProps["formData"]>) => void;
}

export default function IssueDetails({
  formData,
  updateFormData,
}: IssueDetailsProps) {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const issueTypes = [
    { value: "functionality", label: "Functionality Issue" },
    { value: "security", label: "Security Vulnerability" },
    { value: "performance", label: "Performance Problem" },
    { value: "compatibility", label: "Compatibility Issue" },
    { value: "content", label: "Inappropriate Content" },
    { value: "other", label: "Other" },
  ];

  const severityLevels = [
    {
      value: "critical",
      label: "Critical",
      description: "System crash, data loss, security breach",
    },
    {
      value: "high",
      label: "High",
      description: "Major functionality broken, no workaround",
    },
    {
      value: "medium",
      label: "Medium",
      description: "Functionality issue with workaround",
    },
    {
      value: "low",
      label: "Low",
      description: "Minor issue, cosmetic problem",
    },
  ];

  const validateField = (name: string, value: string) => {
    if (!value.trim() && name === "issueType") {
      return "Please select an issue type";
    }
    return "";
  };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    updateFormData({ [name]: value });

    const error = validateField(name, value);
    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const handleSeverityChange = (value: string) => {
    updateFormData({ severity: value });
  };

  return (
    <div className="space-y-6">
      <p className="text-gray-600">
        Please categorize the issue you&apos;re reporting and indicate its
        severity.
      </p>

      <div className="space-y-6">
        <div>
          <label
            htmlFor="issueType"
            className="mb-1 block text-sm font-medium text-gray-700"
          >
            Issue Type <span className="text-red-500">*</span>
          </label>
          <select
            id="issueType"
            name="issueType"
            value={formData.issueType}
            onChange={handleChange}
            className={`w-full rounded-lg border ${
              errors.issueType ? "border-red-300" : "border-gray-300"
            } px-4 py-2 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200`}
            required
          >
            <option value="" disabled>
              Select issue type
            </option>
            {issueTypes.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
          {errors.issueType && (
            <p className="mt-1 text-sm text-red-600">{errors.issueType}</p>
          )}
        </div>

        <div>
          <label className="mb-3 block text-sm font-medium text-gray-700">
            Severity Level <span className="text-red-500">*</span>
          </label>

          <div className="grid gap-3 md:grid-cols-2">
            {severityLevels.map((level) => (
              <div
                key={level.value}
                onClick={() => handleSeverityChange(level.value)}
                className={`cursor-pointer rounded-lg border p-4 transition-all hover:border-indigo-300 hover:bg-indigo-50 ${
                  formData.severity === level.value
                    ? "border-indigo-500 bg-indigo-50 ring-2 ring-indigo-200"
                    : "border-gray-200"
                }`}
              >
                <div className="flex items-center">
                  <div
                    className={`mr-3 h-4 w-4 rounded-full ${getSeverityColor(level.value)}`}
                  ></div>
                  <div>
                    <h4 className="font-medium">{level.label}</h4>
                    <p className="text-sm text-gray-500">{level.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function getSeverityColor(severity: string): string {
  switch (severity) {
    case "critical":
      return "bg-red-500";
    case "high":
      return "bg-orange-500";
    case "medium":
      return "bg-yellow-500";
    case "low":
      return "bg-green-500";
    default:
      return "bg-gray-500";
  }
}
