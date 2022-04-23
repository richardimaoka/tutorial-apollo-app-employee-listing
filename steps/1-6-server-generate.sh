#!/bin/sh

cd "$(dirname "$0")" || exit # REMOVE THIS IN aggregate.sh 
cd ../ || exit               # REMOVE THIS IN aggregate.sh - cd to the git repository root

# shellcheck disable=SC2164 # REMOVE THIS IN aggregate.sh 
cd server # REMOVE THIS IN aggregate.sh 

# ```terminal: サーバー
npm install @graphql-codegen/cli

# ```

# ```terminal: サーバー
rm codegen.yml
git apply patches/1-6.patch
npm install
# ```

# ```terminal: サーバー
npm set-script server-generate "ts-node-dev --respawn index.ts"
npm run server-generate
# ```

? What type of application are you building? Application built with React
 ◯ Backend - API or server
 ◯ Application built with Angular
❯◉ Application built with React
 ◯ Application built with Stencil
 ◯ Application built with other framework or vanilla JS

 ? Where is your schema?: (path or url) (http://localhost:4000) 

 ? Where are your operations and fragments?: src/**/*.graphql
? Pick plugins: (Press <space> to select, <a> to toggle all, <i> to invert selection, and <enter> to proceed)
❯◯ TypeScript (required by other typescript plugins)
 ◉ TypeScript Operations (operations and fragments)
 ◉ TypeScript React Apollo (typed components and HOCs)
 ◯ TypeScript GraphQL files modules (declarations for .graphql files)
 ◯ TypeScript GraphQL document nodes (embedded GraphQL document)
 ◯ Introspection Fragment Matcher (for Apollo Client)
 ◯ Urql Introspection (for Urql Client)


 ? What type of application are you building? Application built with React
? Where is your schema?: (path or url) ./schema.gql
? Where are your operations and fragments?: src/**/*.graphql
? Pick plugins: TypeScript Operations (operations and fragments), TypeScript React Apollo (typed components and HOCs)
? Where to write the output: generated/graphql.ts
? Do you want to generate an introspection file? No
? How to name the config file? codegen.yml
? What script in package.json should run the codegen? server-generate
Fetching latest versions of selected plugins...