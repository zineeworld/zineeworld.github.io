import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    classes: '-solid -primary',
  },
};

export const Disabled: Story = {
  args: {
    classes: '-solid -primary',
    disabled: true
  },
};

export const InProgress: Story = {
  args: {
    classes: '-solid -primary',
    inProgress: true,
  },
};

export const FullWidth: Story = {
  args: {
    classes: '-solid -primary',
    isFullWidth: true,
  },
};