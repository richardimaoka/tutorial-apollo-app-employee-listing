#!/bin/sh

cd "$(dirname "$0")" || exit
cd ../ || exit # cd to the git repository root

CURRENT_FILE=$(basename "$0")

if scripts/keep-curling-graphql.sh http://localhost:4000
then
  echo "SUCCESS ($CURRENT_FILE): GraphQL server working" 1>&2
  exit 0
else
  echo "FAILED ($CURRENT_FILE): GraphQL server not working" 1>&2
  exit 1
fi

GRAPHQL_QUERY_ONE_LINE=$(sed -z 's/\n//g' server/query.gql)
GRAPHQL_RESULT=$(curl -X POST -H "Content-Type: application/json" -d "{ \"query\": \"$GRAPHQL_QUERY_ONE_LINE\"}" http://localhost:4000)
if echo "$GRAPHQL_RESULT" | jq
then
  echo "SUCCESS ($CURRENT_FILE): GraphQL query retured a valid response" 1>&2
  exit 0
else
  echo "FAILED ($CURRENT_FILE): GraphQL query did not receive a valid response" 1>&2
  exit 1
fi