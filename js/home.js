(function(){
//naming module
angular.module('homeModule',[])
//defining mean directive
.directive('homeDirective', function(){
	return{
		restrict:'E',
		replace:true,
		templateUrl:'html/home.html',
		controller:'homeController'
	};
})
//defining loading directive
.directive('loadingDirective', function($http, $compile, $route, $templateCache){
	//local advance progress
	var progress={progress:0,percent:0};
	//load the templates 
	function loadTemplate(rest, callback, total){
		if(rest.lenght){
			progress.progress+=1;
			progress.percent=(100*(progress.progress/total)).toFixed(0);
			var template=rest.pop();
			$http.get(template)
			.success(function(content){
				$templateCache.put(template,content);
				loadTemplate(rest,callback,total);
			})
		}
		else{
			callback();
		}
	};
	//return of directive
	return{
		restrict:'E',
		replace:true,
		templateUrl:'html/loading.html',
		link: function($scope, $element, $attrs){
			$sope.session={};
			var templates=[
				'html/home.html',
				'html/about.html',
				'html/contact.html',
				'html/newEquipment.html',
				'html/mpEquipment.html',
				'html/newEquipment/new1.html',
				'html/newEquipment/new2.html',
				'html/newEquipment/new3.html',
				'html/newEquipment/new4.html',
				'html/newEquipment/new5.html',
				'html/gallery/flushing1.html',
				'html/gallery/flushing2.html',
				'html/gallery/flushing3.html',
				'html/gallery/spiral1.html',
				'html/gallery/spiral2.html',
				'html/gallery/spiral3.html',
				'html/gallery/spiral4.html'
			];
			loadTemplate(templates,function(){
				//clear the element
				$element.html('');
				//load template
				$element.append($compile('<body-directive flex></body-directive')($scope));
				//reload the route
				$route.reload();
			}, templates.lenght);
		}, controller:function($scope){
			//save the progress
			$scope.progress=progress;
		}
	};

})
//defining scroll directive
.directive('scroll', function($window){
	return function(scope,element, attrs){
		/* header DOM element with md-page-header attribute*/
    var header   		= document.querySelector('[md-page-header]');
    /* Store header dimensions to initialize header styling */
    var baseDimensions 	= header.getBoundingClientRect();
    /* DOM element with md-header-title attribute (title in toolbar) */
    var title          	= angular.element(document.querySelector('[md-header-title]'));
		/*height of the toolbar by default*/
		 var legacyToolbarH = 64;

		/*defining function toolStyle for changes*/
		function toolStyle(dim){
			if(ratio(dim)<1){
        console.log('ratio<1='+ratio(dim));
				title.css('color',' #CFB091 ');
        element.css('background-color','#2A2928');
				
			}
			if(ratio(dim)==1){
        console.log('ratio'+ratio(dim));
				title.css('color','black');
        element.css('background-color','transparent');
			
			}
		}
    toolStyle(baseDimensions);
		/*defining the radio function*/
		function ratio(dim) {
        var r=0;
         console.log('Im in ratio');
         console.log(dim);
        if(dim.height==0){
          r=r-5;
          if(r<0) return 0;
          if(r>1) return 1;  
          if(dim.bottom==dim.height) return 1;
          console.log('r:'+r);
           console.log('Im in =0');
        }
        
        
        if(dim.height!=0){
        console.log('Im in !=0');
        r = (dim.bottom+baseDimensions.top)/dim.height;
        console.log('bottom:'+dim.bottom);
        console.log('top:'+baseDimensions.top);
        console.log('height:'+dim.height);
        console.log('r:'+r);
        if(r<0) return 0;
        if(r>1) return 1;
      } 
      console.log('number:'+Number(r.toString().match(/^\d+(?:\.\d{0,2})?/)));
      return Number(r.toString().match(/^\d+(?:\.\d{0,2})?/));

    }
		toolStyle(baseDimensions);
		/*scroll event listener */
		angular.element($window).bind('scroll',function(){
      baseDimensions  = header.getBoundingClientRect();
			var dimensions 	= header.getBoundingClientRect();
			toolStyle(dimensions);
			scope.$apply();
		});
		/*resize event listener
		angular.element($window).bind('rezise', function(){
			baseDimensions	= header.getBoundingClientRect();
      console.log(baseDimensions);
			var dimensions 	= header.getBoundingClientRect();
			toolStyle(dimensions);
			scope.$apply();
		});*/
	};
})
//defining controller
.controller('homeController', function($scope, $window,$location,$mdDialog){
	$scope.currentNavItem='home'; 
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
	/*Flushing Machine*/
	/*Flushing 1 event*/
	$scope.flushing1 = function(ev){
        $mdDialog.show({
            controller: DialogController,
            templateUrl: 'html/gallery/flushing1.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:true
        })
        .then(function(answer) {
        	$window.scrollTo(2000,2200);
            $scope.status = 'You said the information was "' + answer + '".';
          }, function() {
          	$window.scrollTo(2000,2200);
              $scope.status = 'You cancelled the dialog.';
          });
        };

        function DialogController($scope, $mdDialog) {

        $scope.answer = function(answer) {

            $mdDialog.hide(answer); 
        };
      } 
      /*Flushing2 event*/
      $scope.flushing2 = function(ev){
        $mdDialog.show({
            controller: DialogController,
            templateUrl: 'html/gallery/flushing2.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:true
        })
        .then(function(answer) {
        	$window.scrollTo(2000,2200);
            $scope.status = 'You said the information was "' + answer + '".';
          }, function() {
          	$window.scrollTo(2000,2200);
              $scope.status = 'You cancelled the dialog.';
          });
        };

        function DialogController($scope, $mdDialog) {

        $scope.answer = function(answer) {

            $mdDialog.hide(answer); 
        };
      } 
      /*Flushing3 event*/
      $scope.flushing3 = function(ev){
        $mdDialog.show({
            controller: DialogController,
            templateUrl: 'html/gallery/flushing3.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:true
        })
        .then(function(answer) {
        	$window.scrollTo(2000,2200);
            $scope.status = 'You said the information was "' + answer + '".';
          }, function() {
          	$window.scrollTo(2000,2200);
              $scope.status = 'You cancelled the dialog.';
          });
        };

        function DialogController($scope, $mdDialog) {

        $scope.answer = function(answer) {

            $mdDialog.hide(answer); 
        };
      } 
      /*Spiral Freezer*/
      /*Spiral 1 event*/
      $scope.spiral1 = function(ev){
        $mdDialog.show({
            controller: DialogController,
            templateUrl: 'html/gallery/spiral1.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:true
        })
        .then(function(answer) {
        	$window.scrollTo(2000,2200);
            $scope.status = 'You said the information was "' + answer + '".';
          }, function() {
          	$window.scrollTo(2000,2200);
              $scope.status = 'You cancelled the dialog.';
          });
        };

        function DialogController($scope, $mdDialog) {

        $scope.answer = function(answer) {

            $mdDialog.hide(answer); 
        };
      } 
      /*Spiral 2 event*/
      $scope.spiral2 = function(ev){
        $mdDialog.show({
            controller: DialogController,
            templateUrl: 'html/gallery/spiral2.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:true
        })
        .then(function(answer) {
        	$window.scrollTo(2000,2200);
            $scope.status = 'You said the information was "' + answer + '".';
          }, function() {
          	$window.scrollTo(2000,2200);
              $scope.status = 'You cancelled the dialog.';
          });
        };

        function DialogController($scope, $mdDialog) {

        $scope.answer = function(answer) {

            $mdDialog.hide(answer); 
        };
      } 
      /*Spiral 3 event*/
      $scope.spiral3 = function(ev){
        $mdDialog.show({
            controller: DialogController,
            templateUrl: 'html/gallery/spiral3.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:true
        })
        .then(function(answer) {
        	$window.scrollTo(2000,2200);
            $scope.status = 'You said the information was "' + answer + '".';
          }, function() {
          	$window.scrollTo(2000,2200);
              $scope.status = 'You cancelled the dialog.';
          });
        };

        function DialogController($scope, $mdDialog) {

        $scope.answer = function(answer) {

            $mdDialog.hide(answer); 
        };
      } 
      /*Spiral 4  event*/
      $scope.spiral4 = function(ev){
        $mdDialog.show({
            controller: DialogController,
            templateUrl: 'html/gallery/spiral4.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:true
        })
        .then(function(answer) {
        	$window.scrollTo(2000,2200);
            $scope.status = 'You said the information was "' + answer + '".';
          }, function() {
          	$window.scrollTo(2000,2200);
              $scope.status = 'You cancelled the dialog.';
          });
        };

        function DialogController($scope, $mdDialog) {

        $scope.answer = function(answer) {

            $mdDialog.hide(answer); 
        };
      } 
})
})();