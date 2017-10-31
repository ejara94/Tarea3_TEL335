angular.module('spaApp', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider //add resolve function is pending.
        .when('/', {
            templateUrl: './inicio.html',
            controller: 'InicioCtrl',

        })
        .when('/polinomio', {
            templateUrl: './polinomio.html',
            controller: 'polinomioCtrl',
        })
        .when('/triangulo', {
            templateUrl: './triangulo.html',
            controller: 'trianguloCtrl',
        })
        .otherwise({
            redirectTo: '/'
        });
}])