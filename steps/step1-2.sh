#!/bin/sh

# ## 1. React環境のセットアップ

# :large_orange_diamond: Action: 以下のコマンドを実行してください

# npx create-react-app client --template typescript # REMOVE THIS IN aggregate.sh 
# rm -rf client... # REMOVE THIS IN aggregate.sh 
# cp -r answers/step1-1/client/src/... # REMOVE THIS IN aggregate.sh 

# ```terminal: メイン・ターミナル
cp -r answers/step1-1/client client
# shellcheck disable=SC2164 # REMOVE THIS IN aggregate.sh 
cd client
npm install
# ```

# ```terminal: メイン・ターミナル
npm set-script client-start "npm run start"
npm run client-start
# ```

