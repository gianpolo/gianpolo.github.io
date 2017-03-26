/**
 * Created by gferraro on 23/03/2017.
 */
(function(){
    angular.module('app')
        .factory('QuoteColors',function(){
            var colors = ['#e74c3c','#673ab7','#e67e22','#1abc9c','#d9825d'];
            var currentLength = colors.length;
            return {
                getRandomColor : function() {

                    var index = Math.floor((Math.random() * currentLength) + 0);
                    var color = colors[index];
                    colors[index] = colors[currentLength -1];
                    currentLength--;
                    if(currentLength === 0){
                        currentLength = colors.length;
                    }
                   return color;

                }
            }
        });
})();