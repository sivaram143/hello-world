/*
  File: mongo-commands.js
  Basic mongo Commands executed via script file
  Usage: 
    $ mongo < mongo-commands.js
*/


// showing the existing dbs..
show dbs

// show current db
db

// showing collections
show collections

// creating database
use user

// creates  collection
// db.createCollection('a')

// MongoDB will create a collection if your collection does not currently exist:
// Creating users collection with sample data
for (var i = 1; i <= 5; i++) {
   db.users.insert( { username : "user-"+i, create_date: new Date() } )
}


// Querying data with projection
var cursor = db.users.find({}, {username:1});
while(cursor.hasNext()) { 
  print(tojson(cursor.next())); 
}

// couting the documents
db.users.find().count()


// displaying 2 documents only with limit()
db.users.find({}).limit(2)

/* displaying documents with sorting() */
// ascending
db.users.find({}).sort({"username":1})

// descending
db.users.find({}).sort({"username":1})

// Removing collection
db.users.drop()
db.customers.drop()

// creating another collection
var customer = {id:1, fistname:"siva", lastname:"ram"}

var address  = {"streetAddress": "LIG-185","city": "Hyd", "state": "Telagana", "postalCode": "500071"}

var phoneNumber = [{"type": "Mobile", "number": "8019133783"}]


// creating customers collections and inserting data
db.customers.insert(customer)


// updating collection with new fields
db.customers.update({}, {$set:{"phoneNumber":phoneNumber}}, false, true);
db.customers.update({}, {$set:{"address":address}}, false, true);

// creating index with unique and dropDups options
// expireAfterSeconds : TTL to control how long 
db.customers.ensureIndex( { id:1 }, { unique:true, dropDups:true })

// querying customers collection
db.customers.find()

// displaying information about query planner
db.customers.find().explain()

// displaying stats information
db.customers.stats()

// displaying indexes
db.customers.getIndexes()

// dropping indexes
db.customers.dropIndex("id_1")


// displaying indexes
db.customers.getIndexes()

// droping collection
db.customers.drop()

// var sample = [
//   { "_id" : 1, "domainName" : "test1.com", "hosting" : "hostgator.com" },
//   { "_id" : 2, "domainName" : "test2.com", "hosting" : "aws.amazon.com"},
//   { "_id" : 3, "domainName" : "test3.com", "hosting" : "aws.amazon.com" },
//   { "_id" : 4, "domainName" : "test4.com", "hosting" : "hostgator.com" },
//   { "_id" : 5, "domainName" : "test5.com", "hosting" : "aws.amazon.com" },
//   { "_id" : 6, "domainName" : "test6.com", "hosting" : "cloud.google.com" },
//   { "_id" : 7, "domainName" : "test7.com", "hosting" : "aws.amazon.com" },
//   { "_id" : 8, "domainName" : "test8.com", "hosting" : "hostgator.com" },
//   { "_id" : 9, "domainName" : "test9.com", "hosting" : "cloud.google.com" },
//   { "_id" : 10, "domainName" : "test10.com", "hosting" : "godaddy.com" }
// ]
// 
// // creaing website collection
// db.websites.save(sample)
// 
// // querying websites collection
// db.websites.find().pretty()
// 
// // aggregations
// print("==============  Group By + sum =============")
// db.websites.aggregate({ $group : {_id : "$hosting", total : { $sum : 1 }}});
// print("============== Group By + sum + sort =============")
// // for big data: allowDiskUse:true
// var groupdata = db.websites.aggregate({$group : {_id : "$hosting", total : { $sum : 1 }}}, {$sort : {total : -1}});
// print("============== Group By + sum + sort + $match ============")
// db.websites.aggregate({$match : {hosting : "aws.amazon.com"}},{$group : { _id : "$hosting", total : { $sum : 1 }}});
// 
// // Exports Grouping Result to CSV or JSON
// 
// // inserting result data to new collection
// db.websitegroup.insert(groupdata.toArray());
// db.websitegroup.find().pretty()
// 
// // exports the collection “websitegroup” to a csv file.
// // mongoexport -d user -c websitegroup -f _id,total -o group.csv --csv
// 
// // exports the collection “websitegroup” to a JSON file.
// // mongoexport -d user -c websitegroup -o group.json

// droping database
db.dropDatabase()

