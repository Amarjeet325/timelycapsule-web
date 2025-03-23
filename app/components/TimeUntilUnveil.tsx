import React from "react";

interface TimeUntilUnveilProps {
  isUnveiled: boolean;
  Days: number;
  Minutes: number;
  Seconds: number;
  unveilDate: Date;
}

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

const TimeUntilUnveil: React.FC<TimeUntilUnveilProps> = ({
  isUnveiled,
  Days,
  Minutes,
  Seconds,
  unveilDate,
}) => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="">
        <h1 className="text-sm font-bold">Countdown</h1>
        <div
          style={{ background: "rgba(247, 251, 253, 1)" }}
          className="w-[500px] p-6 rounded-lg shadow-lg flex flex-col countdownstyles border-gray-300"
        >
          <div className="flex flex-col gap-4 mb-4 border-spacing-6 border border-dashed border-gray-300 mt-4 p-6 bg-white rounded-lg">
            <div className="text-sm font-bold text-center">
              {isUnveiled
                ? "Unveiled"
                : `${Days} Days - ${Minutes}min:${Seconds}sec`}
            </div>
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
