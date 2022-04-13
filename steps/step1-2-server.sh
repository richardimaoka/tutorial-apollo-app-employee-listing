#!/bin/sh

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

npm install apollo-server @graphql-codegen/cli graphql
