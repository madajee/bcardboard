// ROUTES
app.config(function ($routeProvider) {
   
    $routeProvider
    
    .when('/', {
        templateUrl: 'pages/home.html',
        controller: 'bcardboardController'
    })
    .when('/admin/add-book', {
        templateUrl: 'pages/admin/add-book.html',
        controller: 'bcardboardController'
    })
    .
    otherwise('/');
    
});