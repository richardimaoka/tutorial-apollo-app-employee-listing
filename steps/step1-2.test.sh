#!/bin/sh

cd "$(dirname "$0")" || exit
cd ../ || exit # cd to the git repository root

CURRENT_FILE=$(basename "$0")

if scripts/keep-curling.sh http://localhost:4000
then
  echo "SUCCESS ($CURRENT_FILE): GraphQL server working" 1>&2
  exit 0
else
  echo "FAILED ($CURRENT_FILE): GraphQL server not working" 1>&2
  exit 1
fi

