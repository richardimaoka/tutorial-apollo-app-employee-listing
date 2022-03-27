#!/bin/sh

CURRENT_FILE=$(basename "$0")

if [ $# -eq 0 ]
then
  echo "FAILED ($CURRENT_FILE): exactly one parameter expected but got 0 parameter" 1>&2
  exit 1
elif [ $# -ne 1 ]
then
  echo "FAILED ($CURRENT_FILE): exactly one parameter expected but got $# parameters = $*" 1>&2
  exit 1
fi

# this might return multiple PIDs
ps -fxo pid,ppid | awk -v ppid="$1" '$2==ppid {print $1}' 