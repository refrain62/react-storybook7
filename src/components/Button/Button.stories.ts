import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';

const meta = {
    title: 'Button',
    component: Button,
} satisfies Meta<typeof Button>;

export default meta;

// HelloButtonのストーリーを追加
type Story = StoryObj<typeof Button>

export const HelloButton: Story = {
    args: {
        children: 'Hello World',
    },
};
