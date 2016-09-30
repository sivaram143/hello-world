#!/bin/sh

CURRENT=$(node -v)
VERSION=$(curl -L -s http://nodejs.org/dist/latest/ \
    | egrep -o '[0-9]+\.[0-9]+\.[0-9]+' \
    | tail -n1)
PLATFORM=ubuntu
ARCH=x64
PREFIX="$HOME/node-v$VERSION-$PLATFORM-$ARCH"

if test "v$VERSION" != "$CURRENT"; then
    echo "Installing node v$VERSION ..."
    mkdir -p "$PREFIX" && \
    curl -# -L http://nodejs.org/dist/v$VERSION/node-v$VERSION-$PLATFORM-$ARCH.tar.gz \
      | tar xzvf - --strip-components=1 -C "$PREFIX"
else
    echo "Latest stable version of node already installed."
fi

# nvm.sh
# curl -ssL https://raw.githubusercontent.com/creationix/nvm/v0.25.3/install.sh | bash
# . ~/.nvm/nvm.sh