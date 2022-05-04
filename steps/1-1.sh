#!/bin/sh

cd "$(dirname "$0")" || exit # REMOVE THIS IN aggregate.sh 
cd ../ || exit               # REMOVE THIS IN aggregate.sh - cd to the git repository root

### 開発プロジェクトの初期設定

## GraphQL サーバー側 セットアップ

# :large_orange_diamond: Action: 以下のコマンドを入力してください。

# ```terminal: メイン
# shellcheck disable=SC2164 # REMOVE THIS IN aggregate.sh 
cd "$(git rev-parse --show-toplevel)" # gitレポジトリのルートディレクトリに移動
mkdir server
# shellcheck disable=SC2164 # REMOVE THIS IN aggregate.sh 
cd server
echo "node_modules" >> .gitignore
# ```

# :large_orange_diamond: Action: 以下のコマンドを入力してください。

# ```terminal: メイン
npm init -yes
npm install apollo-server graphql
npm install --save-dev typescript ts-node-dev 
npx tsc -init
# ```

# :large_orange_diamond: Action: 以下のコマンドを入力してください。

# ```terminal: メイン
cd ../
git apply patches/1-1.patch
# ```


# :large_orange_diamond: Action: 以下のコマンドを入力してください。

# ```terminal: メイン
# shellcheck disable=SC2164 # REMOVE THIS IN aggregate.sh 
cd server
npm set-script server-start "ts-node-dev --watch schema.gql,data.json --respawn index.ts"
npm run server-start
# ```

# :large_orange_diamond: Action: 以下のクエリをApollo Studio Explorerで入力してRunを押してください。

# ```terminal: メイン
{
  hello
}
# ```

# :large_orange_diamond: Action: Ctrl+C
