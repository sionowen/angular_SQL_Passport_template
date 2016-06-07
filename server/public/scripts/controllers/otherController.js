myApp.controller('OtherController', ['$scope', '$http', '$window', '$location', function($scope, $http, $window, $location) {
  console.log('Other controller running');
  $scope.message = "Other Controller!";
}]);
