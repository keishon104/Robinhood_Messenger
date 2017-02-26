var credentials = require("./credentials");


module.exports = () =>{
    var Robinhood = require('robinhood')(credentials, function(){
        //Get list of orders
        Robinhood.orders(function(error, response, body){
            if(error){
                console.error(error);
            }else{
                var orderToCancel = body.results[0];
                //Try to cancel the latest order
                Robinhood.cancel_order(orderToCancel, function(err, response, body){
                    if(err){
                        //Error

                        console.error(err);     // { message: 'Order cannot be cancelled.', order: {Order} }
                    }else{
                        //Success

                        console.log("Cancel Order Successful");
                        console.log(body)       //{}
                    }
                })
            }
        })
    })

}
