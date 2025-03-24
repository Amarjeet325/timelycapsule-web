"use server";

import { v4 as uuidv4 } from "uuid";
import { uploadToS3 } from "./s3";

export async function uploadFile(formData: FormData) {
  try {
    const file = formData.get("file") as File;

    if (!file) {
      return { error: "No file provided" };
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const key = `uploads/${uuidv4()}-${file.name}`;
    await uploadToS3(buffer, key, file.type);

    const fileUrl = `https://${process.env.S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${key}`;

    return {
      success: true,
      fileUrl,
    };
  } catch (error) {
    console.error("Error uploading file:", error);
    return { error: "Failed to upload file" };
  }
}
