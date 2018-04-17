angular
    .module('myApp')
    .service('service',service)

    service.$inject = ['$http','$q'];
	function service($http,$q){
        var self = this;
        var ipserver = 'https://mascotas-592ba.firebaseio.com'; 
        self.listarMascotaMock = listarMascotaMock;
        self.listar = listar;
        self.consultarMascotaMock = consultarMascotaMock; 
        self.consultarMascota = consultarMascota;

        function consultarMascotaMock(){
            var promesa = $q.defer();
            data = {
                'id':'1',
                'nombre':'dog',
                'tipo':'perro',
                'sexo':'M',
                'edad':'10 meses',
                'valor': '50'
            };
            promesa.resolve({
                response:data
            });
            return promesa.promise;
        }

        function listarMascotaMock(){
            var promesa = $q.defer();
            data = [{
                'id':'1',
                'nombre':'dog',
                'tipo':'perro',
                'sexo':'M',
                'edad':'10 meses',
                'valor': '50' 
            },{
                'id':'2',
                'nombre':'cat',
                'tipo':'gato',
                'sexo':'M',
                'edad':'10 meses',
                'valor': '20' 
            },{
                'id':'3',
                'nombre':'bunny',
                'tipo':'conejo',
                'sexo':'M',
                'edad':'15 meses',
                'valor': '10' 
            },{
                'id':'4',
                'nombre':'beethoven',
                'tipo':'perro',
                'sexo':'M',
                'edad':'10 meses',
                'valor': '50' 
            }];
            promesa.resolve({
                response:data
            });
            return promesa.promise;
        }    
        
        function listar(){
            var promesa = $q.defer();
            $http.get(ipserver+'/mascotas.json')
            .success(function(data){
                promesa.resolve({
                    response:data
                });
            })
            .error(function(err){
                promesa.resolve({
                    response:err
                });
            })
            return promesa.promise;
        }

        function consultarMascota(id){
            var promesa = $q.defer();
            $http.get(ipserver+'/mascotas/'+id+'.json')
            .success(function(data){
                promesa.resolve({
                    response:data
                });
            })
            .error(function(err){
                promesa.resolve({
                    response:err
                });
            })
            return promesa.promise;
        }

    } 