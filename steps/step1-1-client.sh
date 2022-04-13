#!/bin/sh

cd "$(dirname "$0")" || exit # REMOVE THIS IN aggregate.sh 
cd ../ || exit               # REMOVE THIS IN aggregate.sh - cd to the git repository root

# ## 1. React環境のセットアップ

# :large_orange_diamond: Action: 以下のコマンドを実行してください

# npx create-react-app client --template typescript # REMOVE THIS IN aggregate.sh 
# rm -rf client... # REMOVE THIS IN aggregate.sh 
# cp -r answers/step1-1/client/src/... # REMOVE THIS IN aggregate.sh 

# ```terminal: クライアント
cp -r answers/step1-1/client client
# shellcheck disable=SC2164 # REMOVE THIS IN aggregate.sh 
cd client
npm install
# ```

# ```terminal: クライアント
npm set-script client-start "npm run start"
npm run client-start
# ```

