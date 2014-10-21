#!/usr/bin/env sh
yum update
yum install wget
wget https://raw.githubusercontent.com/isaacs/nave/master/nave.sh -O /usr/bin/nave
chmod +x /usr/bin/nave
nave usemain latest