angular
    .module('myApp')
    .controller('detalleController',detalleController);

    
function detalleController($scope,$location,$routeParams, service){
   var vm = this;
   vm.titulo = 'Detalle de mascotas';
   vm.mascota = '';
   vm.location = $location;
   vm.regresar = regresar;
   vm.id = $routeParams.id;
   consultarMascota();


   function consultarMascota(){
       service.consultarMascota(vm.id).then(function(data){
          vm.mascota = data.response;
      });
    } 

    function regresar(){
        vm.location.path('/lista');
    }
}
   