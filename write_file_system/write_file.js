// Writing to the file system with ndoe
var fs = require('fs');
// create a variable to hold a string of JSON data
var tomString = '{"name": "Tom"}';
// create a string to hold JSON data, not as a string
var testTwo = {
    name:"Jon",
    last:"Wexler"
};
// write string JSOn to file
fs.writeFile('tom.json', tomString)
// write JSON object and convert to string in file
fs.writeFile('test.json', JSON.stringify(testTwo))
