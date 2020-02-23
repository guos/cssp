app.controller('pageCtrl', [ '$scope','$http', PageCtrl ]);

function PageCtrl($scope,$http) {
	console.dir("-----come to page ctrol-------");
	console.dir($scope.selectedNode);

	
	console.dir("----end----");
	   $http.get("http://localhost:8080/ui/page/"+$scope.selectedNode).success(function(data){
		    console.dir(data);
	        $scope.page = data;
	    });
}