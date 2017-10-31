angular.module('spaApp')
  .controller('InicioCtrl', function ($scope) {
    $scope.message = "Inicio.";
  });
  
angular.module('spaApp')
  .controller('trianguloCtrl', function ($scope) {
    $scope.message = "Triangulo.";
    $scope.triA = undefined;
    $scope.triB = undefined;
    $scope.resultado2 = undefined;
    $scope.hipotenusa = function () {
          $scope.resultado2 = Math.sqrt(Math.pow($scope.triA, 2) + Math.pow($scope.triB, 2));
      };
  });

angular.module('spaApp')
  .controller('polinomioCtrl', function ($scope) {
    $scope.message = "Polinomio.";
    $scope.polA = undefined;
    $scope.polB = undefined;
    $scope.polC = undefined;
    $scope.resultado = undefined;
    $scope.calcular = function () {
        var sol1 = (-$scope.polB + Math.sqrt(Math.pow($scope.polB, 2) - 4*$scope.polA*$scope.polC))/(2*$scope.polA);
        var sol2 = (-$scope.polB - Math.sqrt(Math.pow($scope.polB, 2) - 4*$scope.polA*$scope.polC))/(2*$scope.polA);
        $scope.resultado = 'x1 = ' + sol1 + ', x2 = ' + sol2;
    };

  });