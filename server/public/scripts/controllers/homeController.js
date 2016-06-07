myApp.controller('HomeController', ['$scope', '$http', '$window', '$location', function($scope, $http, $window, $location) {
  console.log('home controller running');
  $scope.message = "Home Controller!";

  $scope.user_id= {};
  getUser();

  function getUser() {
  $http.get('/router').then(function(response) {
        if(response.data.username) {
            $scope.userName = response.data.username;
            $scope.user_id = response.data._id;
            console.log('User Data: ', $scope.userName);
        } else {
            $location.path("/login");
        }
    });
  }


  $scope.logout = function() {
    $http.get('/router/logout').then(function(response) {
      console.log('logged out');
      $location.path("/login");
    });
  };



}]);
