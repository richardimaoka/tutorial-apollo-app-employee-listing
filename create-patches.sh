#!/bin/sh

ln -s ../patches patches

git diff --binary --relative=answer step1-2-1 step1-2-2 answer > patches/1-2.patch
git diff --binary --relative=answer step1-3 step1-4 answer > patches/1-4.patch


git diff --relative=answer 2df5eda 1971b8b > patches/202253-1-1.patch


# index.ts data.json schema.graphql
git show --relative=answer --patch 1971b8b > patches/1-1.patch 
git apply patches/1-1.patch 

# ↓.gitignoreされたディレクトリ内など、gitレポジトリの外ではgit applyがすべてを無視する
patch -p1 < patches/1-1.patch 

# start.sh
git show --relative=answer --patch 6fa56ca > patches/1-2.patch

# simplify index.css and update index.html
git show --relative=answer --patch a44303e > patches/1-3.patch

# s: empty App.tsx
git show --relative=answer --patch a44303e > patches/1-4.patch

# s: move App.tsx to components dir
git show --relative=answer --patch b1009a8 > patches/1-5.patch

# s: HeaderContainer
git show --relative=answer --patch ae8b6ab > patches/1-6.patch

# s: server codegen
git show --relative=answer --patch f0c2399 > patches/1-7.patch

# s: divisions from data.json
git show --relative=answer --patch 2f0dd34 > patches/1-8.patch

# s: introduce ApolloClient
git show --relative=answer --patch a253fa6 > patches/1-9.patch

# s: DivisionCard barebone
git show --relative=answer --patch e2a6c59 > patches/1-10.patch

# s: setup client generate
git show --relative=answer --patch 722ae6b > patches/1-11.patch

# s: DivisionCard props
git show --relative=answer --patch cd16537 > patches/1-12.patch

# s: create company page
git show --relative=answer --patch 6d7d81f > patches/1-13.patch
