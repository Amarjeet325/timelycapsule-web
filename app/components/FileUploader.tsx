"use client";

import { useState } from "react";
import { uploadFile } from "../utils/upload";

export default function FileUploader() {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadResult, setUploadResult] = useState<{
    success?: boolean;
    fileUrl?: string;
    error?: string;
  } | null>(null);

  const handleServerActionUpload = async () => {
    if (!file) return;

    setUploading(true);

    const formData = new FormData();
    formData.append("file", file);

    const result = await uploadFile(formData);
    setUploadResult(result);
    setUploading(false);
  };

  const handlePresignedUpload = async () => {
    if (!file) return;

    setUploading(true);

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          filename: file.name,
          contentType: file.type,
        }),
      });

      const { presignedUrl, fileUrl } = await response.json();

      await fetch(presignedUrl, {
        method: "PUT",
        headers: {
          "Content-Type": file.type,
        },
        body: file,
      });

      setUploadResult({ success: true, fileUrl });
    } catch (error) {
      console.error("Error uploading file:", error);
      setUploadResult({ error: "Failed to upload file" });
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="p-4 border rounded-md">
      <h2 className="text-xl font-bold mb-4">File Upload</h2>

      <div className="mb-4">
        <input
          type="file"
          onChange={(e) => e.target.files?.[0] && setFile(e.target.files[0])}
          className="mb-2"
        />

        {file && (
          <p className="text-sm text-gray-600">
            Selected: {file.name} ({Math.round(file.size / 1024)} KB)
          </p>
        )}
      </div>

      <div className="flex space-x-4">
        <button
          onClick={handleServerActionUpload}
          disabled={!file || uploading}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
        >
          {uploading ? "Uploading..." : "Upload (Server Action)"}
        </button>

        <button
          onClick={handlePresignedUpload}
          disabled={!file || uploading}
          className="px-4 py-2 bg-green-500 text-white rounded disabled:opacity-50"
        >
          {uploading ? "Uploading..." : "Upload (Presigned URL)"}
        </button>
      </div>

      {uploadResult && (
        <div className="mt-4 p-3 border rounded">
          {uploadResult.success ? (
            <div className="text-green-600">
              <p>Upload successful!</p>
              <p className="text-sm break-all">URL: {uploadResult.fileUrl}</p>
            </div>
          ) : (
            <p className="text-red-600">Error: {uploadResult.error}</p>
          )}
        </div>
      )}
    </div>
  );
}
