import cn from "classnames";
import {
  FieldValues,
  UseControllerProps,
  useFormContext,
} from "react-hook-form";

import {
  CommonFields,
  extractBaseFieldProps,
  getFieldClassname,
  withDefaultProps,
} from "./_helpers";
import withBaseField from "./_withBaseField";
import { TextareaHTMLAttributes } from "react";

type TextAreaProps = CommonFields & TextareaHTMLAttributes<HTMLTextAreaElement>;

function TextArea<T extends FieldValues>(
  props: TextAreaProps & UseControllerProps<T>,
) {
  const { className, placeholder, optional, ...otherProps } =
    withDefaultProps(props);

  const { register } = useFormContext();

  return (
    <textarea
      {...extractBaseFieldProps(otherProps)}
      {...register(props.name)}
      className={cn(
        className,
        "resize-y, w-full py-4",
        getFieldClassname(props),
      )}
      placeholder={placeholder}
      required={!optional}
    />
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default withBaseField(TextArea<any>);
