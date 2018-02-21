const fs = require('fs');
const CoolPal = require('../src/coolpal.js');

// TODO: Implement a host variable for todo plugin for local dynamodb. Also
// add optional variables to access key and secret key
fs.readFile('examples/plugin_configuration.json', (err, data) => {
  if (err) throw err;
  let configuration = JSON.parse(data);
  let token = configuration.token;
  let bot = new CoolPal(configuration);
  bot.start();
});
