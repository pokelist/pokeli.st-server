#!/usr/bin/env sh
yum update
yum install wget git curl
curl -sL https://rpm.nodesource.com/setup | bash -
yum install -y nodejs gcc-c++ make
npm install --global grunt-cli gulp
