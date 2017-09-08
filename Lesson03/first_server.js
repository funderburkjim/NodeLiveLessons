/* first web server. Lesson 1.4 
 Run the server
 node first_server.js
 Two ways to test:
 a)
 (in browser) http://localhost:8080/
 b) curl -i http://localhost:8080
   NOTE: -i shows headers

  [Stop server with Ctrl-C]
 node debug first_server.js  # 
*/
var http = require("http"); // load "http" module

function process_request(req,res) {
    var body = "Thanks for calling!\n";
    var content_length = body.length;
    res.writeHead(200, {  // response code is 200
	'Content-Length' : content_length,
	'Content-Type' : 'text/plain',
    });
    res.end(body); // output body
}

var s = http.createServer(process_request);
s.listen(8080); // start server and listen on port 8080