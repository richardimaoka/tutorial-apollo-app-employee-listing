#!/bin/sh

scripts/cleanup.sh

###############################
# let's start the steps
###############################
steps/step1-1-client.sh
(cd steps && ./step1-1-client.sh)
REACT_CLIENT_PID="$!"
trap 'scripts/kill-all-child-pids.sh "$REACT_CLIENT_PID"' 2 # 2 means SIGINT = Ctrl + c

# ###############################
# # finished
# ###############################

# scripts/kill-all-child-pids.sh "$CLIENT_PID"
# scripts/kill-all-child-pids.sh "$FILE_SERVER_PID"

scripts/cleanup.sh