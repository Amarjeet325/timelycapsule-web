import React, { useEffect, useState } from "react";

const getOrdinalSuffix = (day: number): string => {
  const suffixes = ["th", "st", "nd", "rd"];
  const value = day % 100;
  return suffixes[(value - 20) % 10] || suffixes[value] || suffixes[0];
};
const formatUnveilDate = (date: Date): string => {
  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  const ordinalDay = `${day}${getOrdinalSuffix(day)}`;

  const formattedTime = `${hours}:${minutes < 10 ? `0${minutes}` : minutes}`;

  return `${ordinalDay} ${month} ${year} ${formattedTime}`;
};

const calculateTimeUntilUnveil = (unveilDate: Date): string => {
  const now = new Date();
  const timeDiff = unveilDate.getTime() - now.getTime();

  if (timeDiff <= 0) {
    return "Unveiled";
  }

  const days = Math.floor(timeDiff / (1000 * 3600 * 24));
  const hours = Math.floor((timeDiff % (1000 * 3600 * 24)) / (1000 * 3600));
  const minutes = Math.floor((timeDiff % (1000 * 3600)) / (1000 * 60));
  const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

  const formattedHours = hours < 10 ? `0${hours}` : hours;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

  return `${days} Days - ${formattedHours}hr:${formattedMinutes}min:${formattedSeconds}sec`;
};

interface TimeUntilUnveilProps {
  unveilDate: Date;
}

const TimeUntilUnveil: React.FC<TimeUntilUnveilProps> = ({ unveilDate }) => {
  const [timeRemaining, setTimeRemaining] = useState<string>(
    calculateTimeUntilUnveil(unveilDate),
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const newTimeRemaining = calculateTimeUntilUnveil(unveilDate);
      setTimeRemaining(newTimeRemaining);
      if (newTimeRemaining === "Unveiled") {
        clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [unveilDate]);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="">
        <h1 className="text-sm font-bold">Countdown</h1>
        <div className="w-[500px] p-6 rounded-lg shadow-lg flex flex-col countdownstyles border-gray-300">
          <div className="flex flex-col gap-4 mb-4 border-spacing-6 border border-dashed border-gray-300 mt-4 p-6 bg-white rounded-lg">
            <div className="text-sm font-bold text-center">{timeRemaining}</div>
            <div className="text-sm text-center text-gray-600">Unveil Date</div>
            <div className="text-sm text-center font-semibold text-gray-900">
              {formatUnveilDate(unveilDate)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeUntilUnveil;
