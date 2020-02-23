/**
 * space Controller
 */

app.controller('SpaceCtrl', [ '$scope', '$http', 'ngDialog', SpaceCtrl ]);

function SpaceCtrl($scope, $http, ngDialog) {
// for left tree
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
// for target server tree
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

	//store the selected node on master
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
	//-------no use 
	$scope.showSelectedNode = function(sel) {
		console.dir("selected----");
		console.dir(sel);
		//------TODO: in page-ctrl.js you can show the page content
		$scope.selectedNode = sel;
		ngDialog.open({
			width : '70%',
			template : 'pages/pageView.html',
			scope : $scope
		});
	};
	
	//-------follow function is real communicate with backend,need write some code.
	$scope.loadSpace=function(master,slave){
		//TODO: put the real data, master.server
		console.dir(master.server);
		console.dir(slave.server);
		//also username,password, you can get use master.xxx, then send to backend
		$scope.loadTree('http://localhost:8080/ui/space','M');
		$scope.loadTree('http://localhost:8080/ui/space','S');
	}
	//find out the changes
	$scope.compareChage=function(){
		console.dir($scope.selectedNodes);
		//TODO: you can send the selectedNodes info to the backend 
	}
	$scope.startSync=function(sync){
		//---
		console.dir(sync.method);
		console.dir(sync.daily);//if daily have value,then we need consider store the value in db or somewhere then batch job
		console.dir(sync.time);
		console.dir($scope.selectedNodes);
		//TODO: call backend, if selectedNodes is null, then means find all the changes 
	}
}