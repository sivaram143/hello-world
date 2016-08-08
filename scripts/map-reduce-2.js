use test
db.things.insert( { _id : 1, tags : ['dog', 'cat'] } );
db.things.insert( { _id : 2, tags : ['cat'] } );
db.things.insert( { _id : 3, tags : ['mouse', 'cat', 'dog'] } );
db.things.insert( { _id : 4, tags : []  } );

// map function
m = function(){
    this.tags.forEach(
        function(z){
            emit( z , { count : 1 } );
        }
    );
};

// reduce function
r = function( key , values ){
    var total = 0;
    for ( var i=0; i<values.length; i++ )
        total += values[i].count;
    return { count : total };
};

res = db.things.mapReduce(m, r, { out : "myoutput" } );

//printjson(res);

db.myoutput.find()