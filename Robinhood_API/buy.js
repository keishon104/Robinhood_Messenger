var Robinhood = require('robinhood')(credentials, function(){
    var options = {
        type: 'limit',
        quantity: 1,
        bid_price: 1.00,
        instrument: {
            url: String,
            symbol: String
        }
        // // Optional:
        // trigger: String, // Defaults to "gfd" (Good For Day)
        // time: String,    // Defaults to "immediate"
        // type: String     // Defaults to "market"
    }
    Robinhood.place_buy_order(options, function(error, response, body){
        if(error){
            console.error(error);
        }else{
            console.log(body);
        }
    })
});
