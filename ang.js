var myApp = angular.module('myController', []);
  myApp.controller('', function($scope){
    $http.get('http://www.omdbapi.com/?i=tt0092455&season=4&ref_=tt_eps_sn_4')
    .success(function(response) {
      $scope.names = response.title;
    });
  });
