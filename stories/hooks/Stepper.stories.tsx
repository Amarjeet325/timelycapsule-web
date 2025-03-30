import type { Meta, StoryObj } from "@storybook/react"

import Stepper from "@/app/_hooks/useStepper/Stepper"

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Hook/useStepper/Stepper",
  component: Stepper,

  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
    docs: {
      description: {
        component: "Stepper component",
      },
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    completed: { control: "boolean" },
  },

  // Use `fn` to spy on the
} as Meta<typeof Stepper>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    steps: 3,
    step: 2,
  },
}
