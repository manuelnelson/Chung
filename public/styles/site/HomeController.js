module.exports = function ($rootScope, $log, $window, $scope, $http, $timeout) {
    function init(){
        $rootScope.open= true;
        $rootScope.rightOpen = false;
        $timeout(function(){
            $rootScope.open= false;
        },100);
        $http.get('/api/categories').then(function(results){
            if(results.status == 200){
                $scope.categories = results.data.categories;
                $scope.highlightedCategory = $scope.categories[0];
            }
        });
    }
    $scope.updatePanel = function(category){
        $scope.highlightedCategory = category;
    }
    $scope.showCategory = function(category){
        $scope.selectedCategory = category;
        console.log(category);
        $http.get('/api/galleries?categoryId=' + category._id).then(function(results){
            console.log(results);
            
        })
        $rootScope.rightOpen = true;
    }
    init();
};
