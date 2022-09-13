// 4.	Write a JavaScript program to get an array of lines from the specified file. 

const fs = require('fs');
const readFileLines = filename =>
  fs
    .readFileSync(filename)
    .toString('UTF8') //  computer save 00001/ ASCII a-> 065 / UTF8 -> a -> U+041
    .split('\n');
/*
contents of test.txt :
  line1
  line2
  line3
  ___________________________
*/
let arr = readFileLines('./test.txt');

console.log(arr); // ['line1', 'line2', 'line3']
