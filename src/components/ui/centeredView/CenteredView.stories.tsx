// eslint-disable-next-line import/no-extraneous-dependencies
import { Meta, StoryObj } from "@storybook/react";

import CenteredView from "./CenteredView";

const meta: Meta<typeof CenteredView> = {
  component: CenteredView,
  parameters: {
    nextjs: {
      appDirectory: true
    }
  }
};
export default meta;

type Story = StoryObj<typeof CenteredView>;

export const Example: Story = {
  parameters: {},
  args: {
    children: <div>test component</div>
  }
};
