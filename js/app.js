angular.module('app',[
	'ngMessages',
	'ngRoute',
	'ngMaterial',
	'ngAnimate', 
	'ngAria', 
	'ngSanitize',
	'homeModule',
	'aboutModule',
	'contactModule',
	'newModule',
	'new1Module',
	'new2Module',
	'new3Module',
	'new4Module',
	'new5Module',
	'mpModule',
	'mp1Module',
	'mp2Module',
	'mp3Module',
	'mp4Module'

])
//configurate the module
.config(function($httpProvider, $routeProvider, $mdThemingProvider, $provide){
	//configurate the http request
	$httpProvider.defaults.transformRequest= function(data){
		//return undefined
		if(data== undefined){
			return data;
		}
		//return teh object as text params
		return $.params(data);
	};
	//setting the content type as an url encoded
	$httpProvider.defaults.headers.post['Content-Type']='application/x-www-form-urlencoded; charset=UTF-8';
	//ng-route config
	//defining routes
	$routeProvider
	//module routes
	.when('/',{
		template:'<home-directive></home-directive>'
	})
	.when('/about/',{
		template:'<about-directive></about-directive>'
	})
	.when('/contact/',{
		template:'<contact-directive></contact-directive>'
	})
	.when('/new/',{
		template:'<new-directive></new-directive>'
	})
	.when('/new1/',{
		template:'<new1-directive></new1-directive>'
	})
	.when('/new2/',{
		template:'<new2-directive></new2-directive>'
	})
	.when('/new3/',{
		template:'<new3-directive></new3-directive>'
	})
	.when('/new4/',{
		template:'<new4-directive></new4-directive>'
	})
	.when('/new5/',{
		template:'<new5-directive></new5-directive>'
	})
	.when('/mp/',{
		template:'<mp-directive></mp-directive>'
	})
	.when('/mp1/',{
		template:'<mp1-directive></mp1-directive>'
	})
	.when('/mp2/',{
		template:'<mp2-directive></mp2-directive>'
	})
	.when('/mp3/',{
		template:'<mp3-directive></mp3-directive>'
	})
	.when('/mp4/',{
		template:'<mp4-directive></mp4-directive>'
	})
	.otherwise({
		template:'<home-directive></home-directive>'
	});
})
