// load filesystem
fs = require('fs');
//define function to take an error and data, and print data to screen
function phoneNumber(err, data) {
 console.log('data',data);
}
fs.readdir('/Users', phoneNumber);
console.log("This is the final text");
