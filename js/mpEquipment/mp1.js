//naming module
angular.module('mp1Module',[])
//defining directive
.directive('mp1Directive',function(){
	//return of directive
	return{
		restrict:'E',
		replace:true,
		templateUrl:'html/mpEquipment/mp1.html',
		controller:'mp1Controller'
	};
})

.controller('mp1Controller', function($scope, $location,$window){ 
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