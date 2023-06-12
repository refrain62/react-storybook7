import type { Meta, StoryObj } from '@storybook/react';

import UserItem from './UserItem';

const meta = {
    title: 'UserItem',
    component: UserItem,
    tags: ['autodocs'],
    // loaders の設定を meta の中で行うこともできる
    loaders: [
        async () => ({
            user: await (
                await fetch('https://jsonplaceholder.typicode.com/users/2')
            ).json(),
        }),
    ],
} satisfies Meta<typeof UserItem>;

export default meta;

type Story = StoryObj<typeof UserItem>;

export const Default: Story = {
    args: {
        id: '1',
        name: 'John Doe',
    },
};

// Loaders によるデータ取得
export const FetchData: Story = {
    loaders: [
        async () => ({
            user: await (
                await fetch('https://jsonplaceholder.typicode.com/users/1')
            ).json(),
        }),
    ],
    render: (args, { loaded: { user } }) => (
        <UserItem {...args} id={user.id} name={user.name} />
    ),
};

// metaでデータ取得
export const FetchData2: Story = {
    render: (args, { loaded: { user } }) => (
        <UserItem {...args} id={user.id} name={user.name} />
    ),
};

