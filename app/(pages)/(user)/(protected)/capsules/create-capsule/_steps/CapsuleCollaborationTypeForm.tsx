import { Capsule } from "@/app/_store/capsuleStore";
import { BaseField } from "@/app/components/form/_withBaseField";
import RadioBlock from "@/app/components/form/RadioBlock";
import { svgs } from "@/app/components/svgs";
import { ValueOf } from "next/dist/shared/lib/constants";

interface Choice {
  value: Capsule["collaborationType"];
  title: string;
  description: string;
  icon: keyof typeof svgs;
}

const choices: Choice[] = [
  {
    value: "single",
    title: "Solo Capsule",
    description: "(default)",
    icon: "SinglePeople",
  },
  {
    value: "collaborators",
    title: "Group Capsule",
    description: "(Invite collaborators to build this with you)",
    icon: "AddPeople",
  },
];

export default function CapsuleCollaborationForm() {
  return (
    <div className="flex flex-col gap-3">
      <BaseField name="collaborationType">
        {choices.map(renderRadioButton)}
      </BaseField>
    </div>
  );

  function renderRadioButton(choice: Choice) {
    const Icon = svgs[choice.icon] as ValueOf<typeof svgs>;

    return (
      <RadioBlock
        className="rounded-lg h-[96px] flex flex-row items-center gap-4 p-4 border has-[:checked]:border-primary cursor-pointer "
        name="collaborationType"
        value={choice.value}
      >
        <div className="h-[44px] w-[56px] bg-primary-light flex items-center justify-center rounded">
          <Icon />
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-sm font-semibold">{choice.title}</span>
          <span className="text-xs">{choice.description}</span>
        </div>
      </RadioBlock>
    );
  }
}
