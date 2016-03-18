myApp.factory('musicFactory', function ($http){
	var factory = {};
	var music = [];
	var tracks = [];

	factory.searchSong = function(data, callback){
		console.log("getting data");
		music = [];
		SC.initialize({
  		client_id: '2610bdc20d4e66adc57c1db501c7de12',
  		redirect_uri: 'https://soundcloud.com/connect'
	});

		SC.get('/tracks',  {
  		q: data.track, 

			}).then(function(tracks) {
			music.push(tracks);
			callback(music);

			console.log(data.track);
	});
	};

	factory.addSong = function (x, callback){
		console.log(x);
		$http.post('/addsongs', x).success(function(data){
			tracks.push(data);
			callback(tracks);
		})
	}		

	factory.deleteSong = function (x, callback){
		console.log(x,"factory delete")
		$http.delete('/songs/'+ x._id).success(function(data){
		var index = tracks.indexOf(x);
		tracks.splice(index, 1);
		callback(tracks);
		})
	}


	factory.index = function(callback){
		$http.get('/addsongs').success(function(data){
			tracks = data;
			callback(tracks);
		})
	}

	return factory;

});