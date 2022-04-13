#!/bin/sh

scripts/cleanup.sh

###############################
# let's start the steps
###############################
steps/step1-1-client.sh 1>/dev/null &
REACT_CLIENT_PID="$!"
echo "react client pid = $REACT_CLIENT_PID"
# trap 'scripts/kill-all-child-pids.sh "$REACT_CLIENT_PID"' 2 # 2 means SIGINT = Ctrl + c
steps/step1-1.test.sh
sleep 60

# ###############################
# # finished
# ###############################

# scripts/kill-all-child-pids.sh "$REACT_CLIENT_PID"
# scripts/kill-all-child-pids.sh "$FILE_SERVER_PID"

# scripts/cleanup.sh