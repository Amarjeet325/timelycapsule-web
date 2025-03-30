/* eslint-disable @typescript-eslint/no-unused-vars */
import { InputHTMLAttributes, useEffect, useState } from "react";
import cn from "classnames";
import {
  FieldValues,
  Path,
  useController,
  UseControllerProps,
  useFormContext,
} from "react-hook-form";
import Calendar from "@/app/components/Calendar";
import {
  CommonFields,
  extractBaseFieldProps,
  getFieldClassname,
  getFieldContainerClass,
  withDefaultProps,
} from "./_helpers";
import withBaseField from "./_withBaseField";

type DateTimePickerProps = CommonFields &
  InputHTMLAttributes<HTMLInputElement> & {
    withTime?: boolean;
  };

function DatePicker<T extends FieldValues>(
  props: DateTimePickerProps & UseControllerProps<T>,
) {
  const {
    className,
    withTime = false,
    ...otherProps
  } = withDefaultProps(props);
  const { getValues, setValue } = useFormContext();
  const initialDate = getValues(props.name);
  const [startDate, setStartDate] = useState(
    initialDate ? new Date(initialDate) : new Date(),
  );
  const [displayCalendar, setDisplayCalendar] = useState(false);

  useEffect(() => {
    setDate(startDate);
  }, [withTime]);

  return (
    <div className={cn("w-full", getFieldContainerClass(props))}>
      <input
        value={formatDate(startDate)}
        {...extractBaseFieldProps(otherProps)}
        onFocus={() => setDisplayCalendar(true)}
        className={cn(
          className,
          getFieldClassname(props),
          "rounded-none border-0 h-full, w-full",
        )}
        readOnly
      />
      <div
        className={cn("absolute z-50 left-1/2 translate-x-[-50%] mt-1", {
          hidden: !displayCalendar,
        })}
      >
        <Calendar
          onSelect={(date) => date && setDate(date)}
          validateButton
          withTime={withTime}
        />
      </div>
    </div>
  );

  function setDate(date: Date | undefined) {
    if (!date) {
      return;
    }
    setStartDate(date);
    setValue(props.name, date as Path<unknown>);
    setDisplayCalendar(false);
  }

  function formatDate(date: Date): string {
    if (withTime) {
      return date.toLocaleString().substring(0, 16);
    }

    return date.toLocaleString().split(" ")[0];
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default withBaseField(DatePicker<any>);
