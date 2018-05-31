var express = require('express');
var app = express();
app.set('view engine', 'ejs');

app.get('/', function(req, res){
	res.sendFile(__dirname + '10 index.html');
})

app.get('/about', function(req, res){
	res.sendFile(__dirname + '11 about.html');
})

app.get('/news/:id', function(req, res){
	res.send("ID is - " + req.params.id);
})

app.listen(3000);
