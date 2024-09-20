// ExpandableContent.stories.tsx
import { Meta, StoryObj } from "@storybook/react";
import ExpandableContent from "./ExpandableContent";
import { IExpandableContentProps } from "./types";

const meta: Meta<typeof ExpandableContent> = {
  component: ExpandableContent,
  title: "Components/containers/ExpandableContent",
  parameters: {
    layout: "centered"
  }
};
export default meta;

type Story = StoryObj<typeof ExpandableContent>;

export const Default: Story = {
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
      { key: "12", value: "<p>This is the 12 content block.</p>" }
    ]
  } as IExpandableContentProps
};
