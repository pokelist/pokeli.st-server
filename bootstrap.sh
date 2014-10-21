#!/usr/bin/env sh
yum update
yum install wget git
wget https://raw.githubusercontent.com/isaacs/nave/master/nave.sh -O /usr/bin/nave
chmod +x /usr/bin/nave
nave usemain latest
npm install --global grunt-cli gulp
