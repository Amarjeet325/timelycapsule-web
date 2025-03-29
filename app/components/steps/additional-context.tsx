"use client";

import type React from "react";

interface FormData {
  discoveryDate: string;
  affectedUsers: string;
  previouslyReported: boolean;
}

interface AdditionalContextProps {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
}

export default function AdditionalContext({
  formData,
  updateFormData,
}: AdditionalContextProps) {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value, type } = e.target as HTMLInputElement;

    if (type === "checkbox") {
      updateFormData({ [name]: (e.target as HTMLInputElement).checked });
    } else {
      updateFormData({ [name]: value });
    }
  };

  return (
    <div className="space-y-6">
      <p className="text-gray-600">
        Please provide additional context that might help us understand and
        address the issue.
      </p>

      <div className="space-y-4">
        <div>
          <label
            htmlFor="discoveryDate"
            className="mb-1 block text-sm font-medium text-gray-700"
          >
            When did you discover this issue?
          </label>
          <input
            type="date"
            id="discoveryDate"
            name="discoveryDate"
            value={formData.discoveryDate}
            onChange={handleChange}
            max={new Date().toISOString().split("T")[0]}
            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
          />
        </div>

        <div>
          <label
            htmlFor="affectedUsers"
            className="mb-1 block text-sm font-medium text-gray-700"
          >
            Who else is affected by this issue?
          </label>
          <textarea
            id="affectedUsers"
            name="affectedUsers"
            value={formData.affectedUsers}
            onChange={handleChange}
            rows={3}
            placeholder="Describe who else might be affected by this issue (e.g., specific user groups, all users, etc.)"
            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
          />
        </div>

        <div className="flex items-start">
          <div className="flex h-5 items-center">
            <input
              id="previouslyReported"
              name="previouslyReported"
              type="checkbox"
              checked={formData.previouslyReported}
              onChange={handleChange}
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
          </div>
          <div className="ml-3 text-sm">
            <label
              htmlFor="previouslyReported"
              className="font-medium text-gray-700"
            >
              Previously reported
            </label>
            <p className="text-gray-500">
              Have you previously reported this issue through other channels?
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-lg bg-green-50 p-4">
        <p className="text-sm text-green-800">
          <strong>Tip:</strong> The more context you provide, the better we can
          understand and address the issue. Include any details you think might
          be relevant.
        </p>
      </div>
    </div>
  );
}
