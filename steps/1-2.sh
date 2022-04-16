#!/bin/sh

cd "$(dirname "$0")" || exit # REMOVE THIS IN aggregate.sh 
cd ../ || exit               # REMOVE THIS IN aggregate.sh - cd to the git repository root

# :large_orange_diamond: Action: ctrl+cでクライアント・ターミナルを停止してください

# :large_orange_diamond: Action: 以下のコマンドを実行してください

# ```terminal: クライアント
rm -rf client/src
rm -rf client/public
git apply patches/1-2.patch
# ```

