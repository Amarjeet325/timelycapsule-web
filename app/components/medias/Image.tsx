/* eslint-disable @next/next/no-img-element */

interface Props {
  image: File;
}

export default function MediaImage({ image }: Props) {
  const fileUrl = URL.createObjectURL(image);

  return (
    <div className="relative rounded-lg overflow-hidden">
      <div className="aspect-video bg-gray-200 relative">
        <img
          className="min-h-full min-w-full max-h-full max-w-full object-cover"
          src={fileUrl}
          alt="Attached image"
        />
      </div>
    </div>
  );
}
