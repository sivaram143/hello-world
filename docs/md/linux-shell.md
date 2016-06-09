## Linux && Shell Scripting

### Terminology
* Shell: It is a program that takes your commands from the keyboard and gives them to the operating system to perform.
   ```
   Some types of Shells: bash, ksh, csh ...
   ```
* Terminal: This is a program that opens a window and lets you interact with the shell.
   ```
   gnome-terminal, nxterm ...
  CTRL+ALT+T :shortcut
   ```
* Editor: Creting script files
  ```
  gedit, vi/vim, emacs, atom, nano ...
  ```
   
### Some Useful Linux Commands

| Command | Description | Usage |
| --------| ------------| ------|
| pwd     | prints Working directory |....|
| bc     | basic calculator |....|
| date  | displays date ||
| **ls**     | list of files and directories | |
| who |displays who is logged on to the system.| |
|hostname | show or set the system's host name| |
| uptime | how long your system is running ||
|**uname -a** |displays system information||
|lsb_release -a|displays ubuntu version||
| cd | change directory | | 
| mkdir <name> | create a directory | |
| touch <filename> | create a file | |
| **cat <filename>** | display the file content | |
| file <filename> | determines the file type | |
| more  | displays text, one screen at a time. | |
| less  | similar to more && it has fw/bw facility | |
| head  | reads the first few lines  | |
| **tail -f** |reads the last few lines| |
| cp  | copy files and directories | |
| mv  | move or rename files and directives | |
| rm  | remove files and directories | |
| sort | sorts the file contents || |
| wc  | word count ||
| which <cmd> | shows the localtion | |
|chmod | Permissions | rwx/ugo/421 |
| **sudo -i** | become root user ||
| help / info | getting help / info | |
| man  | manual documenation | |
| tee | store and view (both at the same time)||
| find . name| search and locate list of files and directories| |
| **grep** |search text or searches the given file for lines containing a match to the given strings or words||
| locate | simplest and quickest way to find the locations of files and directories  | |
| **unzip** | extract the zip file ||
| tar(-cvf/-xvf) | used to compress files and folders ||
| wget | (web get) download the software ||
| sed |stream Editor used for modifying the files in unix (or linux)| http://www.folkstalk.com/2012/01/sed-command-in-unix-examples.html|
| **ps** | report a snapshot of the current processes.| |
| top |display top CPU processes ||
|netstat |tool for checking your network configuration and activity||
| du |disk usage ||
| df -h |disk filesystem|| 
| **free -m** |display RAM details in Linux machine||
|ln |creates links between files.||
|ssh user@host | login into remote host|| 
| scp <src> <dest>| transfer local to remote ||
| **ifconfig** | view the configuration of, a network interface.||
| route | view or manipulate the system’s routing table. || 
| **ping** |used to find out whether the peer host/gateway is reachable.|| 
| tree | lists the contents of directories in a tree-like format.| |
| service | call script located at /etc/init.d/ directory and execute the script | service <name> start/stop/restart |
| kill | terminate the process ||
| curl | easy to use command line tool to send and receive files | http://www.slashroot.in/curl-command-tutorial-linux-example-usage |
| **reboot** | reboot the system | |
| init 0 | shuts down the os ||
| init 6 | restart the os ||
| env | displays environment variables | |
| echo | echo displays a line of text. ||
| cat /proc/cpuinfo | cpu inforamtion ||
| cat /proc/meminfo | memory information ||
| ls /var/log | view log files | |
| dmesg | display kernal logs ||
| cat /etc/hosts | displays hostnames | |
| cat /etc/passwd | displays login information | |
| ~/.bashrc | user's personal startup file | | |

### Shell Scripting

- Steps to create a script 
     - Write a script using editor and save as `.sh`
     - Give the permissions and excute it. `chmod 755`
     
  ```
  eg#1: https://gist.github.com/sivaram143/7761ea39adc62b58e91f06adcbacca16
  # Usage : ./welcome.sh

  # the below line is called shebang
  #!/bin/bash 

  # prints the string to stdout
  echo "Welcome !"

  ```

