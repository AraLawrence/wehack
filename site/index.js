var express = require('express');
var path = require('path');
var app = express();
var port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'dest')));

app.get('/', function(req, res) {
	res.sendFile('./dest/index.html');
});



app.listen(port);
