var express = require('express');
var app = express();

app.use('/static', express.static('content'));

app.get('/', function (req, res) {
  res.redirect('/static/index.html');
})

var startTime = new Date().getTime();
var intervalSeconds = 2;
var durationMinutes = 60;
var discolights = new Array();

console.log('generating disco lights sequences');

var i = 0;
while(true) {
	if (i * intervalSeconds * 60 > durationMinutes) {
		break;
	}
	
	discolights.push({startTime + })
}

app.listen(3000);
console.log('listening on port 3000');