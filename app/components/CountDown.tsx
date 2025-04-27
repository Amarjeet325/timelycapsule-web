"use client";

import { useEffect, useState } from "react";

import { capsuleTimeScheduler } from "@/app/utils/timeScheduledCals";

interface Props {
  targetDate: Date;
  renderCountDown: (remaningTime: RemainingTime) => JSX.Element;
}

export interface RemainingTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountDown({ targetDate, renderCountDown }: Props) {
  const isValidDate =
    targetDate instanceof Date && !isNaN(targetDate.getTime());

  const [timeRemaining, setTimeRemaining] = useState<RemainingTime>(() => {
    if (isValidDate) {
      try {
        const res = capsuleTimeScheduler(targetDate);

        return {
          days: res.Days,
          hours: res.Hours,
          minutes: res.Minutes,
          seconds: res.Seconds,
        };
      } catch (error) {
        console.error(error);
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        };
      }
    }
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  });

  const isPastDate = new Date() > targetDate;

  useEffect(() => {
    if (isValidDate && !isPastDate) {
      const timer = setInterval(() => {
        try {
          const res = capsuleTimeScheduler(targetDate);
          setTimeRemaining({
            days: res.Days,
            hours: res.Hours,
            minutes: res.Minutes,
            seconds: res.Seconds,
          });
        } catch (error) {
          console.error("Error updating time remaining:", error);
          // Keep the current time remaining if there's an error
        }
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [targetDate, isPastDate, isValidDate]);

  return renderCountDown(timeRemaining);
}
