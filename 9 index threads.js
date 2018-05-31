var fs = require("fs");

var myReadShort = fs.createReadStream(__dirname + '/9 text.txt');
var myWriteShort = fs.createWriteStream(__dirname + '/9 news.txt');

myReadShort.on('data',  function (chunk){
	console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~:\n");
	myWriteShort.write(chunk);
});
