#!/bin/sh

cd "$(dirname "$0")" || exit
cd ../ || exit # cd to the git repository root

EXIT_STATUS=0
CURRENT_FILE=$(basename "$0")

if ! scripts/keep-curling-graphql.sh http://localhost:4000
then
  echo "FAILED ($CURRENT_FILE): GraphQL server not working" 1>&2
  EXIT_STATUS=1
fi

GRAPHQL_QUERY_ONE_LINE=$(sed -z 's/\n//g' server/query.gql)
GRAPHQL_RESULT=$(curl -X POST -H "Content-Type: application/json" -d "{ \"query\": \"$GRAPHQL_QUERY_ONE_LINE\"}" -s http://localhost:4000)
if ! echo "$GRAPHQL_RESULT" | jq 1>/dev/null
then
  echo "FAILED ($CURRENT_FILE): GraphQL query did not receive a valid response" 1>&2
  echo "$GRAPHQL_RESULT" 1>&2
  EXIT_STATUS=1
fi

if [ $EXIT_STATUS -eq "0" ]
then
  echo "SUCCESS ($CURRENT_FILE): test successful"
fi 

# if either is missing, then non-zero exit
exit $EXIT_STATUS