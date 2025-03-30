import { ChangeEvent, useEffect, useState } from "react";
import { DayPicker } from "react-day-picker";
import "./custom-styles.css";
import "react-day-picker/style.css";
import Button from "@/app/components/Button";

interface CalendarProps {
  defaultValue?: Date;
  onSelect: (date: Date) => void;
  withTime?: boolean;
  validateButton?: boolean;
}

export default function Calendar({
  defaultValue,
  onSelect,
  validateButton = false,
  withTime = false,
}: CalendarProps) {
  const [startDate, setStartDate] = useState(defaultValue || initDate());

  useEffect(() => {
    if (!validateButton) {
      onSelect(startDate);
    }
  }, [startDate]);

  useEffect(() => {
    if (!withTime) {
      setStartDate((date) => {
        date.setHours(0);
        date.setMinutes(0);
        date.setSeconds(0);
        date.setMilliseconds(0);

        return new Date(date);
      });
    }
  }, [withTime]);

  return (
    <DayPicker
      className="bg-white shadow-lg p-2 rounded-md"
      timeZone={Intl.DateTimeFormat().resolvedOptions().timeZone}
      required={false}
      animate
      mode="single"
      selected={startDate}
      onSelect={(date) => date && onChangeDate(date)}
      footer={renderFooter()}
      disabled={isDisabled}
    />
  );

  function isDisabled(currentDate: Date): boolean {
    const today = new Date();
    today.setHours(0);
    today.setMinutes(0);
    today.setSeconds(0);
    today.setMilliseconds(0);

    return currentDate < today;
  }

  function renderFooter() {
    if (!withTime && !validateButton) {
      return null;
    }
    return (
      <div className="flex flex-col gap-2 my-1">
        {renderTimeSelection()}
        {renderValidateButton()}
      </div>
    );
  }

  function renderTimeSelection() {
    if (!withTime) {
      return null;
    }
    const selectClassName = "border border-gray-100 rounded-md py-1 px-1 mx-2";
    return (
      <>
        <div className="flex justify-center mb-1">Time</div>
        <div className="flex justify-center">
          <select className={selectClassName} onChange={onChangeHour}>
            {[...new Array(24)].map((_, hour) => (
              <option key={hour} value={hour}>
                {hour.toString().padStart(2, "0")}
              </option>
            ))}
          </select>
          :
          <select className={selectClassName} onChange={onChangeMinute}>
            {[...new Array(60)].map((_, min) => (
              <option key={min} value={min}>
                {min.toString().padStart(2, "0")}
              </option>
            ))}
          </select>
        </div>
      </>
    );
  }

  function renderValidateButton() {
    if (!validateButton) {
      return null;
    }

    return <Button label="Validate" onClick={() => onSelect(startDate)} />;
  }

  function onChangeDate(date: Date) {
    if (withTime) {
      date.setHours(startDate.getHours());
      date.setMinutes(startDate.getMinutes());
    }
    setStartDate(date);
  }

  function onChangeHour(ev: ChangeEvent<HTMLSelectElement>) {
    const newDate = new Date(startDate);
    newDate.setHours(parseInt(ev.target.value, 10));
    setStartDate(newDate);
  }
  function onChangeMinute(ev: ChangeEvent<HTMLSelectElement>) {
    const newDate = new Date(startDate);
    newDate.setMinutes(parseInt(ev.target.value, 10));
    setStartDate(newDate);
  }

  function initDate() {
    const date = new Date();
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);
    date.setMilliseconds(0);

    return date;
  }
}
