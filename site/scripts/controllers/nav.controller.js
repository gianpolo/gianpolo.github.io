/**
 * Created by gferraro on 26/03/2017.
 */
(function(){
    angular.module('app')
        .controller('NavCtrl',function($scope,$location){
            $scope.isActive = function(viewLocation){

                return $location.path() === viewLocation;
            }
        })
})();