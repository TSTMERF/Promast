//naming module
angular.module('mp4Module',[])
//defining directive
.directive('mp4Directive',function(){
	//return of directive
	return{
		restrict:'E',
		replace:true,
		templateUrl:'html/mpEquipment/mp4.html',
		controller:'mp4Controller'
	};
})

.controller('mp4Controller', function($scope, $location,$window){ 
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