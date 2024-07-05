### Install Softwares in mac os

- [Homebrew](https://brew.sh/) calls itself _The missing package manager for macOS_ and is an essential tool for any developer.
   ```
   sudo xcode-select --install
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)" # install homebrew
   echo 'PATH="/usr/local/bin:$PATH"' >> ~/.bash_profile # Setting the path
   brew doctor
   ```

- [**Docker**](https://docs.docker.com/reference/cli/docker/) : Docker is a platform for developers and sysadmins to develop, ship, and run applications. Docker lets you quickly assemble applications from components and eliminates the friction that can come when shipping code. Docker lets you get your code tested and deployed into production as fast as possible.
  - option1: Navigate to the [here](https://docs.docker.com/desktop/install/mac-install/)
  - option2:
    ```
    brew install docker docker-machine
    docker run hello-world
    ```
- [GIT](https://www.atlassian.com/git/glossary#commands): Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.
  ```
  brew install git
  git --version
  which git

  # Setting config for first time
  git config --global user.name "Your Name Here"
  git config --global user.email "your_email@youremail.com"
  git config --global credential.helper osxkeychain
  ```
- [GO](https://www.atlassian.com/git/glossary#commands): 
  ```
  brew install go
  go version
  which git
  ```
- [Java](https://www.java.com/en/): Java requires you to install a JDK ("Java Development Kit") or JRE ("Java Runtime Environment"). We'll use a JDK since it can do everything a JRE can, plus more.
  ```
  brew install openjdk
  java --version
  brew search jdk # list available jdk versions
  ```
- [MySQL](https://www.mysql.com/): It is a relational database management system
  ```
  brew install mysql
  brew services start mysql
  ```
- [PostgreSQL](https://www.postgresql.org/): PostgreSQL is an open source relational database management system (RDBMS). It is the default database for macOS server.
  ```
  brew install postgres
  postgres -V
  brew services start postgresql 
  psql # PostgreSQL console
  brew install psequel # GUI Tool
  ```
- [Node.js](https://nodejs.org/en): Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.
  ```
  brew install node
  node -v
  npm -v
  # Using NVM
  brew install nvm # node version manager
  source ~/.bashrc        # source your bashrc/zshrc to add nvm to PATH
  command -v nvm          # check the nvm use message
  nvm install node        # install most recent Node stable version
  nvm ls                  # list installed Node version
  nvm use node            # use stable as current version
  nvm ls-remote           # list all the Node versions you can install
  nvm alias default node  # set the installed stable version as the default Node
  # Install locally
  npm install <package>
  # Install globally
  npm install -g <package> 
  npm list [-g] # list of available packages
  npm outdated [-g] # find outdated packages
  npm update [-g] [<package>] # upgrade all or a particular package
  npm uninstall [-g] <package> # uninstall a package
  brew install yarn # Yarn is another package manager built by Facebook. Yarn stands for Yet Another Resource Negotiator. It provides similar functionalities as NPM. It is an alternative to NPM when installing, uninstalling, and managing package dependencies from the NPM registry or GitHub repositories.
  ```
- [Python](https://www.python.org/): Python is a programming language that lets you work quickly and integrate systems more effectively. 
  ```
  brew install python
  brew install python@2
  pip install --upgrade setuptools
  pip install --upgrade pip
  pip install ipython
  ```
- IDE: An integrated development environment (IDE) is a software application that provides comprehensive facilities for software development. An IDE normally consists of at least a source-code editor, build automation tools, and a debugger.
  ```
  brew install --cask sublime-text # Sublime
  brew install --cask visual-studio-code # VSCODE
  sudo sed -i '' '1a\'$'\n''auth       sufficient     pam_tid.so'$'\n' /etc/pam.d/sudo # Sudo permissions MAC with Touch pad
  ```