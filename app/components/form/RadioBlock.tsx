import {
  FieldValues,
  UseControllerProps,
  useFormContext,
} from "react-hook-form";

import {
  CommonFields,
  extractBaseFieldProps,
  withDefaultProps,
} from "./_helpers";
import { InputHTMLAttributes } from "react";

type RadioBlockProps = CommonFields &
  InputHTMLAttributes<HTMLInputElement> & {
    value: string | number;
  };

function RadioBlock<T extends FieldValues>(
  props: RadioBlockProps & UseControllerProps<T>,
) {
  const { className, placeholder, optional, children, value, ...otherProps } =
    withDefaultProps(props);

  const { register } = useFormContext();

  return (
    <label className={className}>
      <input
        {...extractBaseFieldProps(otherProps)}
        {...register(props.name)}
        type="radio"
        className="hidden"
        placeholder={placeholder}
        required={!optional}
        value={value}
      />

      {children}
    </label>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default RadioBlock<any>;
