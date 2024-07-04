import type { Meta, StoryObj } from '@storybook/react';

import { TextButton } from './TextButton';

const meta = {
  title: 'Components/Button/Text Button',
  component: TextButton,
  tags: ['autodocs'],
} satisfies Meta<typeof TextButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default_Bold: Story = {
  args: {
    size: 'large',
    color: 'gray2',
    isMedium: false,
    disabled: false,
    children: '텍스트 버튼',
  },
};
export const Medium: Story = {
  args: {
    isMedium: true,
  },
};
