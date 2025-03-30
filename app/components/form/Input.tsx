import cn from "classnames";
import {
  FieldValues,
  Path,
  RegisterOptions,
  UseControllerProps,
  useFormContext,
} from "react-hook-form";

import {
  CommonFields,
  extractBaseFieldProps,
  getFieldClassname,
  getFieldContainerClass,
  withDefaultProps,
} from "./_helpers";
import withBaseField from "./_withBaseField";
import { InputHTMLAttributes } from "react";

type InputProps = CommonFields & {
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
} & InputHTMLAttributes<HTMLInputElement>;

function Input<T extends FieldValues>(
  props: InputProps & UseControllerProps<T>,
) {
  const { className, prefix, suffix, type, ...otherProps } =
    withDefaultProps(props);

  const { register } = useFormContext();

  return (
    <div className={cn("w-full flex", getFieldContainerClass(props))}>
      {prefix && <label className="*:h-full">{prefix}</label>}
      <input
        {...extractBaseFieldProps(otherProps)}
        {...register(props.name, getFieldOptions())}
        type={type === "number" ? "text" : type}
        className={cn(
          className,
          "grow",
          getFieldClassname(props),
          "rounded-none border-0",
        )}
      />
      {suffix && <label className="*:h-full">{suffix}</label>}
    </div>
  );

  function getFieldOptions(): Parameters<typeof register>[1] {
    const options: RegisterOptions<FieldValues, Path<FieldValues>> = {};

    if (type === "number") {
      options.setValueAs = function (value) {
        if (value) {
          try {
            return parseFloat(value);
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
          } catch (err) {
            return undefined;
          }
        }

        return undefined;
      };
    } else if (type === "date") {
      options.valueAsDate = true;
    }

    return options;
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default withBaseField(Input<any>);
