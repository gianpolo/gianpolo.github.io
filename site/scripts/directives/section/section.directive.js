/**
 * Created by gferraro on 19/03/2017.
 */
(function(){
    angular.module('app')
        .directive('section',function(){
            return {
                restrict : 'E',
                transclude:{
                    sectionIcon:'?sectionIcon',
                    sectionContent:'?sectionContent',
                    sectionTitle:'?sectionTitle'
                },
                templateUrl:'site/scripts/directives/section/section.html'
            }
        })
})();