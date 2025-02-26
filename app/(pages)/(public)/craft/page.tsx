"use client";

import { useCapsuleStore } from "@/app/_store/capsuleStore";
import { InputForm } from "@/app/components/InputForm";
import Stepper from "@/app/components/ui/Stepper";
import { Card } from "@/app/components/ui/Stepper/Card";
import Button from "@/Components/ui/Button";
import clsx from "clsx";
import { useState } from "react";

export default function CraftPage(): JSX.Element {
  const { addCapsule } = useCapsuleStore();

  const handleCreateCapsule = () => {
    const newCapsule = {
      id: Date.now().toString(),
      title: "New Capsule",
      content: "",
      createdAt: new Date().toISOString(),
      openAt: new Date().toISOString(),
    };
    addCapsule(newCapsule);
  };

  const nbSteps = 3;
  const [activeStep, setActiveStep] = useState(0);

  const onNextClick = () => {
    if (activeStep === nbSteps - 1) {
      handleCreateCapsule();
    } else {
      setActiveStep((step) => (step < nbSteps - 1 ? step + 1 : nbSteps - 1));
    }
  };

  const onPreviousClick = () => {
    setActiveStep((step) => (step > 0 ? step - 1 : 0));
  };

  return (
    <div className="flex flex-col items-center mt-8">
      <h1>Create New Time Capsule</h1>
      <div className="text-sm">
        Capture your memories and schedule them for perfect moment
      </div>
      <Stepper nbSteps={nbSteps} currentStep={activeStep} className="my-8" />
      <Card className="w-[696px]">
        <div className="flex flex-col gap-6">
          {activeStep === 0 && renderStep1()}
          {activeStep === 1 && renderStep2()}
          {activeStep === 2 && renderStep3()}
        </div>
        <div className="flex flex-row justify-between mt-8">
          <Button
            variant="outline"
            onClick={onPreviousClick}
            className={clsx({
              invisible: activeStep === 0,
            })}
          >
            Previous
          </Button>
          <Button variant="primary" onClick={onNextClick}>
            {activeStep === 2 ? "Create Capsule" : "Next"}
          </Button>
        </div>
      </Card>
    </div>
  );
}

function renderStep1() {
  return (
    <>
      <InputForm label="Capsule Title" placeholder="Enter a memorable title" />
    </>
  );
}

function renderStep2() {
  return (
    <>
      <InputForm label="Unlock Date & Time" />
    </>
  );
}

function renderStep3() {
  return (
    <>
      <InputForm
        label="Recipients"
        placeholder="Enter email addresses (comma separated)"
      />
      <InputForm
        className="mt-4"
        label="Personal Message"
        placeholder="Add a personal message to your recipients"
      />
    </>
  );
}
