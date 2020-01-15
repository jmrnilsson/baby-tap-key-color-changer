var express = require('express');
var app = express();

var startTime = Math.floor(new Date().getTime() / 1000);
var intervalSeconds = 2;
var durationMinutes = 60;
var discolights = new Array();

app.use('/static', express.static('content'));

app.get('/', function (req, res) {
	res.redirect('/static/index.html');
  })

app.get('/lights', function (req, res) {
	res.json(discolights);
});

app.get('/time', function (req, res) {
	res.json(new Date().getTime());
});

console.log('generating disco lights sequences');

var i = 0;
while(true) {
	if (i * intervalSeconds > durationMinutes * 60) {
		break;
	}
	
	discolights.push({time: startTime + i, color: randomColor()});
	i += intervalSeconds;
}

console.log(JSON.stringify(discolights));

app.listen(3000, '0.0.0.0');
console.log('listening on port 3000');

function randomColor() {
	return '#'+Math.floor(Math.random()*16777215).toString(16);
}