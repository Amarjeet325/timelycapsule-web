export interface TimeRemaining {
  isUnveiled: boolean;
  Days: number;
  Hours: number;
  Minutes: number;
  Seconds: number;
}
export interface ICapsuleTimeScheduler extends TimeRemaining {
  formattedTime: string;
}

function calculateTimeRemaining(targetDate: Date) {
  if (!(targetDate instanceof Date) || isNaN(targetDate.getTime())) {
    throw new Error(
      "Invalid date provided. Please provide a valid Date object.",
    );
  }

  const currentTime = new Date();

  const timeDifference = targetDate.getTime() - currentTime.getTime();

  if (timeDifference <= 0) {
    return {
      isUnveiled: true,
      Days: 0,
      Hours: 0,
      Minutes: 0,
      Seconds: 0,
    };
  }

  // Calculate time components
  const totalSeconds = Math.floor(timeDifference / 1000);

  const Days = Math.floor(totalSeconds / (24 * 60 * 60));
  const Hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
  const Minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
  const Seconds = Math.floor(totalSeconds % 60);

  return {
    isUnveiled: false,
    Days,
    Hours,
    Minutes,
    Seconds,
  };
}

function formatTimeRemaining(timeRemaining: TimeRemaining): string {
  if (timeRemaining.isUnveiled) {
    return "unlocked";
  }

  return `${timeRemaining.Days}D:${String(timeRemaining.Hours).padStart(2, "0")}h:${String(timeRemaining.Minutes).padStart(2, "0")}m:${String(timeRemaining.Seconds).padStart(2, "0")}s`;
}

export function capsuleTimeScheduler(targetDate: Date): ICapsuleTimeScheduler {
  const timeRemaining = calculateTimeRemaining(targetDate);
  const formattedTime = formatTimeRemaining(timeRemaining);

  return {
    ...timeRemaining,
    formattedTime,
  };
}
