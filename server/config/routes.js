var tracks = require('./../controllers/songs.js');
  module.exports = function(app) {
  	app.post('/addsongs', function (req, res){
  		console.log("route testing");
  		tracks.addsongs(req, res);
  	}),

  	app.get('/addsongs', function (req,res){
  		console.log("index of songs");
  		tracks.index(req,res);
  	});

  	app.delete('/songs/:id', function(req,res){
  		console.log('delete in routes');
  		tracks.destroy(req,res);
  	})
  };