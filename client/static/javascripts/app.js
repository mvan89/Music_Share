var myApp = angular.module('myApp', ['ngRoute']);

myApp.filter('scEmbedUrl', function($sce) {
	return function(data){
  		     return $sce.trustAsResourceUrl("http://w.soundcloud.com/player/?url="+data.uri+"&show_artwork=false&liking=false&sharing=false&auto_play=false")
			}
	});

myApp.config(function ($routeProvider){
	$routeProvider
	.when('/', {templateUrl: 'static/partials/playlist.html'})
	.when('/playlist', {templateUrl: 'static/partials/playlist.html'})
	.when('/search', {templateUrl: 'static/partials/search.html'})
	.otherwise({redirectTo: '/'});
});