#!/bin/sh

git diff --binary --relative=answer step1-2-1 step1-2-2 answer > patches/1-2.patch