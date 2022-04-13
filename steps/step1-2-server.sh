#!/bin/sh

cd "$(dirname "$0")" || exit # REMOVE THIS IN aggregate.sh 
cd ../ || exit               # REMOVE THIS IN aggregate.sh - cd to the git repository root

# ## サーバー側 graphql 導入

# ```terminal: サーバー
mkdir server
# shellcheck disable=SC2164 # REMOVE THIS IN aggregate.sh 
cd server
npm init -yes
#```

# ```terminal: サーバー
npm install --save-dev typescript ts-node-dev
npx tsc -init
#```

# ```terminal: サーバー
npm install apollo-server @graphql-codegen/cli graphql
#```

# ```terminal: サーバー
npm set-script server-start "npm run start"
npm run server-start
# ```