myApp.controller('tracksController', function ($scope, musicFactory){
	$scope.tracks = [];
	$scope.songs = [];
	
	$scope.searchSong = function(){
		musicFactory.searchSong($scope.newtrack, function (data){
			$scope.tracks = data;
			console.log(data);
		})
	};

	$scope.addSong = function(x){
		musicFactory.addSong(x, function (data){
			$scope.songs = data;
		})
	};

	$scope.deleteSong = function(x){
		console.log("song name", x)
		musicFactory.deleteSong(x, function(data){
			$scope.songs = data;
		});
	}

	musicFactory.index(function (data){
		$scope.songs = data;
		console.log($scope.songs);
	});
});