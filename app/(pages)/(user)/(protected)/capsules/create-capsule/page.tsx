"use client"
import React, { useCallback } from "react"
import { FormProvider } from "react-hook-form"

import useStepper from "@/app/_hooks/useStepper"
import Stepper from "@/app/_hooks/useStepper/Stepper"
import BackButton from "@/app/components/BackButton"
import Button from "@/app/components/Button"
import useCreateCapsuleForm, { type CreateCapsuleFormData } from "@/app/_hooks/forms/useCreateCapsuleForm"
import CapsulePreview from "@/app/components/capsule/Preview"

import CapsuleAttachmentsForm from "./_steps/CapsuleAttachmentsForm"
import CapsuleCreationForm from "./_steps/CapsuleCreationForm"
import CapsuleDeliveryForm from "./_steps/CapsuleDeliveryForm"
import CapsuleExpiryForm from "./_steps/CapsuleExpiryForm"
import CapsuleCollaborationTypeForm from "./_steps/CapsuleCollaborationTypeForm"
import CapsuleCollaborationForm from "./_steps/CapsuleCollaborationForm"
import CapsuleCountDown from "./_steps/CapsuleCountDown"
import CapsuleEditPreview from "./_steps/CapsuleEditPreview"
import { useRouter } from "next/navigation"

interface HeaderContent {
  title: string
  subtitle: string
  displayStep: number
}

const headerContentSteps: HeaderContent[] = [
  {
    title: "Choose Capsule Type",
    subtitle: "Is this a solo moment or a team effort?",
    displayStep: -1,
  },
  {
    title: "Add collaborators by email.",
    subtitle: "They'll be able to contribute and help seal the capsule.",
    displayStep: -1,
  },
  {
    title: "🔒 Create Your Timely Capsule",
    subtitle: "Send a message into the future—text, media, or even crypto gifts, sealed until the perfect moment.",
    displayStep: 1,
  },
  {
    title: "🔒 Set Unlock Time & Expiry",
    subtitle: "Your recipient will only be able to unlock this capsule on the date you choose.",
    displayStep: 2,
  },
  {
    title: "🔒 Choose Delivery & Security",
    subtitle: "How should we deliver your time capsule?",
    displayStep: 3,
  },
  {
    title: "Preview Capsule",
    subtitle: "Preview of capsule details before sending.",
    displayStep: 4,
  },
]

const nbSteps = headerContentSteps.length

export default function CapsuleCreation() {
  const { step, nextStep, previousStep, goToStep } = useStepper({
    steps: nbSteps,
  })

  const router = useRouter()

  const currentHeaderContent = getHeaderContent()

  const form = useCreateCapsuleForm(step)

  const goToCreationStep = useCallback(function () {
    goToStep(3)
  }, [])

  return (
    <div className="px-10 mt-14 mb-8">
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 xl:grid-cols-[5fr_4fr] gap-x-32 gap-y-12">
            <div className="flex items-end justify-between">
              {renderHeader(currentHeaderContent)}
              {currentHeaderContent.displayStep > 0 && (
                <Stepper
                  step={currentHeaderContent.displayStep}
                  steps={3}
                  completed={currentHeaderContent.displayStep > 3}
                />
              )}
            </div>
            <div />
            {displayStep()}
            {renderButtons()}
          </div>
        </form>
      </FormProvider>
    </div>
  )

  function getHeaderContent(): HeaderContent {
    const currentContent = headerContentSteps[step - 1] || {}

    return {
      title: currentContent.title || "Create Your Timely Capsule",
      subtitle:
        currentContent.subtitle ||
        "Send a message into the future—text, media, or even crypto gifts, sealed until the perfect moment.",
      displayStep: currentContent.displayStep || 0,
    }
  }

  function renderHeader({ title, subtitle }: HeaderContent) {
    return (
      <div className="max-w-[372px]">
        <div className="font-semibold text-lg mb-3">{title}</div>
        <div className="text-xs text-gray-700">{subtitle}</div>
      </div>
    )
  }

  function displayStep() {
    if (step === 6) {
      return (
        <>
          {renderCapsulePreview()}
          <CapsuleEditPreview onEdit={goToCreationStep} />
        </>
      )
    } else if (step === 5) {
      return (
        <>
          <CapsuleDeliveryForm />
          <CapsuleCountDown />
        </>
      )
    } else if (step === 4) {
      return (
        <>
          <CapsuleExpiryForm />
          <div />
        </>
      )
    } else if (step === 3) {
      return (
        <>
          <CapsuleCreationForm />
          <CapsuleAttachmentsForm />
        </>
      )
    } else if (step === 2) {
      return (
        <>
          <CapsuleCollaborationForm />
          <div />
        </>
      )
    }

    return (
      <>
        <CapsuleCollaborationTypeForm />
        <div />
      </>
    )
  }

  function renderCapsulePreview() {
    const { getValues } = form

    const capsuleData = getValues()

    return <CapsulePreview capsule={capsuleData} hideFunds={true} />
  }

  function renderButtons() {
    if (step >= 6) {
      return null
    }

    const buttons: JSX.Element[] = []

    if (step > 1) {
      buttons.push(<BackButton buttonAction={onPrevious} variant="plain" />)
    }

    const label = step === nbSteps ? "See Preview" : "Next"
    buttons.push(<Button label={label} type="submit" size="lg" />)

    return <div className="flex gap-4 items-center justify-end mt-12">{buttons}</div>
  }

  function onPrevious() {
    if (step === 3 && form.getValues("collaborationType") === "single") {
      previousStep(2)
    } else {
      previousStep()
    }
  }

  function onSubmit(data: CreateCapsuleFormData) {
    console.log("data", data)
    if (step === 1 && data.collaborationType === "single") {
      nextStep(2)
    } else {
      nextStep()
    }

    if (step >= nbSteps) {
      submitForm()
    }
  }

  function submitForm() {
    const capsuleData = form.getValues()

    // @TODO : send capsule to backend
    console.log("submit capsule", capsuleData)

    // @TODO : use capsule id of the nex capsule created from backend
    router.push(`capsules/c77dc201-3219-4743-b3f3-d95a3f512a9d/sent`)
  }
}
