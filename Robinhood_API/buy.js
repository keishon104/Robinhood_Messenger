var credentials = require("./credentials");

module.exports = () =>{
  var Robinhood = require('robinhood')(credentials, function(){
      var options = {
          type: 'limit',
          quantity: 1,
          bid_price: 10.00,
          instrument: {
              url: "https:\/\/api.robinhood.com\/instruments\/76a86e29-de0e-487c-9a0e-8cc280db7e49\/",
              symbol: "XNYS"
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
}
