import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import BackButton from "@/app/components/BackButton";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "UI/Back Button",
  component: BackButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
    docs: {
      description: {
        component: "Standard personnalized Button",
      },
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes

  args: {
    variant: "iconed",
    buttonAction: action(`Selected date`),
  },
} satisfies Meta<typeof BackButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const CustomLabel: Story = {
  args: {
    label: "Dashboard",
    goLabel: "Go to Dashboard",
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Plain: Story = {
  args: {
    variant: "plain",
  },
};
