var client = require ('twilio')(
  "ACXXXXXXXXXXXXXXXXX",
  "your_auth_token"
);
client.messages.create({
  from: "TWILIO_PHONE_NUMBER",
  to: "SENDING_PHONE_NUMBER",
  body: "You are ready to connect to Robinhood js!!!"
}, function(err, message) {
  if(err) {
    console.error(err.message);
  }
});
