//naming module
angular.module('new5Module',[])
//defining directive
.directive('new5Directive',function(){
	//return of directive
	return{
		restrict:'E',
		replace:true,
		templateUrl:'html/newEquipment/new5.html',
		controller:'new5Controller'
	};
})

.controller('new5Controller', function($scope, $location,$window){
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