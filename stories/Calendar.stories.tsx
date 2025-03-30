import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Calendar from "@/app/components/Calendar";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "UI/Calendar",
  component: Calendar,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
    docs: {
      description: {
        component: "Standard personnalized Calendar",
      },
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],

  argTypes: {},

  args: { onSelect: action(`Selected date`) },
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithTimeSelector: Story = {
  args: {
    withTime: true,
  },
};

export const WithValidateButton: Story = {
  args: {
    validateButton: true,
  },
};
