/**
 * Created by gferraro on 05/03/2017.
 */
(function () {

    var app = angular.module("app", ['ngRoute']);
    app.config(function ($routeProvider) {
        $routeProvider
            .when("/resume", {templateUrl: 'site/views/resume/resume.html'})
            .when("/hire-me", {templateUrl: 'site/views/hire-me/hire-me.html'})
            .when("/about", {templateUrl: 'site/views/about/about.html'})
            .otherwise({redirectTo: "/home"});
    });

    app.run(['$rootScope', function ($rootScope) {

        //create a new instance
        new WOW().init();


        $rootScope.$on('$routeChangeStart', function (next, current) {
            //when the view changes sync wow

            new WOW().sync();

        });
    }]);
})();