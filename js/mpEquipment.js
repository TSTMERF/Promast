//naming module
angular.module('mpModule',[])
//defining directive
.directive('mpDirective',function(){
	//return of directive
	return{
		restrict:'E',
		replace:true,
		templateUrl:'html/mpEquipment.html',
		controller:'mpController'
	};
})
.controller('mpController', function($scope, $location,$window){
	$scope.currentNavItem='about'; 
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
	$scope.mp1=function(){
		$location.path('/mp1/');
		$window.scrollTo(0,0);
	}
	$scope.mp2=function(){
		$location.path('/mp2/');
		$window.scrollTo(0,0);
	}
	$scope.mp3=function(){
		$location.path('/mp3/');
		$window.scrollTo(0,0);
	}
	$scope.mp4=function(){
		$location.path('/mp4/');
		$window.scrollTo(0,0);
	}

})