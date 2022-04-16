#!/bin/sh

cd "$(dirname "$0")" || exit # REMOVE THIS IN aggregate.sh 
cd ../ || exit               # REMOVE THIS IN aggregate.sh - cd to the git repository root

# :large_orange_diamond: Action: 以下のコマンドを実行してください

# ```terminal: クライアント
npm install @apollo/client graphql @graphql-cli/codegen
# ```

# ```terminal: クライアント
cp answers/step1-3/client/src/components/App.tsx client/src/components/App.tsx 
# ```

