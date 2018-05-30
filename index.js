var http = require('http');
var server = http.createServer(function(req, res){
	console.log("URL стараницы: " + req.url)
	res.writeHead(200, {'ContentType': 'text/plain; charset=utf-8'});
	res.end('Привет мир!');
});

server.listen(3000, '127.0.0.1');
console.log('Мы отслеживаем порт 3000');