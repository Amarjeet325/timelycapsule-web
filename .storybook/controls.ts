import { InputType } from "storybook/internal/types";

const COLORS = {
  none: undefined,
  primary: "primary",
  "primary-dark": "primary-dark",
};

export const textColor: InputType = {
  options: Object.keys(COLORS),
  mapping: COLORS,
  control: { type: "select" },
  description: "Tailwind color",
};

const GRADIENTS = {
  none: undefined,
  "to Top": "t",
  "to Top Right": "tr",
  "to Right": "r",
  "to Bottom Right": "br",
  "to Bottom": "b",
  "to Bottom Left": "bl",
  "to Left": "l",
  "to Top Left": "tl",
};

export const gradientDirection: InputType = {
  options: Object.keys(GRADIENTS),
  mapping: GRADIENTS,
  control: { type: "select" },
  description: "Background gradient direction",
};
