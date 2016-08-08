# MongoDB

### Introduction

- MongoDB is an open source document oriented database.
- It is fall under NoSQL (Not Only SQL)
  - Document databases (Eg: MongoDB)
  - Graph stores (Eg: Neo4J)
  - Key-value stores (Eg: Redis)
  - Wide-column stores (Eg: Cassandra, HBase)
-  It provides high performance, high availability, and automatic scaling.
  
#### Terminology

| RDBMS | MongoDB |
|-------|--------|
|Database|Database|
|Table|Collection|
|Row |Document|
|Column|Field|
|table joins|embedded documents and linking|

### Setup

I. Importing the Public Key
   ```
   sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10
   ```
II. Create source list file MongoDB
   ```
   echo "deb http://repo.mongodb.org/apt/ubuntu "$(lsb_release -sc)"/mongodb-org/3.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.0.list
   ```
III. Update the repository
   ```
   sudo apt-get update
   ```
IV. Install MongoDB
   ```
   sudo apt-get install -y mongodb-org (latest stable)
   sudo apt-get install -y mongodb-org=3.0.12 mongodb-org-server=3.0.12 mongodb-org-shell=3.0.12 mongodb-org-mongos=3.0.12 mongodb-org-tools=3.0.12 (specific release)
   mongod -version (Check version)
   ```
V. Start/Stop/Restart MongoDB 
   ```
   sudo service mongod start/stop/restart
   ```
Note: *** Some Configuration Files ***
- Logs: /var/log/mongodb/mongod.log
- Configuration : /etc/mongod.conf
- Startup file: .mongorc.js

### Connecting to Database

* starting mongo server `mongod`
* starting mongo Client ` mongo` (JS based shell)
* Remote Database:
* mongos: Sharding Cluster
* Basic Shell Commands

| Command | Description |
|-------  | ----------- |
| help    | Show help   |
| db      | Show Current Database|
| db.help() | Show help for database methods |
| show users    | Print a list of users for current database.|
| show roles    | Print a list of all roles |
| show dbs    | Print a list of all databases on the server |
| use <db>  | Switch current database to <db>. |
| show collections | Print a list of all collections for current database |
| load() | Execute a JavaScript file |
| db.stats() | To show the stats |
| db.addUser | To add the User |
| runProgram("ls", "-l")| To Run OS Commands |
| db.runCommand({cursorInfo:1}) | Cursor Info|
| db.shutdownServer() | Shutdown the process |
| hostname() | returns name of this host |

* Running script `mongo <script>.js`
* Object ID : A 12-byte Hexa decimal BSON type

### CRUD Operations

**C** - CREATE | **R** - READ/RETRIEVE | **U** - Update | **D** - DELETE

A. Create a Database
   ```
   > use <database>
   ```
B. Create a Collection
   ```
   > db.collection.insert({field:value,...});
   ```
C. Insert a document
   ```
   > db.collection.insert({field:value,...});
   ```
D. Retrieve all documents 
   ```
   > db.collection.find()
   ```
E. Retrieve specified fields in documents 
   ```
   > db.collection.find({}, {field1:true,field2:true})
   ```
F. Query for One document
   ```
   > db.collection.findOne()
   ```
G. Update a document
   ```
   > db.collection.update({_id:value},{$set:{field:value}},{multi:true})
   ```
H. Delete all documents
   ```
   > db.collection.remove()
   ```
I. Deleting specific document 
   ```
   > db.collection.remove({field:value})
   ```
J. Delete Database
   ```
   > use database
   > db.dropDatabase()
   ```

### Misc

*  Import

   ```
   $ mongoimport --db database --collection collection < path/filename.json
   ```
*  Export

   ```
   service mongod stop (To Stop before backup)
   $ mongoexport --db database --collection collection --out path/ filename.json
   $ mongodump --dbpath /data/db --out path
   ```
*  Monitoring

   ```
   $ mongostat  // captures database operations by type
   $ mongotop   // tracks read/write activity
   $ mongoperf // performance testing tool
   MMS ( MongoDB Monitoring Service)
   ```
* [Replica](https://blog.ajduke.in/2013/05/31/setup-mongodb-replica-set-in-4-steps/)
* [Sharding](https://www.javacodegeeks.com/2015/02/setting-up-sharded-mongodb-cluster-in-localhost.html)
* [MapReduce](https://docs.mongodb.com/manual/core/map-reduce-concurrency/)

### References

- [Mongo](docs.mongodb.org)
- [MongoDB Driver](http://mongodb.github.io/mongo-java-driver/3.0/driver/getting-started/quick-tour/)
- [MongoChef](http://3t.io/mongochef/)
- [Mongo-github](https://github.com/mongodb)

