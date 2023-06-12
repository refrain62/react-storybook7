import type { StorybookConfig } from "@storybook/react-vite";
const config: StorybookConfig = {
// components フォルダ下で stories.js/jsx/ts/tsx という名前が入ったファイルのみ自動検知できるように変更
//  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  stories: [
    '../src/components/**/*.mdx',
    '../src/components/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    // Story のコンポーネントに対してのドキュメントを自動作成してくれる機能
    autodocs: "tag",
  },
};
export default config;
