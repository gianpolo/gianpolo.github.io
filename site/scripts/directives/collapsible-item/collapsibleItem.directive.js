/**
 * Created by gferraro on 19/03/2017.
 */
(function(){
    angular.module('app')
        .directive('collapsibleItem',function(){
            return {
                restrict : 'E',
                transclude:{
                    collapsibleItemTitle:'?collapsibleItemTitle',
                    collapsibleItemSubtitle:'?collapsibleItemSubtitle',
                    collapsibleItemHeader:'?collapsibleItemHeader',
                    collapsibleItemContent:'?collapsibleItemContent'
                },
                scope:{},
                templateUrl:'site/scripts/directives/collapsible-item/collapsible-item.html',
                link:function($scope,elem,attr){
                    $scope.delay = attr.wowDelay || '0.1s';
                    $scope.animation = attr.animation || 'a2';
                    $scope.open = false;
                    elem.replaceWith(elem.contents());
                    $scope.toggle = function(){
                        $scope.open = !$scope.open;
                    }

                }
            }
        })
})();