"use client";

import { FormProvider } from "react-hook-form";
import { useRouter } from "next/navigation";

import useStepper from "@/app/_hooks/useStepper";
import { HeaderContent } from "@/app/(pages)/(user)/(protected)/capsules/create-capsule/page";
import BackButton from "@/app/components/BackButton";
import Button from "@/app/components/Button";
import { useCreatePublicCapsuleForm } from "@/app/_hooks/forms/useCreateCapsuleForm";

import CapsuleCreationForm from "@/app/(pages)/(user)/(protected)/capsules/create-capsule/_steps/CapsuleCreationForm";
import CapsuleDeliveryForm from "@/app/(pages)/(user)/(protected)/capsules/create-capsule/_steps/CapsuleDeliveryForm";
import CapsuleExpiryForm from "@/app/(pages)/(user)/(protected)/capsules/create-capsule/_steps/CapsuleExpiryForm";
import CapsulesPreview from "@/app/components/capsule/Preview";
import { useCallback } from "react";

const headerContentSteps: Omit<HeaderContent, "displayStep">[] = [
  {
    title: "🔒 Create Your Timely Capsule",
    subtitle:
      "Send a message into the future—text, media, or even crypto gifts, sealed until the perfect moment.",
  },
  {
    title: "🔒 Set Unlock Time & Expiry",
    subtitle:
      "Your recipient will only be able to unlock this capsule on the date you choose.",
  },
  {
    title: "🔒 Choose Delivery & Security",
    subtitle: "How should we deliver your time capsule?",
  },
  {
    title: "Preview Capsule",
    subtitle: "Preview of capsule details before sending.",
  },
];

const nbSteps = 4;
export default function CreateCapsulePage() {
  const { step, nextStep, previousStep, goToStep } = useStepper({
    steps: nbSteps,
  });

  const router = useRouter();
  const form = useCreatePublicCapsuleForm(step);
  const currentHeaderContent = getHeaderContent();

  const submitForm = useCallback(() => {
    const capsuleData = form.getValues();

    // @TODO : send capsule to backend
    console.log("submit capsule", capsuleData);

    // @TODO : use capsule id of the nex capsule created from backend
    router.push(`/capsules/c77dc201-3219-4743-b3f3-d95a3f512a9d`);
  }, [form, router]);

  const onEdit = useCallback(() => {
    goToStep(1);
  }, [goToStep]);

  const onBack = useCallback(() => {
    previousStep();
  }, [previousStep]);

  const onSubmit = useCallback(() => {
    nextStep();

    if (step >= nbSteps) {
      submitForm();
    }
  }, [nextStep, submitForm]);

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="max-w-[560px]">
          <div className="flex flex-col w-[540px]">
            <div className="flex items-end justify-between mb-16">
              {renderHeader(currentHeaderContent)}
            </div>
            {displayStep()}
            {renderButtons()}
          </div>
        </div>
      </form>
    </FormProvider>
  );

  function renderHeader({
    title,
    subtitle,
  }: Omit<HeaderContent, "displayStep">) {
    return (
      <div className="w-full">
        {step === nbSteps && (
          <div className="flex flex-row justify-end gap-8 mb-8">
            <Button outline label="Edit Capsule" onClick={onEdit} />
            <Button label="Send Capsule" type="submit" />
          </div>
        )}
        <div className="flex flex-col items-center justify-between text-center">
          <div className="font-semibold text-lg mb-3">{title}</div>
          <div className="max-w-[372px] text-xs text-gray-700 ">{subtitle}</div>
        </div>
      </div>
    );
  }

  function getHeaderContent(): Omit<HeaderContent, "displayStep"> {
    const currentContent = headerContentSteps[step - 1] || {};

    return {
      title: currentContent.title || "Create Your Timely Capsule",
      subtitle:
        currentContent.subtitle ||
        "Send a message into the future—text, media, or even crypto gifts, sealed until the perfect moment.",
    };
  }

  function displayStep() {
    if (step === 4) {
      return renderCapsulePreview();
    } else if (step === 3) {
      return <CapsuleDeliveryForm />;
    } else if (step === 2) {
      return <CapsuleExpiryForm />;
    }
    return <CapsuleCreationForm />;
  }

  function renderCapsulePreview() {
    const { getValues } = form;

    const capsuleData = getValues();

    return <CapsulesPreview capsule={capsuleData} hideFunds={true} />;
  }

  function renderButtons() {
    if (step >= 4) {
      return null;
    }

    const buttons: JSX.Element[] = [];

    if (step > 1) {
      buttons.push(<BackButton buttonAction={onBack} variant="plain" />);
    }

    const label = step === nbSteps ? "See Preview" : "Next";
    buttons.push(<Button label={label} type="submit" size="lg" />);

    return (
      <div className="flex gap-4 items-center justify-end mt-12">{buttons}</div>
    );
  }
}
