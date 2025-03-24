import { NextRequest, NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
import { generatePresignedUrl } from "../../../utils/s3";
export async function POST(request: NextRequest) {
  try {
    const { filename, contentType } = await request.json();

    if (!filename || !contentType) {
      return NextResponse.json(
        { error: "Filename and contentType are required" },
        { status: 400 },
      );
    }

    const key = `uploads/${uuidv4()}-${filename}`;
    const presignedUrl = await generatePresignedUrl(key, contentType);
    const fileUrl = `https://${process.env.S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${key}`;

    return NextResponse.json({
      presignedUrl,
      fileUrl,
    });
  } catch (error) {
    console.error("Error generating presigned URL:", error);
    return NextResponse.json(
      { error: "Failed to generate upload URL" },
      { status: 500 },
    );
  }
}
