// ROUTES
app.config(function ($routeProvider) {
   
    $routeProvider
    
    .when('/', {
        templateUrl: 'pages/home.html',
        controller: 'bcardboardController'
    })
    .when('/admin/add-product', {
        templateUrl: 'pages/admin/add-product.html',
        controller: 'bcardboardController'
    })
    .
    otherwise('/');
    
});