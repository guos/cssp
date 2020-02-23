/**
 * Alerts Controller
 */

app.controller('SpaceCtrl', [ '$scope', '$http', 'ngDialog', SpaceCtrl ]);

function SpaceCtrl($scope, $http, ngDialog) {

	$scope.treeOptions = {
		nodeChildren : "children",
		// dirSelectable : true,
		multiSelection : true,
		injectClasses : {
			ul : "a1",
			li : "a2",
			liSelected : "a7",
			iExpanded : "a3",
			iCollapsed : "a4",
			iLeaf : "a5",
			label : "a6",
			labelSelected : "a8"
		}
	}

	$scope.opts = {
		multiSelection : true,
		injectClasses : {
			"ul" : "c-ul",
			"li" : "c-li",
			"liSelected" : "c-liSelected",
			"iExpanded" : "c-iExpanded",
			"iCollapsed" : "c-iCollapsed",
			// "iLeaf": "c-iLeaf",
			"label" : "c-label",
			"labelSelected" : "c-labelSelected"
		}
	};
	// $scope.dataForTheTree =
	// [
	// { "name" : "Joe", "age" : "21", "children" : [
	// { "name" : "Smith", "age" : "42", "children" : [] },
	// { "name" : "Gary", "age" : "21", "children" : [
	// { "name" : "Jenifer", "age" : "23", "children" : [
	// { "name" : "Dani", "age" : "32", "children" : [] },
	// { "name" : "Max", "age" : "34", "children" : [] }
	// ]}
	// ]}
	// ]},
	// { "name" : "Albert", "age" : "33", "children" : [] },
	// { "name" : "Ron", "age" : "29", "children" : [] }
	// ];

	// -----------write other info
	$scope.loadTree = function(url,type) {
		$http.get(url).success(function(data) {
			console.dir(data);
			if(type=='M'){
				$scope.dataForTheMasterTree = data;
			}else{
				$scope.dataForTheSlaveTree = data;
			}
			
		});
	};

	
	$scope.selectedNodes = [];
	$scope.showSelected = function(node, selected) {
        console.dir("-------here----");
		console.dir(node.id + " " + selected);
		console.dir($scope.selectedNodes);
		$scope.selectedNode = node.id;
		ngDialog.open({
			width : '70%',
			template : 'pages/pageView.html',
			scope : $scope
		});
	};
	$scope.showSelectedNode = function(sel) {
		console.dir("selected----");
		console.dir(sel);
		
		$scope.selectedNode = sel;
		ngDialog.open({
			width : '70%',
			template : 'pages/pageView.html',
			scope : $scope
		});
	};
	
	//
	$scope.loadSpace=function(master,slave){
		//TODO: put the real data, master.server
		 
		$scope.loadTree('http://localhost:8080/ui/space','M');
		$scope.loadTree('http://localhost:8080/ui/space','S');
	}
}