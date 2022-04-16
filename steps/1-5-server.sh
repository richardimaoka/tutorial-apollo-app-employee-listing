#!/bin/sh

cd "$(dirname "$0")" || exit # REMOVE THIS IN aggregate.sh 
cd ../ || exit               # REMOVE THIS IN aggregate.sh - cd to the git repository root

# shellcheck disable=SC2164 # REMOVE THIS IN aggregate.sh 
cd server # REMOVE THIS IN aggregate.sh 

# ```terminal: サーバー
npm set-script server-start "ts-node-dev --respawn index.ts"
npm run server-start
# ```
