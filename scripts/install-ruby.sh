#!/bin/sh

\curl -sSL https://rvm.io/mpapis.asc | gpg2 --import -
\curl -sSL https://get.rvm.io | bash -s stable
source ~/.rvm/scripts/rvm
rvm --version
rvm install 2.2.0
rvm use 2.2.0
rvm --default use 2.2.0
rvm docs generate-ri
rvm default
ruby --version