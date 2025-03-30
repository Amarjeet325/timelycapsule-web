"use client";
import React from "react";
import useStepper from "@/app/_hooks/useStepper";
import CapsuleAttachmentsForm from "@/app/components/create-caspule-forms/CapsuleAttachmentsForm";
import CapsuleCreationForm from "@/app/components/create-caspule-forms/CapsuleCreationForm";
import CapsuleDeliveryForm from "@/app/components/create-caspule-forms/CapsuleDeliveryForm";
import CapsuleExpiryForm from "@/app/components/create-caspule-forms/CapsuleExpiryForm";
import BackButton from "@/app/components/BackButton";
import Button from "@/app/components/Button";
import useCreateCapsuleForm, {
  CreateCapsuleForm,
} from "@/app/_hooks/forms/useCreateCapsuleForm";
import { FormProvider } from "react-hook-form";

const nbSteps = 3;

export default function NewCapsulePage() {
  const { step, nextStep, previousStep, Stepper } = useStepper({
    steps: nbSteps,
  });
  const form = useCreateCapsuleForm(step);

  return (
    <div className="px-10 mt-14 mb-8">
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 xl:grid-cols-[5fr_4fr] gap-x-32 gap-y-12">
            <div className="flex items-end justify-between">
              <div className="max-w-[372px]">
                <div className="font-semibold text-lg mb-3">
                  Create Your Timely Capsule
                </div>
                <div className="text-xs text-gray-700">
                  Send a message into the future—text, media, or even crypto
                  gifts, sealed until the perfect moment.
                </div>
              </div>
              <Stepper />
            </div>
            <div />
            {displayStep(step)}
            <div className="flex gap-4 items-center justify-end mt-12">
              {step > 1 && (
                <BackButton buttonAction={previousStep} variant="plain" />
              )}
              <Button
                label={step === nbSteps ? "Send Capsule" : "Next"}
                type="submit"
                size="lg"
              />
            </div>
          </div>
        </form>
      </FormProvider>
    </div>
  );

  function displayStep(step: number) {
    if (step === 1) {
      return (
        <>
          <CapsuleCreationForm />
          <CapsuleAttachmentsForm />
        </>
      );
    } else if (step === 2) {
      return (
        <>
          <CapsuleExpiryForm />
          <div />
        </>
      );
    } else if (step === 3) {
      return (
        <>
          <CapsuleDeliveryForm />
          <div />
        </>
      );
    }
  }

  function onSubmit(data: CreateCapsuleForm) {
    if (step >= nbSteps) {
      submitForm(data);
    } else {
      nextStep();
    }
  }

  function submitForm(data: CreateCapsuleForm) {
    console.log("submit capsule", data);
  }
}
