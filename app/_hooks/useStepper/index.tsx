import { useState } from "react";
import Stepper from "./Stepper";

type ManagedStepperProps = Omit<
  Parameters<typeof Stepper>[0],
  "step" | "steps" | "completed"
>;

interface UseStepperParams {
  steps: number;
  initStep?: number;
}

/**
 * steps is the number of available steps
 *
 * step is the current step, it can go from 1 to (steps + 1)
 *   where (steps + 1) corresponds to a completed state
 *
 */
export default function useStepper({ steps, initStep = 1 }: UseStepperParams) {
  const [step, setStep] = useState(Math.min(initStep, steps + 1));
  const completed = step > steps;

  return {
    previousStep,
    nextStep,
    step: Math.min(step, steps),
    Stepper: ManagedStepper,
  };

  function previousStep() {
    setStep((currentStep) => (currentStep <= 2 ? 1 : currentStep - 1));
  }

  function nextStep() {
    setStep((currentStep) =>
      currentStep > steps - 1 ? steps : currentStep + 1,
    );
  }

  function ManagedStepper(props: ManagedStepperProps) {
    return (
      <Stepper steps={steps} step={step} completed={completed} {...props} />
    );
  }
}
