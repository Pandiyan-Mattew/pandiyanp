var app = angular.module("website", ["ngRoute"]);
app.config(function($routeProvider){
    $routeProvider
        .when("/", {
            templateUrl : "partials/home.html"
        })
        .when("/portfolio", {
            templateUrl : "partials/portfolio.html"
        })
        .when("/contact", {
            templateUrl : "partials/contactus.html"
        })
        .otherwise({
            redirectTo : "partials/home.html"
        });
});