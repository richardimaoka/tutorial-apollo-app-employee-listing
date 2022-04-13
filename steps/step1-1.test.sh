#!/bin/sh

cd "$(dirname "$0")" || exit
cd ../ || exit # cd to the git repository root

CURRENT_FILE=$(basename "$0")

if scripts/keep-curling.sh http://localhost:3000
then
  echo "SUCCESS ($CURRENT_FILE): file server working" 1>&2
  exit 0
else
  echo "FAILED ($CURRENT_FILE): file server not working" 1>&2
  exit 1
fi

