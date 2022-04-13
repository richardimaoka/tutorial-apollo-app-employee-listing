#!/bin/sh

CURRENT_FILE=$(basename "$0")

if [ $# -ne 1 ]
then
  echo "FAILED ($CURRENT_FILE): exactly one parameter expected but got $#" 1>&2
  exit 1
fi

URL="$1"
START=$(date +%s) # %s: seconds since 1970-01-01 00:00:00 UTC
CURRENT="$START"
while [ $((CURRENT - START)) -le 60 ]
do
  # https://stackoverflow.com/questions/41875177/check-if-url-returns-200-using-bash
  HTTP_STATUS_CODE=$(curl -o /dev/null --request POST --header 'content-type: application/json' --data '{"query":"query { __typename }"}' -sw '%{http_code}\n' "$URL")
  if [ "$HTTP_STATUS_CODE" -eq "200" ]
  then
    exit 0    
  fi
  echo "$HTTP_STATUS_CODE returned"
  sleep 1
  CURRENT=$(date +%s)
done

echo "FAILED ($CURRENT_FILE): $PROFILE_IMAGE_URL returned HTTP status = $HTTP_STATUS_CODE" 1>&2
exit 1