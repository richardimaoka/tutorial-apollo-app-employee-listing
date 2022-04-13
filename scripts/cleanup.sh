#!/bin/sh

cd "$(dirname "$0")" || exit
cd ../

rm -rf file-server
rm -rf client
rm -rf server

