import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@repo/ui/button';

const meta = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default'],
      description: '버튼 변형',
    },
    size: {
      control: 'select',
      options: ['default'],
      description: '버튼 크기',
    },
    className: {
      control: 'text',
      description: '추가 CSS 클래스',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: '다음',
    variant: 'default',
    size: 'default',
  },
};

export const WithCustomClass: Story = {
  args: {
    children: '커스텀 스타일 버튼',
    className: 'bg-blue-500 hover:bg-blue-600',
  },
};

export const FullWidth: Story = {
  args: {
    children: '전체 너비 버튼',
    className: 'w-full',
  },
};
