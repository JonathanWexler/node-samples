// Accessing the directory in the file system
var fs = require('fs');
fs.readdir('/Users', function (err, data){
    console.log(data);
})