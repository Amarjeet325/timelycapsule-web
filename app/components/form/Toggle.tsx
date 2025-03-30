import cn from "classnames";
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
import withBaseField from "./_withBaseField";
import { InputHTMLAttributes } from "react";

type ToggleProps = CommonFields & InputHTMLAttributes<HTMLInputElement>;

function Toggle<T extends FieldValues>(
  props: ToggleProps & UseControllerProps<T>,
) {
  const { className, placeholder, optional, ...otherProps } =
    withDefaultProps(props);

  const { register } = useFormContext();

  return (
    <label className={className}>
      <input
        {...extractBaseFieldProps(otherProps)}
        {...register(props.name)}
        type="checkbox"
        className="hidden peer"
        placeholder={placeholder}
        required={!optional}
      />

      <div
        className={cn(
          "relative w-[55px] h-[27px] p-[3px] rounded-full cursor-pointer flex opacity-75 *:left-[3px] peer-checked:*:left-[31px] transition-all ease-linear	",
          "bg-gray-200 *:bg-white peer-checked:bg-primary-bg peer-checked:*:bg-primary",
        )}
      >
        <div className="rounded-full h-[21px] w-[21px] absolute bg-primary transition-all ease-linear"></div>
      </div>
    </label>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default withBaseField(Toggle<any>);
