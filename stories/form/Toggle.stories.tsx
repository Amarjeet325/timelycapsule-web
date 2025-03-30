import type { Meta, StoryObj } from "@storybook/react";

import Toggle from "@/app/components/form/Toggle";

import withRHF from "@/.storybook/decorators/withRHF";
import { storyBookArgTypes } from "@/app/components/form/_helpers";

const meta = {
  title: "Form/Toggle",
  component: Toggle,

  decorators: [withRHF(false)],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Toggle field",
      },
    },
  },
  tags: ["autodocs"],

  argTypes: storyBookArgTypes,
  args: {
    name: "field-name",
  },
} as Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Field name",
  },
};
