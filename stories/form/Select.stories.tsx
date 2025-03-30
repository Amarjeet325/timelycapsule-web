import type { Meta, StoryObj } from "@storybook/react";

import Select from "@/app/components/form/Select";

import withRHF from "@/.storybook/decorators/withRHF";
import { storyBookArgTypes } from "@/app/components/form/_helpers";

const meta = {
  title: "Form/Select",
  component: Select,

  decorators: [withRHF(false)],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Select field",
      },
    },
  },
  tags: ["autodocs"],

  argTypes: storyBookArgTypes,
  args: {
    name: "field-name",
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Field name",
    options: {
      option1: "option1",
      option2: "option2",
      option3: "option3",
    },
  },
};
