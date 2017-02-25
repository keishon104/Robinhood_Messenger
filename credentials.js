//The username and password you use to sign into the robinhood app.

var credentials = {
    username: 'keishon104',
    password: 'Daytona@2014'
};

var Robinhood = require('robinhood')(credentials, function(){

    //Robinhood is connected and you may begin sending commands to the api.

    Robinhood(null).quote_data('GOOG', function(error, response, body) {
        if (error) {
            console.error(error);
            process.exit(1);
        }
        console.log(body);
    });

});
