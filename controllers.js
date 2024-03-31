app.controller('bcardboardController', ['$scope', '$location',
  function($scope, $location) {
    $scope.books = [{'title': 'book1'}, {'title': 'book2'}, {'title': 'book3'}, {'title': 'book4'}]
    $scope.url = $location.path()
  }]);