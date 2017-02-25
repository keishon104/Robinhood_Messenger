var credentials = require("./credentials");
var Robinhood = require('robinhood')(credentials, function(){
    Robinhood.orders(function(err, response, body){
        if(err){
            console.error(err);
        }else{
            console.log("orders");
            console.log(body);
        }
    })
});
