var fs = require("fs");

var http = require('http');
var server = http.createServer(function(req, res){
	console.log("URL стараницы: " + req.url);
	res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});

	var myReadShort = fs.createReadStream(__dirname + '/10 index.html');

	myReadShort.pipe(res);
});

server.listen(3000, '127.0.0.1');
console.log('Мы отслеживаем порт 3000');
