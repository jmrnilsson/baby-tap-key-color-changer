var express = require('express');
var app = express();

app.use('/static', express.static('content'));

app.get('/', function (req, res) {
  res.redirect('/static/index.html');
})

app.listen(3000);
console.log('listening on port 3000');