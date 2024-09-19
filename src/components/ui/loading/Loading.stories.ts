// eslint-disable-next-line import/no-extraneous-dependencies
import { Meta, StoryObj } from "@storybook/react";

import Loading from "./Loading";

const meta: Meta<typeof Loading> = {
  component: Loading,
  parameters: {
    nextjs: {
      appDirectory: true
    }
  }
};
export default meta;

type Story = StoryObj<typeof Loading>;

export const Example: Story = {
  parameters: {}
};
