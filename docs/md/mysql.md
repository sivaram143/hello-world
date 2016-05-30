# MySQL

### Introduction

-  It is a RDBMS
-  It is released under an open-source license
-  MySQL uses a standard form of the well-known SQL data language.
  
#### RDBMS Terminology

| Term  | Description |
|-------| ----------- |
|Column |             |
|Row    |             |
|Table  |             |
|Database|            |
|Primary Key|         |
|Foriegn Key| ----      |
|index|  -----           |

### Setup

I. Update the repository
   ```
   sudo apt-get update
   ```
II. Install Mysql
   ```
   sudo apt-get install mysql-server-5.6
   mysqladmin -u root -p version (Check Server Version)
   sudo apt-get install mysql-server=<version>
   ```
III. Start/Stop/Restart/Status Mysql 
   ```
   sudo service mysql start/stop/restart/status
   ```
Note: **Some Configuration Files**
- Configuration : /etc/init.d/mysql
- Logs : /var/log/mysql/mysql.log

### Connecting to Database
* Login into MySQL Server `$ mysql -u root -p`
* Remote Database: `mysql -h hostname -u root -p`
* Check Server `mysqladmin -u root -p ping`
* update root password `mysqladmin -u root -p oldpassword newpassword`
* Create User `CREATE USER 'new_user'@'localhost' IDENTIFIED BY 'new_password';`
* Grant Privilegs `grant all privileges on databasename to username@localhost;`
* Basic Shell Commands

| Command | Description |
|-------  | ----------- |
| help    | Show help   |
| select version(); | Display Version|
| cd /var/lib/mysql && ls -lh | Show Database Size |
| show databases;| Display all databases |
| use db | Switch to database |
| show tables; | Display tables in current database|
| describe table-name; | Show the description of table|
| SELECT User,Host FROM mysql.user; | List of Users |

### CRUD Operations

**C** - CREATE | **R** - READ/RETRIEVE | **U** - Update | **D** - DELETE

A. Create a Database
   ```
   mysql> CREATE DATABASE database;
   ```
B. Create a Table
   ```
   mysql> CREATE TABLE table(column datatype,...);
   ```
C. Insert a row
   ```
   mysql> INSERT INTO table(column,...) VALUES(value,...);
   ```
D. Retrieve all rows
   ```
   mysql> SELECT * FROM table;
   ```
E. Retrieve specified fields in documents 
   ```
   mysql> SELECT column1,column2 FROM table;
   ```
F. Retrieve specific rows
   ```
   mysql> SELECT * FROM table WHERE column = value;
   ```
G. Update a row
   ```
   mysql> UPDATE table SET column = value WHERE id = id;
   ```
H. Delete all rows
   ```
   mysql> DELETE FROM table;
   ```
I. Deleting specific document 
   ```
   mysql> DELETE FROM table WHERE column = value;
   ```
J. Delete Database
   ```
   mysql> DROP DATABASE database;
   ```

### Misc

*  Import
   ```
   mysql> LOAD DATA LOCAL INFILE 'dump.txt' INTO TABLE tbl;
                      (or)
   $ mysqlimport -u root -p --local database_name dump.txt
   ```
*  Export
   ```
   mysql> SELECT * FROM tbl INTO OUTFILE '/tmp/filename.txt';
                    (or)
   $ mysqldump -u root --opt database > path.filename.sql
   ```
* [Monitoring](https://www.nagios.com/solutions/mysql-monitoring/)
* [PHPMYADMIN](https://www.phpmyadmin.net/)
* [MySql Workbench](https://dev.mysql.com/downloads/workbench/)
* [MySql Admin Commands](http://www.tecmint.com/mysqladmin-commands-for-database-administration-in-linux/)

### References

- [MySQL](http://dev.mysql.com/doc/)



