//naming module
angular.module('new4Module',[])
//defining directive
.directive('new4Directive',function(){
	//return of directive
	return{
		restrict:'E',
		replace:true,
		templateUrl:'html/newEquipment/new4.html',
		controller:'new4Controller'
	};
})

.controller('new4Controller', function($scope, $location,$window){
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
})