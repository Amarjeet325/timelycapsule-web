import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

export const s3Client = new S3Client({
  region: process.env.AWS_REGION as string,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
  },
});

export async function generatePresignedUrl(key: string, contentType: string) {
  const command = new PutObjectCommand({
    Bucket: process.env.S3_BUCKET_NAME,
    Key: key,
    ContentType: contentType,
  });

  const url = await getSignedUrl(s3Client, command, { expiresIn: 3600 });
  return url;
}

export async function uploadToS3(
  file: Buffer,
  key: string,
  contentType: string,
) {
  const params = {
    Bucket: process.env.S3_BUCKET_NAME,
    Key: key,
    Body: file,
    ContentType: contentType,
  };

  const command = new PutObjectCommand(params);
  return s3Client.send(command);
}
