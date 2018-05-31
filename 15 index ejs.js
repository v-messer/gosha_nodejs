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
	var obj = {title : "Новость", id : 4, paragraphs: ['Параграф', 'Обычный текст', 'Числа: 2, 4, 6', 99 ]};
	res.render('news', {newsId: req.params.id, newParam: 234, obj : obj});
})

app.listen(3000);
