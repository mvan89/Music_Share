var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser'); 
// var SC = require('soundcloud');
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './client')));

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);


// SC.initialize({
//   client_id: '2610bdc20d4e66adc57c1db501c7de12',
//   redirect_uri: 'http://example.com/callback'
// });

app.listen(9000, function() {
  console.log('power level over 9000!!!!');
});