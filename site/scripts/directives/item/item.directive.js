/**
 * Created by gferraro on 19/03/2017.
 */
(function(){
    angular.module('app')
        .directive('item',function(){
            return {
                restrict : 'E',
                transclude:{
                    itemTitle:'?itemTitle',
                    itemSubtitle:'?itemSubtitle',
                    itemContent:'?itemContent'
                },
                templateUrl:'scripts/directives/item/item.html',
                link:function($scope,elem,attr){
                    $scope.delay = attr.wowDelay || '0.1s';
                    $scope.animation = attr.animation || 'a2';
                    elem.replaceWith(elem.contents());
                }
            }
        })
})();