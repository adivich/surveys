'use strict';

angular.module('surveyApp').config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
       // $locationProvider.hashPrefix('!');

        $routeProvider.when('/surveys', {
            template: '<surveys-list></surveys-list>'
        }).when('/surveys/:surveysId', {
            template: '<survey-form></survey-form>'
        }).otherwise('/surveys');
    }
]);