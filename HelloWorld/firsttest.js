/**
 *  First Test 21.02.2019
 *  entering some changes to test git
 *  Version 0.1
 */

var mytext= "Hello World";
function add_numbers(a, b) {
    return a + b;
}
 
console.log(mytext + " 2 + 3 => " + add_numbers(2, 3));

var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!');
}).listen(8080);

