//naming module
angular.module('mp3Module',[])
//defining directive
.directive('mp3Directive',function(){
	//return of directive
	return{
		restrict:'E',
		replace:true,
		templateUrl:'html/mpEquipment/mp3.html',
		controller:'mp3Controller'
	};
})

.controller('mp3Controller', function($scope, $location,$window){ 
	//links to others pages
	$scope.about= function(){
		$location.path('/about/');
		$window.scrollTo(0,0);
	}
	$scope.contact= function(){

		$location.path('/contact/');
		$window.scrollTo(0,0);
	}
	$scope.home=function(){
		$location.path('/');
		$window.scrollTo(0,0);
	}
	$scope.new=function(){
		$location.path('/new/');
		$window.scrollTo(0,0);
	}
	$scope.mp=function(){
		$location.path('/mp/');
		$window.scrollTo(0,0);
	}

});