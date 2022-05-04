#!/bin/sh

cd "$(dirname "$0")" || exit # REMOVE THIS IN aggregate.sh 
cd ../ || exit               # REMOVE THIS IN aggregate.sh - cd to the git repository root

## 開発プロジェクトの初期設定

### GraphQL サーバー側 セットアップ

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
cd ../ # gitレポジトリのルートディレクトリに移動
git apply patches/1-1.patch
# ```


# :large_orange_diamond: Action: 以下のコマンドを入力してください。

# ```terminal: メイン
# shellcheck disable=SC2164 # REMOVE THIS IN aggregate.sh
cd server
npm set-script server-start "ts-node-dev --watch schema.gql,data.json --respawn index.ts"
# npm run server-start
# ```

# :large_orange_diamond: Action: 以下のクエリをApollo Studio Explorerで入力してRunを押してください。

# ```terminal: メイン
# {
#   hello
# }
# ```

# :large_orange_diamond: Action: Ctrl+C

### React クライアント側 セットアップ

# :large_orange_diamond: Action: 以下のコマンドを入力してください。

# ```terminal: メイン
cd ../ # gitレポジトリのルートディレクトリに移動
npx --yes create-react-app client --template typescript
# shellcheck disable=SC2164 # REMOVE THIS IN aggregate.sh
cd client 
npm install @apollo/client graphql
npm set-script client-start "react-scripts start"
# ```

# :large_orange_diamond: Action: 以下のコマンドを入力してください。

# ```terminal: メイン
# npm run client-start
# ```

# https://github.com/apollographql/invariant-packages/issues/279
# WARNING in ./node_modules/ts-invariant/lib/invariant.js

# :large_orange_diamond: Action: Ctrl+C

### file-server 導入

# :large_orange_diamond: Action: 以下のコマンドを入力してください。

# ```terminal: メイン
cd ../ # " # gitレポジトリのルートディレクトリに移動

mkdir file-server
# shellcheck disable=SC2164 # REMOVE THIS IN aggregate.sh
cd file-server
echo "node_modules" >> .gitignore

npm init -yes
npm install http-server
npm set-script http-server-start "http-server"
# ```

# :large_orange_diamond: Action: 以下のコマンドを入力してください。

# ```terminal: メイン
cd ../ # " # gitレポジトリのルートディレクトリに移動
git apply patches/1-1.patch
chmod +x start.sh
./start.sh
# ```

# :large_orange_diamond: Action: Ctrl+C