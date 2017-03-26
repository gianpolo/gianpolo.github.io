/**
 * Created by gferraro on 12/03/2017.
 */
(function(){
    angular.module('app')
        .directive('tooltip',function(){
            return {
                restrict:'AE',
                link:function(scope,elem){
                    //$('.tooltipped').tooltip();
                    $(elem).tooltip({delay: 50});
                }
            }
        })
})();