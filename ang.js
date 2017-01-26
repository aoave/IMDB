var myApp = angular.module('myApp', []);
  myApp.controller('myController', function($scope, $http){
    $http.get('http://www.omdbapi.com/?i=tt0092455&season=4&ref_=tt_eps_sn_4')
    .then(function(response) {
      console.log(response.data.Episodes)
      $scope.episodes = response.data.Episodes;
    });
  });
