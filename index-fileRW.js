var fs = require('fs');

fs.readFile('text.txt', 'utf8', function(err, data){
	console.log(data);
});
fs.writeFile('some.txt', 'Hi it\'s me!', function(err, data){
});

console.log('Test');

