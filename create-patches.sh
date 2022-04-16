#!/bin/sh

git diff --binary --relative=answer step1-2-1 step1-2-2 answer > patches/1-2.patch
git diff --binary --relative=answer step1-3 step1-4 answer > patches/1-4.patch