var events = require('events');
var util = require('util');

var Cars = function (model) {
	this.model = model;
}

util.inherits(Cars, events.EventEmitter);

var bmw = new Cars('BMW');
var audi = new Cars('Audi');
var volvo = new Cars('volvo');

var cars = [bmw, audi, volvo];
cars.forEach(function(car) {
	car.on('speed', function(text) {
		console.log(car.model + " speed is - " + text);
	});
});

bmw.emit('speed', '254 km');
