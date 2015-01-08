/**
 * Created by heaven on 2015/1/7.
 * AngularJS 异步读取服务器数据
 */
function customersController($scope,$http){
    $http.get('customers.json')
        .success(function(response){
            $scope.customers = response;
        });
}
