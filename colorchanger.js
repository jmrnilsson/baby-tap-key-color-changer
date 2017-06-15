var express = require('express');
app = express();

app.use('/static', express.static('content'));

app.get('/', function (req, res) {
  res.redirect('/static/index.html');
})

app.listen(3000)
console.log('listening to port 3000');