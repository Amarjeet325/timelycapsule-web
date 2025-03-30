import type { Meta, StoryObj } from "@storybook/react";

import TextArea from "@/app/components/form/TextArea";

import withRHF from "@/.storybook/decorators/withRHF";
import { storyBookArgTypes } from "@/app/components/form/_helpers";

const meta = {
  title: "Form/Textarea",
  component: TextArea,

  decorators: [withRHF(false)],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "TextArea field",
      },
    },
  },
  tags: ["autodocs"],

  argTypes: storyBookArgTypes,
  args: {
    name: "field-name",
  },
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Field name",
  },
};
