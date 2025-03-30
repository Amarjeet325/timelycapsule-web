import type { Meta, StoryObj } from "@storybook/react";

import DatePicker from "@/app/components/form/DatePicker";

import withRHF from "@/.storybook/decorators/withRHF";
import { storyBookArgTypes } from "@/app/components/form/_helpers";

const meta = {
  title: "Form/DatePicker",
  component: DatePicker,

  decorators: [withRHF(false)],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "DatePicker field",
      },
    },
  },
  tags: ["autodocs"],

  argTypes: {
    ...storyBookArgTypes,
    readonly: { control: "boolean" },
  },
  args: {
    name: "field-name",
  },
} as Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Date",
  },
};

export const Outline: Story = {
  args: {
    label: "Date",
    outline: true,
  },
};

export const WithTime: Story = {
  args: {
    label: "DateTime",
    outline: false,
    withTime: true,
  },
};
