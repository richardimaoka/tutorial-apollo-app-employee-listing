#!/bin/sh

cd "$(dirname "$0")" || exit # REMOVE THIS IN aggregate.sh 
cd ../ || exit               # REMOVE THIS IN aggregate.sh - cd to the git repository root

# ## graphql 導入

# ```terminal: メイン・ターミナル
npm install --save @apollo/client graphql
# ```

# ```terminal: メイン・ターミナル
cp -r answers/step1-2/client/src client
npm run client-start
# ```


# ```terminal: メイン・ターミナル
npm run client-start
# ```

