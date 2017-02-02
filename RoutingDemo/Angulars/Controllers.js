
var angualarModule = angular.module("angualarModule", ['ngRoute']);

angualarModule.controller("indexController", function ($scope) {
    $scope.name = "Zisan";    
})

angualarModule.config(function ($routeProvider) {
    $routeProvider.
    when('/firstPage', {
        templateUrl: 'RouterDemo/First',
        controller: 'routeDemoFirstController'
    }).
    when('/secondPage', {
        templateUrl: 'RouterDemo/Second',
        controller: 'routeDemoSecondController'
    })
})

angualarModule.controller("routeDemoFirstController", function ($scope) {
    $scope.FirstName = "Safayat";
    $scope.LastName = "Zisan";
})

angualarModule.controller("routeDemoSecondController",function ($scope) {
    $scope.MobileNumber = "55";
    $scope.EmailID = "zisan_cse_mbstu@hotmail.com";
})


