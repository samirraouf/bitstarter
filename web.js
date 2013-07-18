var fs = require('fs');
var outfile = 'index.html';
var buff1 = new Buffer("I am a 32 Byte String          ","utf-8");

var express = require('express');

var app = express.createServer(express.logger());

buff1 =fs.readFileSync(outfile);

app.get('/', function(request, response) {
  response.send(buff1.toString("utf-8"));
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
