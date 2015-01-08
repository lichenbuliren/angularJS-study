/**
 * Created by heaven on 2015/1/7.
 * AngularJS controller
 */

function personController($scope){
    $scope.firstName = 'LiChen';
    $scope.lastName = 'Heaven';
    $scope.fullName = function(){
        return $scope.firstName + ' ' + $scope.lastName;
    }
}

