angular.module('demoApp', []).controller('billCtrl', function($scope) {
  $scope.addCustomer = function(customerInfo) {
    $scope.status = customerInfo.name + customerInfo.email;
  };
  $scope.status = 'All Set';
});
