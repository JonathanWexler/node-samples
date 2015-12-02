// read.js

// file system variable
var fs =require('fs');
// assign the json file to the varaible data
var data = require('./data1.json');
// Since data is an object we can grab its name attribute
console.log(data.name);

// other way to grab information from the json in the file system reading
fs.readFile('./data1.json', 'utf-8', function(err, data){
    data = JSON.parse(data);
    console.log(data.name);
});