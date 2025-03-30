"use client"
import React from "react"
import useStepper from "@/app/_hooks/useStepper"
import CapsuleAttachmentsForm from "@/app/components/create-caspule-forms/CapsuleAttachmentsForm"
import CapsuleCreationForm from "@/app/components/create-caspule-forms/CapsuleCreationForm"
import CapsuleDeliveryForm from "@/app/components/create-caspule-forms/CapsuleDeliveryForm"
import CapsuleExpiryForm from "@/app/components/create-caspule-forms/CapsuleExpiryForm"
import BackButton from "@/app/components/BackButton"
import Button from "@/app/components/Button"
import useCreateCapsuleForm, { CreateCapsuleForm } from "@/app/_hooks/forms/useCreateCapsuleForm"
import { FormProvider } from "react-hook-form"
import CapsuleCountDown from "@/app/components/create-caspule-forms/CapsuleCountDown"

const nbSteps = 3

export default function NewCapsulePage() {
  const { step, nextStep, previousStep, Stepper } = useStepper({
    steps: nbSteps,
  })
  const form = useCreateCapsuleForm(step)

  return (
    <div className="px-10 mt-14 mb-8">
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 xl:grid-cols-[5fr_4fr] gap-x-32 gap-y-12">
            <div className="flex items-end justify-between">
              <div className="max-w-[372px]">
                <div className="font-semibold text-lg mb-3">Create Your Timely Capsule</div>
                <div className="text-xs text-gray-700">
                  Send a message into the future—text, media, or even crypto gifts, sealed until the perfect moment.
                </div>
              </div>
              <Stepper />
            </div>
            <div />
            {displayStep()}
            {renderButtons()}
          </div>
        </form>
      </FormProvider>
    </div>
  )

  function displayStep() {
    if (step === 3) {
      return (
        <>
          <CapsuleDeliveryForm />
          <CapsuleCountDown />
        </>
      )
    } else if (step === 2) {
      return (
        <>
          <CapsuleExpiryForm />
          <div />
        </>
      )
    }
    return (
      <>
        <CapsuleCreationForm />
        <CapsuleAttachmentsForm />
      </>
    )
  }

  function renderButtons() {
    const buttons: JSX.Element[] = []

    if (step > 1) {
      buttons.push(<BackButton buttonAction={previousStep} variant="plain" />)
    }

    const label = step === nbSteps ? "See Preview" : "Next"
    buttons.push(<Button label={label} type="submit" size="lg" />)

    return <div className="flex gap-4 items-center justify-end mt-12">{buttons}</div>
  }

  function onSubmit(data: CreateCapsuleForm) {
    nextStep()

    if (step >= nbSteps) {
      submitForm(data)
    }
  }

  function submitForm(data: CreateCapsuleForm) {
    console.log("submit capsule", data)
  }
}
