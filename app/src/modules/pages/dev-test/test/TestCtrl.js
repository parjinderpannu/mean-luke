'use strict';

angular.module('myApp').controller('TestCtrl', ['$scope', '$timeout', 'appHttp', 'UserModel',
 '$location', '$q', function($scope, $timeout, appHttp, UserModel, $location, $q) {
	
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

	// console.log("Calling syncFunc after this functions");
	// var testVar = sync(5);
	// console.log("Called syncFunc and testVar="+testVar);

	// function asyncFunc(var1, callback){
	// 	$timeout(function() {
	// 		console.log("async Finished");
	// 		callback();
	// 	}, 1000);
	// 	console.log("async Started");
	// }

	// asyncFunc(5, function(){
	// 	console.log("Inside callback");
	// })

	// console.log("Line after asyncFunc");

	// function asyncFuncPromise(var1){
	// 	var deferred = $q.defer();
	// 	$timeout(function() {
	// 		console.log("async promise finished");
	// 		deferred.resolve();
	// 	}, 1000);
	// 	console.log("async promise started");
	// 	return deferred.promise;
	// }

	// asyncFuncPromise(5)
	// .then(function() {
	// 	console.log("Promise done");
	// });

	// console.log("Line after promise");

	$scope.$on('myEvt', function(evt, params) {
		console.log("on myEvt");
	});

	$scope.$broadcast('myEvt', {});
	$timeout(function(){
		$scope.$broadcast('myEvt', {});
	}, 1000);

}]);