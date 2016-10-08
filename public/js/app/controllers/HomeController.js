module.exports = function ($rootScope, $log, $window, $scope, $http, $timeout) {
    function init(){
        $rootScope.open= true;
        $timeout(function(){
            $rootScope.open= false;
        },100);
        $http.get('/api/categories').then(function(results){
            if(results.status == 200){
                $scope.categories = results.data.categories;
                $scope.selectedCategory = $scope.categories[0];
            }
        });
    }
    $scope.updatePanel = function(category){
        $scope.selectedCategory = category;
    }

    init();
};
