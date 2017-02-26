var http = require('http'),
    express = require('express'),
    twilio = require('twilio'),
    bodyParser = require('body-parser'),
    buy = require('./Robinhood_API/buy'),
    sell = require('./Robinhood_API/sell'),
    cancel = require('./Robinhood_API/cancel');




var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', function(req, res) {
    var twilio = require('twilio');
    var twiml = new twilio.TwimlResponse();
    if (req.query.Body == 'hello') {
        twiml.message('Hi!');
    } else if(req.query.Body == 'bye') {
        twiml.message('Goodbye');
    } else if(req.query.Body == 'cancel order') {
        cancel();

    } else {
        twiml.message('No Body param match, Twilio sends this in the request to your server.');
    }
    res.writeHead(200, {'Content-Type': 'text/xml'});
    res.end(twiml.toString());
});

app.post('/', function(req, res) {
  console.log(req.body);
    var twilio = require('twilio');
    var twiml = new twilio.TwimlResponse();
    var body = req.body.Body;
    if (body == 'help') {
        twiml.message('We see you need help The commands. buy- purchase shares of stock   sell - sell your shares of stock terminate - cancel you most recent order.');
    } else if(body == 'buy') {
        twiml.message('You have placed a order to buy 1 shares of Snapchat,INC');
    } else if(body == 'sell') {
        sell();
        twiml.message('You have placed a order to sell 1 shares of Snapchat,INC');
    }  else if(body == 'terminate') {
        cancel();
        twiml.message('You have canceled our most recent order');
    }else {
        twiml.message('Your entry was invalid');
    }
    res.writeHead(200, {'Content-Type': 'text/xml'});
    res.end(twiml.toString());
});

app.post('/myaction', function(req, res) {
  res.send('You sent the name "' + req.body.name + '".');
  console.log(req.body.name);
});

http.createServer(app).listen(1337, function () {
    console.log("Express server listening on port 1337");
});
