#!/bin/sh

git diff --binary --relative=answer step1-2-1 step1-2-2 answer > patches/1-2.patch
git diff --binary --relative=answer step1-3 step1-4 answer > patches/1-4.patch


git diff --relative=answer 2df5eda 1971b8b > patches/202253-1-1.patch