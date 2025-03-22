import MediaAttachmentPreview from "../components/MediaAttachmentPreview";

export default function HomePage() {
  return (
    <>
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
    </>
  );
}
