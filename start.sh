#!/bin/sh

(cd file-server && npm run file-server-start &)
FILE_SERVER_PID="$!"
trap 'scripts/kill-all-child-pids.sh "$FILE_SERVER_PID"' 2 # 2 means SIGINT = Ctrl + c

(cd server && npm run server-start &)
SERVER_PID="$!"
trap 'scripts/kill-all-child-pids.sh "$SERVER_PID"' 2 # 2 means SIGINT = Ctrl + c

(cd server && npm run server-generate &)
SERVER_GENERATE_PID="$!"
trap 'scripts/kill-all-child-pids.sh "$SERVER_GENERATE_PID"' 2 # 2 means SIGINT = Ctrl + c

(cd client && npm run client-start &)
CLIENT_PID="$!"
trap 'scripts/kill-all-child-pids.sh "$CLIENT_PID"' 2 # 2 means SIGINT = Ctrl + c

(cd client && npm run client-generate &)
CLIENT_GENERATE_PID="$!"
trap 'scripts/kill-all-child-pids.sh "$CLIENT_GENERATE_PID"' 2 # 2 means SIGINT = Ctrl + c

# wait infinitely
tail -f /dev/null