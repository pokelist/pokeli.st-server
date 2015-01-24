#!/usr/bin/env sh

if [-d "./assets" && "$(ls -A ./assets)"]
	git submodule update --init
fi

cd ./assets
gulp $1
cd ..
