/**
 * Created by heaven on 2015/1/7.
 * AngularJS Controller: costController
 * 计算总价
 */

function costController($scope){
    $scope.quantity = 5;
    $scope.price = 100;
    $scope.total = function () {
        return $scope.quantity * $scope.price;
    }
}
