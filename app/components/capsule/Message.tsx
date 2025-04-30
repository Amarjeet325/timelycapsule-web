import { Capsule } from "@/app/_store/capsuleStore";

export default function CapsuleMessage({
  name,
  senderName,
  message,
}: Pick<Capsule, "name" | "senderName" | "message">) {
  if (!message) {
    return null;
  }

  return (
    <div className="bg-gray-50 rounded-lg p-6 mb-6">
      <div className="flex flew-col mb-6 font-semibold text-lg">
        <h3 className="grow">{name}</h3>
        <div>__Creator_name__</div>
      </div>

      <div>
        <h3 className="font-medium mb-6">Message</h3>
        <div className="text-sm">
          <div className="text-sm leading-6">{renderText(message)}</div>
          {senderName && <p className="mt-6 text-sm">- {senderName}</p>}
        </div>
      </div>
    </div>
  );

  function renderText(message: string) {
    const lines = message.split("\n");

    return lines.map((line, i) => (
      <p key={i} className="mb-2">
        {line}
      </p>
    ));
  }
}
