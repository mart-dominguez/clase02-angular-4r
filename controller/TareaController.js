angular.module('app01').controller("TareaController",
	['$scope','$routeParams',function($scope,$routeParams){
		$scope.tituloAlta = "Alta de tareas";
		console.log($routeParams.tareaId);
		
		if($routeParams.tareaId>=0){
		/*	$scope.tareaActual = $scope.listaTareas.find(function(unaTarea){
				console.log(unaTarea.id);
				console.log($routeParams.taereaId);				
				return unaTarea.id === $routeParams.taereaId;
			});*/
			$scope.tareaActual = $scope.listaTareas[$routeParams.tareaId];
		} else{
			// definimos un objeto que almacena la tarea
			$scope.tareaActual = {
				fechaFin:new Date()
			};
		}

		$scope.agregarTarea = function(){
			console.log($scope.tareaActual);
			$scope.listaTareas.push($scope.tareaActual);
			console.log($scope.listaTareas);
			//cada vez que se agrega una tarea borramos la variable tareaactual
			$scope.tareaActual={};
		};

		// funcion que guarda una tarea
		$scope.nuevaTarea = function(){
			console.log($scope.tareaActual);		
			$scope.tareaActual = {
				fechaFin:new Date()
			};
			console.log($scope.tareaActual);			
		};

		// funcion que borra una tarea
		$scope.borrarTarea = function(filaBorrar){
            $scope.listaTareas.splice(filaBorrar,1);
		};
		
	}]
);