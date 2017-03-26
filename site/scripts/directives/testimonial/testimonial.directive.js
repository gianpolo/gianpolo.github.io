/**
 * Created by gferraro on 23/03/2017.
 */
(function(){
    angular.module('app')
        .directive('testimonial',function(QuoteColors){
            return {
                restrict:'E',
                templateUrl:'scripts/directives/testimonial/testimonial.html',
                scope:{
                    avatarImage:'@',
                    avatarName:'@',
                    linkedinUrl:'@'
                },
                transclude: {
                    avatar:'?avatar',
                    name:'?name',
                    footer:'?footer',
                    content:'?content'
                },
                link:function($scope,elem){
                    elem.replaceWith(elem.contents());
                    $scope.quoteColor = QuoteColors.getRandomColor();
                }
            }
        })
})();