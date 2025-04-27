import { useState } from "react";
import Stepper from "./Stepper";

type ManagedStepperProps = Omit<
  Parameters<typeof Stepper>[0],
  "step" | "steps" | "completed"
>;

interface UseStepperParams {
  steps: number;
  initStep?: number;
  completed?: boolean;
}

export default function useStepper({
  steps,
  completed: initCompleted = false,
  initStep = 1,
}: UseStepperParams) {
  const [step, setStep] = useState(Math.min(initStep, steps + 1));
  const [completed, setCompleted] = useState(initCompleted);

  return {
    previousStep,
    nextStep,
    step: Math.min(step, steps),
    Stepper: ManagedStepper,
    completed,
    goToStep: setStep,
  };

  function previousStep(subSteps = 1) {
    setCompleted(false);
    setStep((currentStep) =>
      currentStep - subSteps <= 1 ? 1 : currentStep - subSteps,
    );
  }

  function nextStep(addedSteps = 1) {
    if (step === steps) {
      setCompleted(true);
    } else {
      setStep((currentStep) =>
        currentStep > steps - addedSteps ? steps : currentStep + addedSteps,
      );
    }
  }

  function ManagedStepper(props: ManagedStepperProps) {
    return (
      <Stepper steps={steps} step={step} completed={completed} {...props} />
    );
  }
}
