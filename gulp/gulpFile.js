// Define a variable called gulp to requrie the gulp package
var gulp = require('gulp');

// access gulp and define a task, to run by default
// then an aanonymous function
gulp.task('default', function(){
    console.log('hello');
});