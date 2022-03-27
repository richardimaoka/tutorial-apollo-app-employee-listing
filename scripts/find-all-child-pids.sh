#!/bin/sh

cd "$(dirname "$0")" || exit

CURRENT_FILE=$(basename "$0")

if [ $# -ne 1 ]
then
  echo "FAILED ($CURRENT_FILE): exactly one parameter expected but got $#" 1>&2
  exit 1
fi

# recursively find child process IDs
#   PID  PPID CMD
#   101   011 current-process                      # stored as child_pid_0   
#   102   101  \ - child-process                   # stored as child_pid_1
#   200   112    \ - grand-child-process           # stored as child_pid_2
#   201   200    |  \ - leaf-child-process         # stored as child_pid_3
#   202   200    \ - grand-child-process           # stored as child_pid_4
#   301   300       \ - leaf-child-process         # stored as child_pid_5
#   302   200       \ - leaf-child-process         # stored as child_pid_6
printTree() {
  for child_pid in $(./child-pids-of.sh "$1") # $1 passed to the printTree function
  do
    echo "$child_pid"
    printTree "$child_pid"
  done
}
printTree "$1" # $1 here is the argument passed to this shell script