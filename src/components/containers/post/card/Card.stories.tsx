// eslint-disable-next-line import/no-extraneous-dependencies
import { Meta, StoryObj } from "@storybook/react";
import Card from "./Card";

const meta: Meta<typeof Card> = {
  component: Card,
  title: "Components/containers/Card",
  parameters: {
    layout: "centered",
    nextjs: {
      appDirectory: true
    }
  }
};
export default meta;

type Story = StoryObj<typeof Card>;

export const Example: Story = {
  args: {
    fields: [
      { key: "1", value: "<p>This is the 1 content block.</p>" },
      { key: "2", value: "<p>This is the 2 content block.</p>" },
      { key: "3", value: "<p>This is the 3 content block.</p>" },
      { key: "4", value: "<p>This is the 4 content block.</p>" },
      { key: "5", value: "<p>This is the 5 content block.</p>" },
      { key: "6", value: "<p>This is the 6 content block.</p>" },
      { key: "7", value: "<p>This is the 7 content block.</p>" },
      { key: "8", value: "<p>This is the 8 content block.</p>" },
      { key: "9", value: "<p>This is the 9 content block.</p>" },
      { key: "10", value: "<p>This is the 10 content block.</p>" },
      { key: "11", value: "<p>This is the 11 content block.</p>" },
      { key: "12", value: "<p>This is the 12 content block.</p>" },
      { key: "13", value: "<p>This is the 13 content block.</p>" },
      { key: "14", value: "<p>This is the 14 content block.</p>" },
      { key: "15", value: "<p>This is the 15 content block.</p>" }
    ],
    title: "This is a sample card title",
    reactionsCount: 5,
    createdAt: new Date().toISOString(),
    onAddReaction: () => alert("Reaction added!")
  }
};
