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