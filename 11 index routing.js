var fs = require('fs');
var http = require('http');
var server = http.createServer(function(req, res){
	console.log("URL стараницы: " + req.url);
	if (req.url === '/index' || req.url === '/') {

	res.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'});
	fs.createReadStream(__dirname + '/10 index.html').pipe(res);

	} else if (req.url === '/about') {
		res.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'});
		fs.createReadStream(__dirname + '/11 about.html').pipe(res);
	}
});

server.listen(3000, '127.0.0.1');
console.log('Мы отслеживаем порт 3000');