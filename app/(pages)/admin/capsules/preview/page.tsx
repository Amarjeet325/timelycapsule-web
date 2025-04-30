import { Capsule } from "@/app/_store/capsuleStore";
import CapsulesPreview from "@/app/components/capsule/Preview";

export default function AdminCapsulePreview() {
  const capsule: Omit<Capsule, "id"> = {
    name: "My Capsule Name",
    openDate: new Date("2027-01-01 08:00:00"),
    collaborationType: "single",
    message: `Hey User,
I wrote this message to you [X] months ago, knowing that today would be special. Life moves fast, and I just wanted to remind you of how far you’ve come. I hope you're smiling right now. You deserve all the happiness in the world. 🌎✨
Take a deep breath, and remember—you are loved. Always. ❤️
Sending you a virtual hug from the past! 🤗`,
    senderName: "This Is Me",
  };

  return <CapsulesPreview capsule={capsule} />;
}
