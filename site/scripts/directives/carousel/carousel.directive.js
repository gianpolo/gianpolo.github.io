/**
 * Created by gferraro on 20/03/2017.
 */
(function(){

    angular.module('app')
        .directive('carousel',function(){
            return {
              restrict: 'E',
              templateUrl:'site/scripts/directives/carousel/carousel.html',
                transclude:true,
                link:function($scope,elem){
                    $('.carousel.carousel-slider').carousel({fullWidth: true, height:'450px'});
                    $scope.next = function() {
                        $('.carousel').carousel('next');
                    }
                }
            };
        });

})();