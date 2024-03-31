app.controller('bcardboardController', ['$scope', '$location',
  function($scope, $location) {
    $scope.books = [{'title': 'test1'}, {'title': 'test2'}]
    $scope.url = $location.path()
  }]);