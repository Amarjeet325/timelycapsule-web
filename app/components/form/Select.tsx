import cn from "classnames";
import {
  FieldValues,
  Path,
  UseControllerProps,
  useFormContext,
} from "react-hook-form";

import { svgs } from "@/app/components/svgs";

import {
  CommonFields,
  extractBaseFieldProps,
  getFieldClassname,
  getFieldContainerClass,
  withDefaultProps,
} from "./_helpers";
import withBaseField from "./_withBaseField";
import { ChangeEvent, SelectHTMLAttributes } from "react";

type SelectProps = CommonFields & {
  options: Record<string, unknown>;
} & SelectHTMLAttributes<HTMLSelectElement>;

function Select<T extends FieldValues>(
  props: SelectProps & UseControllerProps<T>,
) {
  const { className, optional, options, ...otherProps } =
    withDefaultProps(props);

  const { getValues, setValue } = useFormContext();

  return (
    <div
      className={cn("relative cursor-pointer", getFieldContainerClass(props))}
    >
      <div className="absolute right-4 h-full flex items-center">
        <svgs.ArrowDown />
      </div>
      <select
        {...extractBaseFieldProps(otherProps)}
        className={cn(
          className,
          "w-full appearance-none cursor-pointer pr-11",
          getFieldClassname(props),
        )}
        required={!optional}
        onChange={onSelect}
        value={getInitialValue()}
      >
        {Object.entries(options).map(([optionLabel]) => {
          return (
            <option value={optionLabel} key={optionLabel}>
              {optionLabel}
            </option>
          );
        })}
      </select>
    </div>
  );

  function onSelect(ev: ChangeEvent<HTMLSelectElement>) {
    const newValue = options[ev.target.value];
    if (newValue) {
      setValue(props.name, newValue as Path<unknown>);
    }
  }

  function getInitialValue() {
    const initValue = getValues(props.name);
    return (
      Object.entries(options).find(([, value]) => {
        return value === initValue;
      })?.[0] || undefined
    );
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default withBaseField(Select<any>);
