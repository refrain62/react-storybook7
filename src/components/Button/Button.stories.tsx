import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';

const meta = {
    title: 'Common/Button',
    component: Button,
    // Story のコンポーネントに対してのドキュメントを自動作成してくれる機能
    tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;

// HelloButtonのストーリーを追加
type Story = StoryObj<typeof Button>

export const HelloButton: Story = {
    args: {
        children: 'Hello World',
    },
};

// render関数を利用して記述も可能
export const HelloButton2: Story = {
    render: () => <Button>Hello World2</Button>,
};

// ストーリーの追加は meta のtitleに設定した内容がサイドバーに表示される。
// ボタンに表示される文字を変えたい場合はストリーを追加する。
export const ClickButton: Story = {
    args: {
        children: 'click',
    },
};