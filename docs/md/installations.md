# Ubuntu Software Setup Instructions
### Common Guide Lines
1. Install any softwares
   ```
   sudo apt-get install <pacakge_name>
            (or)
   Download the package from relevant site and extract and install
            (or)
   Using dpkg / Ubuntu Software Center / Synaptic Tool
   ```
2. Uninstall any softwares
   ```
   sudo apt-get autoremove
   sudo apt-get remove <pacakge_name> (will remove the binaries)
           (or)
   sudo apt-get purge <pacakge_name>  (will remove everything)
   ```
3. List All existing installed Packages
   ```
   dpkg-query -l
   ```

### Setup Useful Packages

* [Ubuntu Build Essentials](http://packages.ubuntu.com/precise/build-essential)
  ```
  sudo add-apt-repository "deb http://archive.ubuntu.com/ubuntu $(lsb_release -sc) main universe
  sudo apt-get update
  sudo apt-get install build-essential
  ```
* [SSH](https://www.maketecheasier.com/secure-ssh-server-ubuntu/)
  ```
  $ sudo apt-get update
  $ sudo apt-get install openssh
  ```
* Telnet/FTP
  ```
  $ sudo apt-get install xinetd telnetd
  $ sudo /etc/init.d/xinetd restart
  **FTP**
  $ sudo apt-get update
  $ sudo apt-get install vsftpd
  $ sudo service vsftpd restart
  ```
* LAMP
  ```
  $ sudo apt-get install apache2
  $ sudo apt-get install mysql-server
  $ sudo apt-get -y install php7.0 libapache2-mod-php7.0
  $ sudo /etc/init.d/apache2 restart (or) systemctl restart apache2
  **Test**
  $ php -r 'echo "\n\nYour PHP installation is working fine.\n\n\n";' (or)
  $ vi /var/www/html/info.php
    <?php
       phpinfo();
    ?>
  $ sudo chown www-data:www-data /var/www/html/info.php
  - Accessing file in browser `http://localhost/info.php` 

  **Enable the SSL website in apache**
  $ sudo a2enmod ssl
  $ sudo a2ensite default-ssl
  **phpmyadmin**
  $ sudo apt-get -y install phpmyadmin
  ```
  # Ref: 
  - [Apache](http://httpd.apache.org/){:target="_blank"}
  - [PHP](http://www.php.net/)
  - [MySQL](http://www.mysql.com/)
  - [MariaDB](https://mariadb.com/)
  - [Ubuntu](http://www.ubuntu.com/)
  - [phpMyAdmin](http://www.phpmyadmin.net/)


* [Browsers:Firefox/Chrome](https://www.mozilla.org/en-US/firefox/new/)
  ```
  **Firefox**
  $ cd /usr/local
  $ wget http://ftp.mozilla.org/pub/mozilla.org/firefox/releases/46.0.1/linux-x86_64/en-US/firefox-46.0.1.tar.bz2
  $ tar xvjf firefox-46.0.1.tar.bz2
  $ sudo ln -s /usr/local/firefox/firefox /usr/bin/firefox
  $ firefox &
  **Chrome**
  $ wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | sudo apt-key add -
  $ sudo sh -c 'echo "deb http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google-chrome.list'
  $ sudo apt-get update
  $ sudo apt-get install google-chrome
  ```
* [TeamViewer](https://www.teamviewer.com/hi/download/windows/)
  ```
  $ wget http://download.teamviewer.com/download/teamviewer_linux.deb
  $ sudo dpkg --add-architecture i686
  $ sudo apt-get update
  $ sudo dpkg -i teamviewer_linux.deb
  $ sudo apt-get -f install
  $ sudo dpkg -i teamviewer_linux.deb
  ```
* [Skype](https://www.skype.com/en/download-skype/skype-for-computer/)
  ```
  $ sudo add-apt-repository "deb http://archive.canonical.com/ $(lsb_release -sc) partner"
  $ sudo apt-get update
  $ sudo apt-get install skype
  ```
* [Sublime](https://www.sublimetext.com/2)
  ```
  $ sudo add-apt-repository -y ppa:webupd8team/sublime-text-2
  $ sudo apt-get update
  $ sudo apt-get install sublime-text
  ```
### Common Errors && Solutions
I. 



