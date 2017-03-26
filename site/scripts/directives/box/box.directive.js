/**
 * Created by gferraro on 20/03/2017.
 */
(function(){
    angular.module('app')
        .directive('box',function(){
            return {
                restrict:'EA',
                templateUrl: 'scripts/directives/box/box.html',
                transclude:true,

                link:function($scope,elem,attr){


                    var className = attr.class || "";
                    elem.contents().addClass(className);

                }
            };

        })
})();