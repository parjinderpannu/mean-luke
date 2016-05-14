'use strict';

angular.module('myApp').controller('TestCtrl', ['$scope', '$timeout', 'appHttp', 'UserModel', '$location', function($scope, $timeout, appHttp, UserModel, $location) {
	
	$scope.user =UserModel.load();
	$scope.var="Changing TestCtrl";
	
	$scope.swipeIt =function(evt, direction, params) {
		console.log('swipe: '+direction);
	};
	
	$scope.tapIt =function(evt, params) {
		console.log('tap');
	};

	function sync(var1){
		console.log("Inside syncFunc");
		return var1;
	}

	console.log("Calling syncFunc after this functions");
	var testVar = sync(5);
	console.log("Called syncFunc and testVar="+testVar);
}]);