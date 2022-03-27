#!/bin/sh

cd "$(dirname "$0")" || exit

CURRENT_FILE=$(basename "$0")

if [ $# -ne 1 ]
then
  echo "FAILED ($CURRENT_FILE): exactly one parameter expected but got $#" 1>&2
  exit 1
fi

for child_pid in $(./find-all-child-pids.sh "$1" | ./array-reverse.sh)
do
  kill "$child_pid"
done 
