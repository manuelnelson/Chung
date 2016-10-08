module.exports = function ($rootScope, $log, $window, $scope, $http,$timeout) {
    function init(){
        $timeout(function(){
            $rootScope.open= true;
        },100);
        $http.get('/api/contacts').then(function(results){
            if(results.status == 200){
                $scope.contact = results.data.contacts[0];

            }
        });


    }
    init();
};
