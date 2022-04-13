#!/bin/sh

scripts/cleanup.sh

###############################
# let's start the steps
###############################
steps/step1-1-client.sh 1>/dev/null &
REACT_CLIENT_PID="$!"
steps/step1-1.test.sh

steps/step1-1-client.sh 1>/dev/null &
REACT_CLIENT_PID="$!"
steps/step1-1.test.sh

# ###############################
# # finished
# ###############################

scripts/kill-all-child-pids.sh "$REACT_CLIENT_PID"
# scripts/kill-all-child-pids.sh "$FILE_SERVER_PID"

# scripts/cleanup.sh