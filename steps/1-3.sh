#!/bin/sh

cd "$(dirname "$0")" || exit # REMOVE THIS IN aggregate.sh 
cd ../ || exit               # REMOVE THIS IN aggregate.sh - cd to the git repository root

# :large_orange_diamond: Action: 以下のコマンドを実行してください

# ```terminal: クライアント
rm -rf client/public
rm -rf client/src   
cp -r  answers/step1-1/client/src client/src
cp -r  answers/step1-1/client/public client/public
# ```

# ```terminal: クライアント
# shellcheck disable=SC2164 # REMOVE THIS IN aggregate.sh 
cd client
npm install
# ```

# ```terminal: クライアント
npm set-script client-start "npm run start"
npm run client-start
# ```

