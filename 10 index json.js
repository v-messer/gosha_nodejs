var fs = require("fs");

var http = require('http');
var server = http.createServer(function(req, res){
	console.log("URL стараницы: " + req.url);
	res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});

	var obj = {
		model: 'Audi',
		speed: '234',
		wheels: 4
	};

	res.end(JSON.stringify(obj));	
});

server.listen(3000, '127.0.0.1');
console.log('Мы отслеживаем порт 3000');
