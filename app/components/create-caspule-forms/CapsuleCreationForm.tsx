import Input from "@/app/components/form/Input";
import TextArea from "@/app/components/form/TextArea";

export default function CapsuleCreationForm() {
  return (
    <div className="flex flex-col gap-3">
      <Input
        name="name"
        label="Capsule Name"
        details="Give your capsule a meaningful title"
        placeholder="Name"
      />
      <TextArea
        className="min-h-[240px]"
        name="message"
        optional
        label="Message"
        details="Write something memorable..."
        placeholder="Start typing......"
      />
      <Input name="senderName" label="Sender Name" placeholder="Enter a name" />
    </div>
  );
}
