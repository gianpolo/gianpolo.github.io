/**
 * Created by gferraro on 10/03/2017.
 */
(function(){
    angular.module('app')
        .directive('sideNav',function(){
            return {
                restrict:'AE',
                link:function(scope,elem){
                    elem.sideNav({
                            menuWidth: 300, // Default is 300
                            edge: 'left', // Choose the horizontal origin
                            closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
                            draggable: false // Choose whether you can drag to open on touch screens
                        }
                    );


                }
            }
        })
})();

