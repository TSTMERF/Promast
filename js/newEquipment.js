//naming module
angular.module('newModule',[])
//defining directive
.directive('newDirective',function(){
	//return of directive
	return{
		restrict:'E',
		replace:true,
		templateUrl:'html/newEquipment.html',
		controller:'newController'
	};
})
.controller('newController', function($scope, $location,$window){
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
	$scope.new1=function(){
		$location.path('/new1/');
		$window.scrollTo(0,0);
	}
	$scope.new2=function(){
		$location.path('/new2/');
		$window.scrollTo(0,0);
	}
	$scope.new3=function(){
		$location.path('/new3/');
		$window.scrollTo(0,0);
	}
	$scope.new4=function(){
		$location.path('/new4/');
		$window.scrollTo(0,0);
	}
	$scope.new5=function(){
		$location.path('/new5/');
		$window.scrollTo(0,0);
	}
	$scope.mp=function(){
		$location.path('/mp/');
		$window.scrollTo(0,0);
	}
})