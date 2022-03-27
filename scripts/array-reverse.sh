#!/bin/sh

i=0
while read -r line
do
  eval line_"$i"="$line"
  i=$((i+1))
done

i=$((i-1))
while [ "$i" -ge 0 ]
do
  line_i="line_$i"
  eval echo \""\$$line_i"\"
  i=$((i-1))
done