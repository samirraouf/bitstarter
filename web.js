var fs = require('fs');
var outfile = 'index.html';
var buff1 = ("                                ","utf-8")

var express = require('express');

var app = express.createServer(express.logger());

buff =fs.readFileSync(outfile)

app.get('/', function(request, response) {
  response.send(buff.toString(buff1, "utf-8"));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
