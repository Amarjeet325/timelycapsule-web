import type { Meta, StoryObj } from "@storybook/react";

import FileUpload from "@/app/components/form/FileUpload";

import withRHF from "@/.storybook/decorators/withRHF";
import { storyBookArgTypes } from "@/app/components/form/_helpers";

const meta = {
  title: "Form/FileUpload",
  component: FileUpload,

  decorators: [withRHF(false)],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "FileUpload field",
      },
    },
  },
  tags: ["autodocs"],

  argTypes: storyBookArgTypes,
  args: {
    name: "field-name",
  },
} satisfies Meta<typeof FileUpload>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Field name",
    form: undefined,
  },
};
