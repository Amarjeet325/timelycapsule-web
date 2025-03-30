import cn from "classnames";
import { BaseFieldProps } from "./_withBaseField";
import type { InputType } from "storybook/internal/types";
import {
  InputHTMLAttributes,
  SelectHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";

export interface CommonFieldProps {
  outline?: boolean;
}

type FieldHTMLAttributes =
  | InputHTMLAttributes<HTMLInputElement>
  | SelectHTMLAttributes<HTMLSelectElement>
  | TextareaHTMLAttributes<HTMLTextAreaElement>;

export type CommonFields = CommonFieldProps & Omit<BaseFieldProps, "children">;

interface CommonClassNameOptions {
  noHeight?: boolean;
}

export function extractBaseFieldProps(
  props: CommonFields & FieldHTMLAttributes,
): Partial<Omit<CommonFieldProps, "ref">> {
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  const {
    children,
    standalone,
    label,
    details,
    optional,
    toggleable,
    toggleDefault,
    ...otherProps
  } = props;
  return otherProps;
}

export function getFieldContainerClass(
  { disabled, outline }: CommonFieldProps & FieldHTMLAttributes,
  { noHeight = false }: CommonClassNameOptions = {},
) {
  return cn("border rounded-lg", {
    "h-[50px]": !noHeight,
    "border-field bg-field": !outline,
    "border-field-outline": outline,
    "!bg-gray-200 cursor-not-allowed": disabled,
  });
}

export function getFieldClassname({
  disabled,
  outline,
}: CommonFieldProps & FieldHTMLAttributes) {
  return cn("h-full px-4", {
    "bg-field": !outline,
    "!bg-gray-200 cursor-not-allowed": disabled,
  });
}

export function withDefaultProps<T extends object & CommonFieldProps>(
  props: T,
): T {
  const { outline = false } = props;
  return {
    ...props,
    outline,
  };
}

export const storyBookArgTypes: Record<string, InputType> = {
  label: { control: { type: "text", expand: true } },
  details: { control: { type: "text", expand: true } },
  optional: {
    control: { type: "boolean", expand: true, table: { defaultValue: false } },
  },
  outline: {
    control: { type: "boolean", expand: true, table: { defaultValue: false } },
  },
  placeholder: { control: { type: "text", expand: true } },
  className: { control: { type: "text", expand: true } },
  disabled: {
    control: { type: "boolean", expand: true, table: { defaultValue: false } },
  },
  standalone: {
    control: { type: "boolean", expand: true, table: { defaultValue: false } },
  },
  toggleable: {
    control: { type: "boolean", expand: true, table: { defaultValue: false } },
  },

  name: {
    table: {
      disable: true,
    },
  },
};
