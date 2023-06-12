import type { Meta, StoryObj } from '@storybook/react';

import { within, userEvent } from "@storybook/testing-library";

import Button from './Button';

const meta = {
    title: 'Common/Button',
    component: Button,
    // Story のコンポーネントに対してのドキュメントを自動作成してくれる機能
    tags: ['autodocs'],
    parameters: { actions: { argTypesRegex: '^handle[A-Z].*' } },
    argTypes: {
        color: {
            options: ['primary', 'default', 'danger'],
            control: { type: 'radio' },
        },
        size: {
            options: ['sm', 'base', 'lg'],
            control: { type: 'select' },
        },
        // handleClick: {
        //     action: 'clicked',
        // }
    }
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

// ボタンの色の定義を追加
export const Default: Story = {
    args: {
        children: 'Default',
    }
};

export const Primary: Story = {
    args: {
        children: 'Primary',
        color: 'primary',
    }
};

export const Danger: Story = {
    args: {
        children: 'Danger',
        color: 'danger',
        handleClick: () => alert('click'),
    }
};

export const PrimarySmall: Story = {
    args: {
        // Primaryのargsの再利用
        ...Primary.args,
        size: 'sm',
    }
};

export const PrimaryLarge: Story = {
    args: {
        // Primaryのargsの再利用
        ...Primary.args,
        size: 'lg',
    }
};

// render も利用可能
export const PrimarySmall2: Story = {
    render: () => (
        <Button color="primary" size="sm">
            PrimarySmall2
        </Button>
    ),
};

export const PrimaryLarge2: Story = {
    render: () => (
        <Button color="primary" size="lg">
            PrimaryLarge2
        </Button>
    ),
};

// Args+render 関数
export const Danger2: Story = {
    render: (args) => <Button {...args}>{args.children}</Button>,
    args: {
        children: 'Danger',
        color: 'danger',
    },
};

// play functon
export const DangerPlayFunction: Story = {
    play: async ({ canvasElement }) => {
      console.log('canvasElement', canvasElement);
      const canvas = within(canvasElement);
      console.log('canvas', canvas);
      const button = await canvas.getByRole('button');
      console.log('button', button);
      await userEvent.click(button);
    },
    args: {
      children: 'Danger',
      color: 'danger',
      handleClick: () => alert('click'),
    },
  };