angular
    .module('myApp')
    .directive("detalle", function() {
        return {
            template : '<div class="content-info" >'
            +'<li><span class="text-bold">Id :</span> {{vm.mascota.id}}</li>'
            +'<li><span class="text-bold">Nombre :</span>  {{vm.mascota.nombre}}</li>'
            +'<li><span class="text-bold">Edad :</span>  {{vm.mascota.edad}}</li>'
            +'<li><span class="text-bold">Tipo :</span>  {{vm.mascota.tipo}}</li>'
            +'<li><span class="text-bold">Sexo :</span>  {{vm.mascota.sexo}}</li>'
            +'<li><span class="text-bold">Edad :</span>  {{vm.mascota.edad}}</li>'  
            +'<li><span class="text-bold">Valor :</span>  {{vm.mascota.valor|currency}}</li>' 
            +'<br/>'               
            +'<button ng-click="vm.regresar()" class="btn btn-info">Regresar</button>'
        +'</div>'
        };
    });      

 