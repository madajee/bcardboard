app.controller('bcardboardController', ['$scope', '$location',
  function($scope, $location) {
    $scope.products = {'title': 'test1'}
    $scope.url = $location.path()
  }]);