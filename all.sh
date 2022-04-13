#!/bin/sh

scripts/cleanup.sh
trap scripts/cleanp.sh 

###############################
# let's start the steps
###############################
steps/step1-1-client.sh 1>/dev/null &
REACT_CLIENT_PID="$!"
trap 'scripts/kill-all-child-pids.sh "$REACT_CLIENT_PID"' 2 # 2 means SIGINT = Ctrl + c
steps/step1-1.test.sh

# ###############################
# # finished
# ###############################

# scripts/kill-all-child-pids.sh "$CLIENT_PID"
# scripts/kill-all-child-pids.sh "$FILE_SERVER_PID"

# scripts/cleanup.sh