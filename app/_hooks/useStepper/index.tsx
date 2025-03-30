import { useState } from "react"
import Stepper from "./Stepper"

type ManagedStepperProps = Omit<Parameters<typeof Stepper>[0], "step" | "steps" | "completed">

interface UseStepperParams {
  steps: number
  initStep?: number
  completed?: boolean
}

export default function useStepper({ steps, completed: initCompleted = false, initStep = 1 }: UseStepperParams) {
  const [step, setStep] = useState(Math.min(initStep, steps + 1))
  const [completed, setCompleted] = useState(initCompleted)

  return {
    previousStep,
    nextStep,
    step: Math.min(step, steps),
    Stepper: ManagedStepper,
    completed,
  }

  function previousStep() {
    setCompleted(false)
    setStep((currentStep) => (currentStep <= 2 ? 1 : currentStep - 1))
  }

  function nextStep() {
    if (step === steps) {
      setCompleted(true)
    } else {
      setStep((currentStep) => (currentStep > steps - 1 ? steps : currentStep + 1))
    }
  }

  function ManagedStepper(props: ManagedStepperProps) {
    return <Stepper steps={steps} step={step} completed={completed} {...props} />
  }
}
