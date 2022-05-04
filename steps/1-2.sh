#!/bin/sh

cd "$(dirname "$0")" || exit # REMOVE THIS IN aggregate.sh 
cd ../ || exit               # REMOVE THIS IN aggregate.sh - cd to the git repository root

# :large_orange_diamond: Action: 以下のコマンドを入力してください。

# ```terminal: メイン
# shellcheck disable=SC2164 # REMOVE THIS IN aggregate.sh 
cd "$(git rev-parse --show-toplevel)" # gitレポジトリのルートディレクトリに移動
rm src/components/App.tsx
# ```

# :large_orange_diamond: Action: 以下のコマンドを入力してください。

# ```terminal: メイン
# ```