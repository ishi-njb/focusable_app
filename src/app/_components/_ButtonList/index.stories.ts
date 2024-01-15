import type { Meta, StoryObj } from '@storybook/react';
import { ButtonList } from './';

const meta: Meta<typeof ButtonList> = {
  component: ButtonList,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {};

export const SetFocus: Story = {
  args: {
    isSetFocus: true
  }
};
