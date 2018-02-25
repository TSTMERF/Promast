//start mean module
angular.module('contactModule',[])
//defining mean directive
.directive('contactDirective',function(){
    //return function
    return{
        restrict:'E',
        replace:true,
        templateUrl:'html/contact.html',
        controller: 'contactController'
    };
})

/*CONTROLLER*/
.controller('contactController', function($route,$window,$scope,$location,$anchorScroll,$http,$mdDialog, $interval){
 	
    $scope.currentNavItem='contact'; 
    //Contact section-------------------------------------------------------
	$scope.result = 'hidden'
  	$scope.resultMessage;
	//$scope.input; //formData is an object holding the name, email, subject, and message
	$scope.submitButtonDisabled = false;
	$scope.submitted = false; //used so that form errors are shown only after the form has been submitted
    $scope.submit = function(input) {
		//alert('Form submitted with' + JSON.stringify(input));
    	$scope.submitted = true;
    	$scope.submitButtonDisabled = true;
    	//if (contactform.$valid) {
        	$http({
           		method  : 'POST',
            	url     : 'contact.php',
            	data    : input,  //param method from jQuery
            	headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  //set the headers so angular passing info as form data (not request payload
        	}).success(function(data){
            	console.log(data);
            	if (data.success) { //success comes from the return json object
                	$scope.submitButtonDisabled = true;
                	$scope.resultMessage = data.message;
                	alert($scope.resultMessage);
                	//$scope.result='bg-success';
            	} else {
                	$scope.submitButtonDisabled = false;
                	$scope.resultMessage = data.message;
                	alert($scope.resultMessage);
                	//$scope.result='bg-danger';
            	}
        	});
    }
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
    $scope.ShowBtn=true;
    $scope.email = function(ev){
        $scope.ShowBtn=false;
        $mdDialog.show({
            controller: DialogController,
            templateUrl: 'html/email.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:true
        })
        .then(function(answer) {
            $window.scrollTo(0,0);
            $scope.ShowBtn=true;
            $scope.status = 'You said the information was "' + answer + '".';
          }, function() {
            $window.scrollTo(0,0);
              $scope.status = 'You cancelled the dialog.';
               $scope.ShowBtn=true;
          });
        };
        function DialogController($scope, $mdDialog) {
        
        $scope.answer = function(answer) {
           
            $mdDialog.hide(answer); 
        };
      }
      /*responsive menu display*/
     $scope.menuOpen = function(ev){
        $scope.ShowBtn=false;
        $mdDialog.show({
            controller: DialogController,
            templateUrl: 'html/menu_contact.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:true
        })
        .then(function(answer) {  
            $scope.ShowBtn=true;
            $scope.status = 'You said the information was "' + answer + '".';
            
          }, function() {
            $scope.ShowBtn=true;
            $scope.status = 'You cancelled the dialog.';
          });
        };

        function DialogController($scope, $mdDialog) {
        $scope.answer = function(answer) {
            $mdDialog.hide(answer); 
        }
        }; 
})