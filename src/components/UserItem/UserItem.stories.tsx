import type { Meta, StoryObj } from '@storybook/react';

import UserItem from './UserItem';

const meta = {
    title: 'UserItem',
    component: UserItem,
    tags: ['autodocs'],
} satisfies Meta<typeof UserItem>;

export default meta;

type Story = StoryObj<typeof UserItem>;

export const Default: Story = {
    args: {
        id: '1',
        name: 'John Doe',
    },
};
