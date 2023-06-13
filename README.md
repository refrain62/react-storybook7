## react-storybook7
https://reffect.co.jp/react/react-typescript-storybook7/ の写経

# Reactプロジェクトの作成
```
% npm create vite@latest
✔ Project name: … react-storybook7
✔ Select a framework: › React
✔ Select a variant: › TypeScript

Scaffolding project in /Users/mac/Desktop/react-storybook7...

Done. Now run:

  cd react-storybook7
  npm install
  npm run dev
```

# Storybook のインストール
```
% npx storybook@latest init
OK to proceed? (y) y

Would you like to install it? ... yes
```

```
npm run storybook
```
 コマンドを実行するとブラウザが自動起動してWelcomeページが表示される

※設定ファイルの main.ts を更新した場合は Storybook を再起動する必要があるので npm run storybook を再実行してください。


# @test-runner のインストールを行います。
```
% npm install @storybook/test-runner --save-dev
```
インストールが完了したら package.json ファイルの script に実行するためにコマンドを追加します。

package.json
```
vite build",
    "lint": "eslint src --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview",
    "storybook": "storybook dev -p 6006",
    "build-storybook": "storybook build",
    "test-storybook": "test-storybook"
  },
//略
```

test-runner を実行
※test-runner を実行するためには Storybook を起動しておかなければなりません。起動していない場合は下記のエラーメッセージが表示されます。
```
 % npm run test-storybook
```
