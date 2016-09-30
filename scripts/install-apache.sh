#!/bin/bash

echo "apache: Installing Apache"
apt-get -y install apache2

echo "apache: Creating Hello World index.html"
cat > /var/www/html/index.html <<EOF
<html>
  <head>
    <title>Sup</title>
  </head>
  <body>
    <h1>Hello, World!</h1>
  </body>
</html>
EOF

echo "apache: Starting Apache"
/usr/sbin/service apache2 start