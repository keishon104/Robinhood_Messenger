var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({extended: false}));

app.post("/message", function (request, response) {
  console.log(request.body);
  response.send("<Response><Message>Hello</Message></Response>")
});

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/index.html');
});

var listener = app.listen(3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
