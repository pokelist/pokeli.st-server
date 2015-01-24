#!/usr/bin/env bash

if [ -d "./assets" ] & [ ! "$(ls -A ./assets)" ]; then
	git submodule update --init
fi

cd ./assets
gulp $1
cd ..
