"use client";

import type React from "react";

import { useState, useRef } from "react";
import { Paperclip, X } from "lucide-react";

interface DescriptionProps {
  formData: {
    description: string;
    evidenceFiles: File[];
  };
  updateFormData: (
    data: Partial<{ description: string; evidenceFiles: File[] }>,
  ) => void;
}

export default function Description({
  formData,
  updateFormData,
}: DescriptionProps) {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const fileInputRef = useRef<HTMLInputElement>(null);

  const validateField = (name: string, value: string) => {
    if (name === "description" && (!value.trim() || value.length < 20)) {
      return "Please provide a detailed description (at least 20 characters)";
    }
    return "";
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    updateFormData({ [name]: value });

    const error = validateField(name, value);
    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles = Array.from(e.target.files);
      const updatedFiles = [...formData.evidenceFiles, ...newFiles];
      updateFormData({ evidenceFiles: updatedFiles });
    }
  };

  const handleRemoveFile = (index: number) => {
    const updatedFiles = [...formData.evidenceFiles];
    updatedFiles.splice(index, 1);
    updateFormData({ evidenceFiles: updatedFiles });
  };

  const triggerFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="space-y-6">
      <p className="text-gray-600">
        Please provide a detailed description of the issue and attach any
        relevant evidence.
      </p>

      <div className="space-y-4">
        <div>
          <label
            htmlFor="description"
            className="mb-1 block text-sm font-medium text-gray-700"
          >
            Description <span className="text-red-500">*</span>
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={5}
            placeholder="Please describe the issue in detail. Include steps to reproduce, expected behavior, and actual behavior."
            className={`w-full rounded-lg border ${
              errors.description ? "border-red-300" : "border-gray-300"
            } px-4 py-2 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200`}
            required
          />
          {errors.description && (
            <p className="mt-1 text-sm text-red-600">{errors.description}</p>
          )}
          <p className="mt-1 text-xs text-gray-500">
            {formData.description.length}/1000 characters
          </p>
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Evidence Files (Optional)
          </label>

          <div
            onClick={triggerFileInput}
            className="mt-1 flex cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 p-6 hover:bg-gray-100"
          >
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              multiple
              className="hidden"
              accept="image/*,.pdf,.txt,.doc,.docx"
            />
            <Paperclip className="mb-2 h-8 w-8 text-gray-400" />
            <p className="mb-1 text-sm font-medium text-gray-700">
              Click to upload files
            </p>
            <p className="text-xs text-gray-500">
              PNG, JPG, PDF, DOC up to 10MB each
            </p>
          </div>

          {formData.evidenceFiles.length > 0 && (
            <div className="mt-4 space-y-2">
              <p className="text-sm font-medium text-gray-700">
                Attached Files:
              </p>
              <div className="space-y-2">
                {formData.evidenceFiles.map((file, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between rounded-lg border border-gray-200 bg-gray-50 p-2"
                  >
                    <div className="flex items-center">
                      <div className="mr-2 rounded bg-indigo-100 p-1 text-xs font-medium text-indigo-800">
                        {file.name.split(".").pop()?.toUpperCase()}
                      </div>
                      <span className="text-sm text-gray-700 line-clamp-1">
                        {file.name}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleRemoveFile(index)}
                      className="ml-2 rounded-full p-1 text-gray-400 hover:bg-gray-200 hover:text-gray-600"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
