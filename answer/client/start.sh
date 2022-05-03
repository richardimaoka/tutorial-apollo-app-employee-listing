#!/bin/sh

(cd answers/step-final/file-server && npm run file-server-start &)
(cd answers/step-final/server && npm run server-start &)
(cd answers/step-final/client && npm run client-start &)

# wait infinitely
tail -f /dev/null
