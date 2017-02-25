var client = require ('twilio')(
  "AC1d788d4c3f95aa90db841a3d6070a1f1",
  "a83255c2c333e438b3f23d629e9d9c1c"
);
client.messages.create({
  from: "13868884332",
  to: "3865069094",
  body: "You are ready to connect to Robinhood js!!!"
}, function(err, message) {
  if(err) {
    console.error(err.message);
  }
});
