#!/bin/sh

# (cd file-server && npm run file-server-start &)

(cd server && npm run server-start &)

# (cd server && npm run server-generate &)

(cd client && npm run client-start &)

# (cd client && npm run client-generate &)

# wait infinitely
tail -f /dev/null