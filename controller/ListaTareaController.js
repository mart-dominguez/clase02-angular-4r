angular.module('app01').controller("ListaTareaController",
	['$scope','$location',function($scope,$location){
		$scope.tituloLista = "Lista de tareas";		
		$scope.editarTarea = function(indice){
			$location.path("/tarea/"+indice);
		};

		// funcion que guarda una tarea
		$scope.nuevaTarea = function(){
			$location.path("/tarea");
		};

		// funcion que borra una tarea
		$scope.borrarTarea = function(filaBorrar){
            $scope.listaTareas.splice(filaBorrar,1);
		};		
	}]
);