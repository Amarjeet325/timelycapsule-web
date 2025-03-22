import MediaAttachmentPreview from "../components/MediaAttachmentPreview";

import CapsuleTable, { Capsule } from "../components/CapsuleTable";

const sampleCapsules = [
  {
    id: "1",
    name: "Capsule Name",
    description: "Description",
    type: "Received",
    date: "2nd March, 2025",
    reveals: "03/20/2025, 2:32 PM",
  },
  {
    id: "2",
    name: "Capsule Name",
    description: "Description",
    type: "Received",
    date: "2nd March, 2025",
    reveals: "03/20/2025, 2:32 PM",
  },
  {
    id: "3",
    name: "Capsule Name",
    description: "Description",
    type: "Send",
    date: "2nd March, 2025",
    reveals: "03/20/2025, 2:32 PM",
  },
  {
    id: "4",
    name: "Capsule Name",
    description: "Description",
    type: "Received",
    date: "2nd March, 2025",
    reveals: "03/20/2025, 2:32 PM",
  },
  {
    id: "5",
    name: "Capsule Name",
    description: "Description",
    type: "Send",
    date: "2nd March, 2025",
    reveals: "03/20/2025, 2:32 PM",
  },
] as Capsule[];

export default function HomePage() {
  return (
    <div className="p-8 w-full">
      <h1>Home Page</h1>
      <div className="flex gap-2 px-5">
        <MediaAttachmentPreview
          src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Image1-preview"
          type="image"
        />
        <MediaAttachmentPreview
          src="https://images.unsplash.com/photo-1488372759477-a7f4aa078cb6?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Image2-preview"
          type="image"
        />
        <MediaAttachmentPreview
          src="http://www.w3schools.com/html/mov_bbb.mp4"
          alt="Media-preview"
          type="video"
        />

        <MediaAttachmentPreview
          src="/audio/winner.mp3"
          alt="Winner-preview"
          type="audio"
        />
      </div>

      <CapsuleTable data={sampleCapsules} rowCount={3} component="History" />
    </div>
    </>
  );
}
