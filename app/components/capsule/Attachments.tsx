import { Capsule } from "@/app/_store/capsuleStore";
import MediaImage from "@/app/components/medias/Image";
import MediaVideo from "../medias/Video";

const imageTypes = [
  "image/png",
  "image/jpeg",
  "image/gif",
  "image/webp",
  "image/avif",
  "image/svg+xml",
];
const videoTypes = ["video/webm", "video/mp4"];

export default function CapsuleAttachments({
  medias,
}: Pick<Capsule, "medias">) {
  const hasMedia = medias && medias.length > 0;

  return (
    <div>
      <h3 className="font-medium mb-2">Media Attachment</h3>
      {!hasMedia && (
        <div className="text-sm font-semibold">No attached medias</div>
      )}
      {hasMedia && (
        <div className="grid grid-cols-2 gap-4">{medias.map(renderMedia)}</div>
      )}
    </div>
  );

  function renderMedia(media: File) {
    if (imageTypes.includes(media.type)) {
      return <MediaImage image={media} />;
    }

    if (videoTypes.includes(media.type)) {
      return <MediaVideo video={media} />;
    }

    return <div>Not supported media</div>;
  }
}
