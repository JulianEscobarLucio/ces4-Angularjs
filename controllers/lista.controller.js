angular
    .module('myApp')
    .controller('listaController',listaController);

    
function listaController($scope,$location, service){
   var vm = this;
   vm.titulo = 'Lista de mascotas';
   vm.listaMAscota = [];
   vm.listarMascota = listaMascota;
   vm.verDetalle = verDetalle;
   vm.location = $location;
   listaMascota();

   function listaMascota(){
       service.listar().then(function(data){
          vm.listaMAscota = data.response;
      });
    } 

    function verDetalle(id){;
        vm.location.path('/detalle/'+id)
    }
}
   