import type { Meta, StoryObj } from "@storybook/react";

import Input from "@/app/components/form/Input";

import withRHF from "@/.storybook/decorators/withRHF";
import { storyBookArgTypes } from "@/app/components/form/_helpers";

const meta = {
  title: "Form/Input",
  component: Input,

  decorators: [withRHF(false)],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Input field",
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
} as Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Field name",
  },
};
export const Outline: Story = {
  args: {
    label: "Field name",
    outline: true,
  },
};

export const Readonly: Story = {
  args: {
    label: "Field name",
    readonly: true,
    defaultValue: "Can't be modified",
  },
};

export const WithSuffix: Story = {
  args: {
    label: "Field name",
    suffix: (
      <div className="flex text-primary font-semibold cursor-pointer justify-center items-center text-nowrap">
        Generate link
      </div>
    ),
  },
};

export const WithPrefix: Story = {
  args: {
    label: "Field name",
    prefix: (
      <div className="flex font-semibold justify-center items-center text-nowrap">
        ETH
      </div>
    ),
  },
};

export const Toggleable: Story = {
  args: {
    label: "Field name",
    toggleable: true,
  },
};
