// Created by Orangeplumber on 14/12/17

var app=angular.module('app',[]);

app.controller('AppCtrl',['$scope','$http',function($scope,$http){

	var refresh=function(){
		$http.get('/complaintlist').then(function(response){
			console.log("Requested data received:");
			console.log(response.data);
			$scope.complaintlist=response.data;
		});
	};

	refresh();

	$scope.addComplaint=function(){
		console.log($scope.complaint);
		console.log($scope.complaint.problem);
		$http.get('/complaintlist').then(function(response){
			console.log(response);
			$scope.complaint={}
			refresh();
		});
	};

	$scope.delete=function(id){
		console.log(id);
		$http.delete('/complaintlist'+id).then(function(response){
			refresh();
		});
	};

	$scope.clear=function(){
		$scope.complaint={};
	};
}]);