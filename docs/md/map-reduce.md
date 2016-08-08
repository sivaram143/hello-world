### Map Reduce

* Map-reduce is a data processing paradigm for condensing large volumes of data into useful aggregated results. For map-reduce operations, MongoDB provides the mapReduce database command.

* The mapReduce command takes 2 primary inputs:
   - the mapper function
   - the reducer function.
   
* A Mapper will start off by reading a collection of data and building a Map with only the required fields we wish to process and group them into one array based on the key. And then this key value pair is fed into a Reducer, which will process the values.



### References:

- https://github.com/sedouard/mongodb-mva/tree/master/module4_advanced_data_ops
- http://thejackalofjavascript.com/mapreduce-in-mongodb/