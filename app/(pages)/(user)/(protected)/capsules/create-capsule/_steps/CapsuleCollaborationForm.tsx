import Input from "@/app/components/form/Input";
import { useState } from "react";

export default function CapsuleCollaborationForm() {
  const [nbDisplayedInputs, setNbDisplayedInputs] = useState(3);

  return (
    <div className="flex flex-col gap-3">
      {renderInputs()}
      <div
        className="font-semibold underline underline-offset-2 cursor-pointer text-xs"
        onClick={addInput}
      >
        + Add Another Email
      </div>
    </div>
  );

  function addInput() {
    setNbDisplayedInputs((nbInputs) => {
      return nbInputs + 1;
    });
  }

  function renderInputs() {
    const inputs = [];
    for (let i = 0; i < nbDisplayedInputs; i++) {
      const name = `collaboartors[${i}]`;
      inputs.push(
        <Input
          type="email"
          name={name}
          label="Email Address"
          placeholder="Enter email address"
        />,
      );
    }

    return inputs;
  }
}
