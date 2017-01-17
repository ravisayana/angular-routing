var app= angular.module("myApp",['ngRoute'])

app.config(["$routeProvider","$locationProvider", function($routeProvider, $locationProvider){

    $locationProvider.hashPrefix("");
    $routeProvider
      .when("/home", {
        templateUrl: "pages/home.html",
        controller: "HomeController",
        caseInsensitiveMatch: true
      })
      .when("/About", {
        templateUrl: "pages/about.html",
        controller: "AboutController",
        caseInsensitiveMatch: true
      })
      .when("/Contact", {
        templateUrl: "pages/contact.html",
        controller: "ContactController",
        caseInsensitiveMatch: true
      })
      .otherwise("/")
}])

app.controller("myController",["$scope",function($scope){
  $scope.name =" hello";
}])

app.controller("HomeController",["$scope",function($scope){
  $scope.content =" This is Home Page";
}])

app.controller("AboutController",["$scope",function($scope){
  $scope.content =" This is About Page";
}])
app.controller("ContactController",["$scope",function($scope){
  $scope.content =" This is Contact Page";
}])
