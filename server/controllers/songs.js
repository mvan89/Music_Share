var mongoose = require('mongoose');
var tracks = mongoose.model("tracks");
module.exports = (function() {
  return {
    addsongs: function(req, res){
    	// console.log("songs.js: this is the req.body",req.body);
    	var new_song = new tracks({tracks: req.body});
    	new_song.save(function(err, inputed_song){
    		if(err){
    			console.log("error saving song");
    		} else {
    			res.json(inputed_song);
    		}
    	})
    },

    index: function(req,res){
    	tracks.find({}, function(err, results){
    		if(err){
    			console.log("error finding tracks");
    		} else{
    			res.json(results)
    		}
    	})
    },

    destroy: function (req,res){
    	tracks.remove({_id: req.params.id}, function (err, data){
    		if(err){
    			console.log('error deleting name');
    		} else {
    			res.json(data);
    		}
    	})
    },

  }
})();