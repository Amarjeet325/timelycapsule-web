import cn from "classnames";

interface StepperProps {
  /** Current step */
  step: number;
  /** Total number of steps */
  steps: number;
  completed?: boolean;
  className?: string;
}

export default function Stepper({
  className,
  completed = false,
  step,
  steps,
}: StepperProps) {
  const completedStep = completed ? steps : step - 1;

  return (
    <div className={cn("flex flex-col w-[138px]", className)}>
      <div className="text-xs">
        <span>
          Step {Math.min(step, steps)} of {steps}
        </span>
        {!!completed && (
          <span className="text-primary-darker font-semibold ml-1">
            Completed
          </span>
        )}
      </div>
      <div className="flex gap-1.5 mt-3">
        {[...Array(steps)].map((_, stepIndex) => {
          const isDone = stepIndex < completedStep;
          return (
            <div
              key={stepIndex}
              className={cn("h-1 grow rounded-full", {
                "bg-primary": isDone,
                "bg-primary-light": !isDone,
              })}
            />
          );
        })}
      </div>
    </div>
  );
}
