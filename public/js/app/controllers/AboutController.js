module.exports = function ($rootScope, $log, $window, $scope, $http,$timeout) {
    function init(){
        $timeout(function(){
            $rootScope.open= true;
        },100);
        $http.get('/api/abouts').then(function(results){
            if(results.status == 200){
                $scope.about = results.data.abouts[0];
                
            }
        });


    }
    init();
};
