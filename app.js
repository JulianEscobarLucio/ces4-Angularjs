angular.module('myApp', ['ngRoute'])
 
.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/lista.html',
            controller: 'listaController',
        })
        .when('/lista', {
            templateUrl: 'views/lista.html',
            controller: 'listaController'
        })
        .when('/detalle/:id', {
            templateUrl: 'views/detalle.html',
            controller: 'detalleController'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);